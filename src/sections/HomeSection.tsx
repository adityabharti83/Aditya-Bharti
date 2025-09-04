import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalData';

import { NavigationSection } from '../types';

interface HomeSectionProps {
  onSectionChange?: (section: NavigationSection) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSectionChange }) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_Bharti_Data_Analyst.pdf';
    link.download = 'Aditya_Bharti_Data_Analyst.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewProjects = () => {
    if (onSectionChange) {
      onSectionChange('projects' as NavigationSection);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-[600px] space-y-8">
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left"
      >
        <motion.h1
          className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[0]}
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {personalInfo.bio} I specialize in creating exceptional digital experiences 
          that combine beautiful design with powerful functionality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button 
            onClick={downloadResume}
            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Download Resume</span>
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={viewProjects}
            className="group px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>View Projects</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {[
          { number: '50+', label: 'Projects Completed' },
          { number: '3+', label: 'Years Experience' },
          { number: '20+', label: 'Happy Clients' },
          { number: '10+', label: 'Technologies' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
          >
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};
