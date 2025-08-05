export default function Home() {
  const projects = [
    {
      title: 'Project One',
      year: 2024,
      description: 'Placeholder description for project one.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Project Two',
      year: 2023,
      description: 'Placeholder description for project two.',
      image: 'https://via.placeholder.com/300x200'
    }
  ]

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/600x200"
          alt="placeholder"
          className="mx-auto"
        />
        <p className="mt-4">Welcome to my site. Here&apos;s a small text blurb about me.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li
              key={p.title}
              className="flex flex-col md:flex-row md:items-center md:space-x-4 border p-4 rounded"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full md:w-48 h-32 object-cover"
              />
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.year}</p>
                <p className="mt-2 text-sm">{p.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
