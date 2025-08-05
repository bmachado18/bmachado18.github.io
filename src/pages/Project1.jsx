import { Link } from 'react-router-dom'

export default function Project1() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Project One hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Project One</h1>
        <p className="text-sm text-gray-500">January 1, 2024</p>
      </header>
      <section className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
          amet urna quis elit gravida pellentesque. Maecenas vitae turpis ut
          nisl placerat hendrerit. Donec dignissim libero in efficitur
          facilisis.
        </p>
        <p>
          Quisque blandit nulla at orci feugiat, at tincidunt mi aliquam.
          Curabitur ac efficitur erat. Morbi suscipit augue quis nulla cursus,
          a lacinia mauris aliquam. Nulla facilisi. Vivamus euismod, nunc in
          fermentum ullamcorper, enim magna pharetra leo, id luctus metus
          augue in lorem.
        </p>
        <p>
          Suspendisse potenti. Vestibulum non lectus sed risus venenatis
          malesuada. Sed vitae ligula non neque fermentum volutpat. Praesent in
          dui et tortor consectetur mattis et id arcu.
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
