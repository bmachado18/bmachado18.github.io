function SocialButtons({ className = 'justify-center' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a className="p-2 bg-white text-gray-900 border border-primary rounded hover:bg-primary hover:text-white flex items-center gap-2">
        <i className="fas fa-envelope"></i> brentmachado7@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/brent-machado" className="p-2 bg-white text-gray-900 border border-primary rounded hover:bg-primary hover:text-white flex items-center gap-2">
        <i className="fab fa-linkedin-in"></i> LinkedIn
      </a>
      <a href="https://github.com/bmachado18" className="p-2 bg-white text-gray-900 border border-primary rounded hover:bg-primary hover:text-white flex items-center gap-2">
        <i className="fab fa-github"></i> GitHub
      </a>
    </div>
  );
}

export default SocialButtons;
