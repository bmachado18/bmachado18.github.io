import { Link } from 'react-router-dom'

export default function Project3() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Project Three</h1>
      <img
        src="https://via.placeholder.com/800x300"
        alt="Project Three"
        className="w-full"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        massa et sem fermentum, a dignissim ex viverra. Suspendisse potenti.
      </p>
      <p>
        Fusce condimentum, mi vitae porta viverra, neque lorem laoreet orci, eget
        accumsan velit justo sit amet metus. Curabitur eget volutpat sapien.
      </p>
      <Link to="/" className="underline hover:text-gray-600 dark:hover:text-gray-300">
        ← Back to Home
      </Link>
    </div>
  )
}
