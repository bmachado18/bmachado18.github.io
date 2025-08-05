export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 dark:border-gray-700 p-4 text-center text-sm">
      <p>
        <a href="mailto:brentmachado7@gmail.com" className="underline hover:text-gray-600 dark:hover:text-gray-300">
          brentmachado7@gmail.com
        </a>
        {' '}·{' '}
        <a href="https://www.linkedin.com/in/brent-machado/" className="underline hover:text-gray-600 dark:hover:text-gray-300">
          LinkedIn
        </a>
        {' '}·{' '}
        <a href="https://github.com/bmachado18" className="underline hover:text-gray-600 dark:hover:text-gray-300">
          GitHub
        </a>
      </p>
    </footer>
  )
}
