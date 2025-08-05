import { Link } from 'react-router-dom'

export default function Home() {
    const projects = [
      {
        title: 'Project One',
        year: 2024,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com/300x200',
        link: '/project1'
      },
      {
        title: 'Project Two',
        year: 2023,
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://via.placeholder.com/300x200',
        link: '/project2'
      },
      {
        title: 'Project Three',
        year: 2022,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        image: 'https://via.placeholder.com/300x200',
        link: '/project3'
      }
    ]

  return (
      <div className="p-4 space-y-8">
        <div className="text-center space-y-4">
          <img
            src="https://via.placeholder.com/600x200"
            alt="placeholder"
            className="mx-auto"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            ligula sit amet lectus convallis aliquet vitae vitae dui.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
          <ul className="space-y-4">
            {projects.map((p) => (
              <li key={p.title}>
                <Link
                  to={p.link}
                  className="flex flex-col md:flex-row md:items-center md:space-x-4 border p-4 rounded hover:shadow-lg transition transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800"
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
