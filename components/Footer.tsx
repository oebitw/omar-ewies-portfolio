import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800/50 bg-background-dark">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2026 Omar Ewies. All rights reserved.</p>
        <p className="text-xs text-gray-600 tracking-wide">
          Crafted with precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;