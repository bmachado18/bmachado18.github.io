import { Link } from 'react-router-dom'

export default function Project2() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Project Two</h1>
      <img
        src="https://via.placeholder.com/800x300"
        alt="Project Two"
        className="w-full"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut elit a
        arcu luctus ultricies. Integer sit amet risus eget lacus vestibulum
        vulputate.
      </p>
      <p>
        Phasellus at neque at quam convallis congue. Donec consectetur, nisl id
        blandit porttitor, neque nisl fringilla lorem, vitae tempor odio turpis in
        nunc.
      </p>
      <Link to="/" className="underline hover:text-gray-600 dark:hover:text-gray-300">
        ← Back to Home
      </Link>
    </div>
  )
}
