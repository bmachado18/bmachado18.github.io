import { Link } from 'react-router-dom'

export default function Project2() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Project Two hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Project Two</h1>
        <p className="text-sm text-gray-500">February 14, 2024</p>
      </header>
      <section className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          elit a arcu luctus ultricies. Integer sit amet risus eget lacus
          vestibulum vulputate. Cras dictum semper purus, sit amet efficitur
          tellus.
        </p>
        <p>
          Phasellus at neque at quam convallis congue. Donec consectetur,
          nisl id blandit porttitor, neque nisl fringilla lorem, vitae tempor
          odio turpis in nunc. Aliquam erat volutpat. Sed nec tortor magna.
        </p>
        <p>
          Aliquam convallis luctus nunc, a feugiat magna pretium vitae.
          Pellentesque sit amet nisi at massa luctus consectetur. Integer vel
          justo porttitor, consequat nisl sed, ultricies arcu.
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
