import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProfileSidebar } from './components/ProfileSidebar';
import { MobileProfileDrawer } from './components/MobileProfileDrawer';
import { MainContent } from './components/MainContent';
import { useTheme } from './hooks/useTheme';
import { NavigationSection } from './types';
import { personalInfo } from './data/personalData';

function App() {
  const [activeSection, setActiveSection] = useState<NavigationSection>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-x-hidden">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onMenuClick={handleMenuClick}
      />
      
      <ProfileSidebar personalInfo={personalInfo} />
      
      <MobileProfileDrawer
        personalInfo={personalInfo}
        isOpen={isMobileMenuOpen}
        onClose={handleMenuClose}
      />
      
      <MainContent activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
}

export default App;
