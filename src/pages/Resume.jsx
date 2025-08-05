export default function Resume() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="mt-2">email@example.com · (123) 456-7890 · City, Country</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="font-medium">Job Title - Company</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
          <p className="text-sm mt-2">Brief description of your role and achievements.</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
        <div>
          <h3 className="font-medium">University Name</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Degree · Year</p>
        </div>
      </section>
    </div>
  )
}
