import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Launches', href: '/launches' },
  { label: 'Rockets', href: '/rockets' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* logo*/}
            <div className="flex items-center space-x-2">
              <div className="w-32 h-24 rounded-full flex items-center justify-center">
                <img 
                  src='/logo.png'
                />
                </div>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 text-sm font-medium normal-case rounded-md transition-colors duration-200"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Desktop login btn */}
            <div className="hidden md:flex items-center">
              <Button 
                variant="contained" 
                sx={{
                  bgcolor: '#3C50A0', 
                  '&:hover': { bgcolor: '#3C50B3' }, 
                }}
                className=" text-white px-6 py-2 text-sm font-medium normal-case rounded-md transition-colors duration-200"
              >
                Login
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className="text-gray-700 hover:text-gray-900"
              >
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile viewnav*/}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                fullWidth
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium normal-case rounded-md transition-colors duration-200 justify-start"
              >
                {item.label}
              </Button>
            ))}
            <div className="pt-2">
              <Button 
                variant="contained" 
                sx={{
                  bgcolor: '#3C50A0', 
                  '&:hover': { bgcolor: '#3C50B3' }, 
                }}
                fullWidth
                className=" text-white px-6 py-2 text-base font-medium normal-case rounded-md transition-colors duration-200"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;