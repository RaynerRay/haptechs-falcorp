import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram
} from '@mui/icons-material';

const footerLinks = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' }
];

const Footer: React.FC = () => {
  return (
    <Box className="bg-white border-t border-gray-200 mt-12">
      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Box className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side*/}
          <Box className="flex space-x-6 text-sm text-gray-600">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#3b4ca3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </Box>

          {/* middlw */}
          <Typography variant="body2" className="text-sm text-gray-500">
            © {new Date().getFullYear()} Haptechs. All rights reserved.
          </Typography>

          {/* Right side*/}
          <Box className="flex space-x-3">
            <IconButton
              aria-label="Facebook"
              className="text-gray-600 hover:text-[#3b4ca3]"
            >
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              className="text-gray-600 hover:text-[#3b4ca3]"
            >
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-[#3b4ca3]"
            >
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              className="text-gray-600 hover:text-[#3b4ca3]"
            >
              <Instagram fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
