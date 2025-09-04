import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Coffee, Heart, MapPin, Calendar, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { aboutData, contactData } from '../data/personalData';

export const AboutSection: React.FC = () => {
  const educationTimeline = aboutData.education.map((edu, index) => ({
    year: edu.period.split('–')[0],
    title: edu.degree,
    description: `${edu.institution} | ${edu.grade}`,
    icon: GraduationCap,
  }));

  const experienceTimeline = aboutData.experience.map((exp, index) => ({
    year: exp.period.split(' ')[0],
    title: exp.title,
    description: `${exp.company} | ${exp.description}`,
    icon: Briefcase,
  }));

  const interests = [
    'Data Analysis',
    'Machine Learning',
    'Data Visualization',
    'Python Development',
    'Business Intelligence',
    'Statistical Analysis',
    'Problem Solving',
    'Leadership'
  ];

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
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Learn about my educational background, professional experience, and what drives me as a data analyst.
        </p>
      </motion.div>

      {/* Personal Story */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          My Story
        </h3>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            My journey into data analysis began during my Computer Science Engineering studies when I discovered 
            the power of data to reveal insights and drive business decisions. What started as academic curiosity 
            quickly became a passion for transforming raw data into actionable intelligence.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I believe in the importance of clean data, meaningful visualizations, and statistical rigor. 
            Every dataset tells a story, and I'm passionate about uncovering those stories to help 
            organizations make informed decisions and solve complex problems.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Through internships, academic projects, and leadership roles, I've developed expertise in 
            Python, SQL, Power BI, and machine learning. I'm always eager to tackle new challenges 
            and contribute to data-driven solutions that create real business value.
          </p>
        </div>
      </motion.section>

      {/* Career Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 mb-8">
          <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Education & Experience
          </h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
          
          <div className="space-y-12">
            {/* Education Section */}
            <div className="relative">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center pl-20">
                <div className="absolute left-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                Education
              </h4>
              <div className="space-y-6 pl-20">
                {aboutData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h5>
                    {edu.institution && (
                      <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                        {edu.institution}
                      </p>
                    )}
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {edu.grade}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="relative">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center pl-20">
                <div className="absolute left-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                Professional Experience
              </h4>
              <div className="space-y-6 pl-20">
                {aboutData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h5>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Leadership */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  Certifications
                </h4>
                <div className="space-y-4">
                  {aboutData.certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                      className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all duration-200"
                    >
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {cert}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  Leadership & Extracurriculars
                </h4>
                <div className="space-y-4">
                  {aboutData.leadership.map((role, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                      className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800 hover:shadow-md transition-all duration-200"
                    >
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interests & Hobbies */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Interests & Hobbies
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 text-center hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/20 dark:hover:to-primary-800/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {interest}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Location & Availability */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 shadow-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Location & Availability
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Based in {contactData.address}, available for remote work and on-site opportunities. 
              I enjoy collaborating with teams and contributing to data-driven decision making.
            </p>
            <div className="flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                Available for new opportunities
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              What I'm Looking For
            </h4>
            <div className="space-y-3">
              {[
                'Data analyst and business intelligence roles',
                'Machine learning and predictive analytics projects',
                'Collaborative team environments',
                'Opportunities to learn and grow in data science',
                'Projects that drive business value through data insights'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
