import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';
import { projects } from '../data/personalData';
import { Project, NavigationSection } from '../types';

interface ProjectsSectionProps {
  onSectionChange?: (section: NavigationSection) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSectionChange }) => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: Project; index: number; featured?: boolean }> = ({ 
    project, 
    index, 
    featured = false 
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${
          featured ? 'lg:col-span-2' : ''
        }`}
      >
        {/* Project Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-white text-lg font-semibold">
              {project.title}
            </div>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>Featured</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
          </div>
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
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects that demonstrate my skills 
          in full-stack development, UI/UX design, and problem-solving.
        </p>
      </motion.div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Star className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Work
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                featured={true}
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Other Projects
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index + featuredProjects.length} 
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in Working Together?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and exciting projects. 
          Let's create something amazing together!
        </p>
        <button 
          onClick={() => onSectionChange && onSectionChange('contact' as NavigationSection)}
          className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </button>
      </motion.section>
    </div>
  );
};
