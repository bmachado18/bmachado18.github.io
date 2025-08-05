import { Link } from 'react-router-dom'

export default function Project1() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Project One</h1>
      <img
        src="https://via.placeholder.com/800x300"
        alt="Project One"
        className="w-full"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet
        urna quis elit gravida pellentesque. Maecenas vitae turpis ut nisl
        placerat hendrerit.
      </p>
      <p>
        Quisque blandit nulla at orci feugiat, at tincidunt mi aliquam. Curabitur
        ac efficitur erat. Morbi suscipit augue quis nulla cursus, a lacinia
        mauris aliquam.
      </p>
      <Link to="/" className="underline hover:text-gray-600 dark:hover:text-gray-300">
        ← Back to Home
      </Link>
    </div>
  )
}
