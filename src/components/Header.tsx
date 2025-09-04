import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu } from 'lucide-react';
import { NavigationSection } from '../types';
import { cn } from '../utils/cn';

interface HeaderProps {
  activeSection: NavigationSection;
  onSectionChange: (section: NavigationSection) => void;
  isDark: boolean;
  toggleTheme: () => void;
  onMenuClick: () => void;
}

const navigationItems: { id: NavigationSection; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'resume', label: 'Resume' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSectionChange,
  isDark,
  toggleTheme,
  onMenuClick,
}) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105",
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "relative px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300",
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
