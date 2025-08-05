import { Link } from 'react-router-dom'

export default function Home() {
    const projects = [
      {
        title: 'Hydromodel App',
        year: 2025,
        description: 'A web UI for the Raven hydrology model, designed to simplify scenario creation and visualize how environmental changes. Built with VueJS and FastAPI.',
        image: '/teasers/hydro-teaser.png',
        //link: '/project1'
      },
      {
        title: 'MartletPlace',
        year: 2024,
        description: 'Recreating FB Marketplace for Students as a capstone project. Built with React and NodeJS in a microservices architecture.',
        image: '/teasers/martletplace-teaser.png',
        //link: '/project2'
      },
      {
        title: 'Peak Renewables',
        year: 2023,
        description: 'A machine vision project aimed at automating quality control in engineered wooden stud fabrication to enhance efficiency and reduce waste. Built with Python.',
        image: '/teasers/peak-teaser.png',
        //link: '/project3'
      },
      {
        title: 'Returned Mail OCR',
        year: 2022,
        description: 'Simplifies tedious data entry with computer vision, optical character recognition, and Python.',
        image: '/teasers/ocr-teaser.png',
        //link: '/project3'
      }
    ]

  return (
      <div className="px-4 md:px-12 py-16 space-y-16">
        <div className="text-center space-y-12">
          <img
            src="/Logo2.svg"
            alt="placeholder"
            className="mx-auto"
          />
          <p>
            I’m Brent Machado, a backend-focused software engineer passionate about building efficient, data-driven systems.
          </p>
          <p>
            Dive into my portfolio to explore my project’s impact on the world!
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 py-8">Featured Projects</h2>
          <ul className="space-y-6">
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
