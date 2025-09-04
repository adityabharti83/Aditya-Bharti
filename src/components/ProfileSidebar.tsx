import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { PersonalInfo } from '../types';
import { cn } from '../utils/cn';

interface ProfileSidebarProps {
  personalInfo: PersonalInfo;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ personalInfo }) => {
  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: personalInfo.github },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-4 top-24 w-80 z-40 hidden lg:block h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-primary-600 dark:text-primary-400 font-medium">
            {personalInfo.title}
          </p>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 group"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm text-gray-900 dark:text-white font-medium truncate">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Available for remote work</span>
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
};
