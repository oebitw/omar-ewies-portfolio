import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-10 border-t border-border-subtle bg-bg-base pb-24 md:pb-10">
      <div className="max-w-[960px] mx-auto px-6 text-center">
        <p className="text-sm text-text-secondary mb-2">Omar Ewies</p>
        <p className="text-xs text-text-muted">Crafted with precision</p>
      </div>
    </footer>
  );
};

export default Footer;
