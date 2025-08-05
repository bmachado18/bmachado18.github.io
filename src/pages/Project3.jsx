import { Link } from 'react-router-dom'

export default function Project3() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Project Three hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Project Three</h1>
        <p className="text-sm text-gray-500">March 20, 2024</p>
      </header>
      <section className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consequat massa et sem fermentum, a dignissim ex viverra.
          Suspendisse potenti. Mauris tempor arcu ut malesuada molestie.
        </p>
        <p>
          Fusce condimentum, mi vitae porta viverra, neque lorem laoreet
          orci, eget accumsan velit justo sit amet metus. Curabitur eget
          volutpat sapien. Pellentesque blandit sapien ut justo tempor, sed
          pulvinar mi tincidunt.
        </p>
        <p>
          Morbi rhoncus, eros a laoreet cursus, justo dolor mattis lorem,
          eu ultricies est lacus ut arcu. Integer et magna eget risus
          finibus pretium et a lorem.
        </p>
      </section>
      <Link
        to="/"
        className="underline hover:text-gray-600 dark:hover:text-gray-300"
      >
        ← Back to Home
      </Link>
    </article>
  )
}
