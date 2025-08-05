export default function Resume() {
  return (
      <div className="p-4 max-w-3xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <p>email@example.com · (123) 456-7890 · City, Country</p>
          <p className="text-sm">
            Short bio about yourself. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </header>
        <section>
          <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="font-medium">Senior Developer - Tech Corp</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">2021 - Present</p>
            <p className="text-sm mt-2">
              Responsible for building web applications. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Junior Developer - Web Studio</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2021</p>
            <p className="text-sm mt-2">
              Worked on various client projects and maintained legacy systems.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
          <div className="mb-4">
            <h3 className="font-medium">University Name</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Degree · 2018</p>
          </div>
          <div>
            <h3 className="font-medium">College Name</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Diploma · 2014</p>
          </div>
        </section>
      </div>
    )
  }
