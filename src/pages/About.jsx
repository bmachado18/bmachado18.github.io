export default function About() {
  const gallery = [
    'https://via.placeholder.com/400x400?text=Photo+1',
    'https://via.placeholder.com/400x400?text=Photo+2',
    'https://via.placeholder.com/400x400?text=Photo+3',
    'https://via.placeholder.com/400x400?text=Photo+4',
  ]

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300">
          I am Brent, a Software Engineer who has graduated from the University
          of Victoria.
        </p>
      </header>
      <section>
        <h2 className="sr-only">Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="object-cover w-full h-48 rounded-lg"
            />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <p>
          I started exploring tech in 2016 through WordPress and game
          development with Python. Since then, I’ve focused on backend
          development, working with modern stacks and distributed systems,
          both in academic projects and research roles. Currently, I’m a
          Graduate Researcher contributing to backend architecture and data
          processing workflows.
        </p>
        <p>This site is where I document what I’m building and learning.</p>
      </section>
    </div>
  )
}

