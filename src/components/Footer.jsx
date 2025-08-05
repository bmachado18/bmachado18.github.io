export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 dark:border-gray-700 p-4 text-center text-sm">
      <p>
        <a href="mailto:email@example.com" className="underline hover:text-gray-600 dark:hover:text-gray-300">
          email@example.com
        </a>
        {' '}·{' '}
        <a href="https://linkedin.com/in/username" className="underline hover:text-gray-600 dark:hover:text-gray-300">
          LinkedIn
        </a>
        {' '}·{' '}
        <a href="https://github.com/username" className="underline hover:text-gray-600 dark:hover:text-gray-300">
          GitHub
        </a>
      </p>
    </footer>
  )
}
