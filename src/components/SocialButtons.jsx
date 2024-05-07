import React from 'react';

function SocialButtons() {
  return (
    <div className="flex justify-center gap-4">
      <a className="p-2 bg-red-700 text-white rounded hover:bg-red-900 flex items-center gap-2">
        <i className="fas fa-envelope"></i> brentmachado7@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/brent-machado" className="p-2 bg-red-700 text-white rounded hover:bg-red-900 flex items-center gap-2">
        <i className="fab fa-linkedin-in"></i> LinkedIn
      </a>
      <a href="https://github.com/bmachado18" className="p-2 bg-red-700 text-white rounded hover:bg-red-900 flex items-center gap-2">
        <i className="fab fa-github"></i> GitHub
      </a>
    </div>
  );
}

export default SocialButtons;
