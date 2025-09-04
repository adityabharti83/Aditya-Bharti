import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Filter, Calendar, MapPin, Award, Briefcase, GraduationCap, Users, ExternalLink } from 'lucide-react';
import { resumeItems, resumeCategories } from '../data/personalData';
import { ResumeItem } from '../types';

export const ResumeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filteredItems = resumeItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.type === selectedCategory;
    const skillMatch = selectedSkills.length === 0 || 
      selectedSkills.some(skill => item.skills.includes(skill));
    return categoryMatch && skillMatch;
  });

  const allSkills = Array.from(new Set(resumeItems.flatMap(item => item.skills))).sort();

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'experience': return Briefcase;
      case 'education': return GraduationCap;
      case 'certification': return Award;
      case 'leadership': return Users;
      default: return Calendar;
    }
  };

  const toggleSkillFilter = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_Bharti_Data_Analyst.pdf';
    link.download = 'Aditya_Bharti_Data_Analyst.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewResume = () => {
    window.open('/Aditya_Bharti_Data_Analyst.pdf', '_blank');
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Resume
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Explore my professional journey with filterable timeline and detailed achievements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={viewResume}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Eye className="w-5 h-5" />
            <span>View Resume</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Category Filter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Filter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Filter by Skills
          </h3>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {allSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkillFilter(skill)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedSkills.includes(skill)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {selectedSkills.length > 0 && (
            <button
              onClick={() => setSelectedSkills([])}
              className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              Clear all filters
            </button>
          )}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
        
        <div className="space-y-8">
          {filteredItems.map((item, index) => {
            const CategoryIcon = getCategoryIcon(item.type);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                  <CategoryIcon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {resumeCategories.find(cat => cat.id === item.type)?.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{item.organization}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Skills & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                            selectedSkills.includes(skill)
                              ? 'bg-primary-600 text-white'
                              : 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            No items found matching your filters.
          </p>
        </motion.div>
      )}

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {resumeCategories.slice(1).map((category) => {
          const count = resumeItems.filter(item => item.type === category.id).length;
          return (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {category.label}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
