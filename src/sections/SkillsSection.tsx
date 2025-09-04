import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Target } from 'lucide-react';
import { skills } from '../data/personalData';
import { Skill } from '../types';

const categoryIcons = {
  technical: Code,
  soft: Lightbulb,
};

const categoryColors = {
  technical: 'from-blue-500 to-purple-600',
  soft: 'from-green-500 to-teal-600',
};

export const SkillsSection: React.FC = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const IconComponent = categoryIcons[skill.category];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[skill.category]}`}>
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
          </div>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {skill.level}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          />
        </div>
      </motion.div>
    );
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
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical abilities and soft skills that I've developed 
          throughout my career in software development.
        </p>
      </motion.div>

      {/* Technical Skills */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Technical Skills
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Soft Skills */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Soft Skills
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index + technicalSkills.length} />
          ))}
        </div>
      </motion.section>

      {/* Skills Summary */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            What I Bring to the Table
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Technical Expertise
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Strong foundation in modern web technologies with hands-on experience in 
              full-stack development. Proficient in React ecosystem, backend technologies, 
              and cloud platforms.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Professional Skills
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Excellent communication and collaboration abilities with a proven track record 
              of leading projects and mentoring team members. Strong problem-solving mindset 
              with attention to detail.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
