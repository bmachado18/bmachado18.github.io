export default function Resume() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Brent Machado</h1>
        <p>brentmachado7@gmail.com · Castlegar, BC</p>
        <p className="text-sm">
          Innovative software engineer with expertise in end-to-end testing, machine learning, and cloud-based workflows. Proficient in Python, React, and Playwright, with experience in computer vision, high-performance computing, and tools like SQL, OpenCV, and Tableau.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>

        <div className="mb-4">
          <h3 className="font-medium">Software Developer Coop - Nova Maps</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2024 - Dec 2024 · Victoria, BC</p>
          <p className="text-sm mt-2">
            Built end-to-end testing frameworks using Playwright and React. Automated deployment workflows using AWS CodePipeline. Trained AI models on ephemeral GPU-based EC2 instances to optimize cost and scalability. Collaborated with cross-functional teams to ensure effective communication and adaptability.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-medium">Advanced Computing Researcher - Selkirk Innovates</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">May 2023 - Aug 2023 · Castlegar, BC</p>
          <p className="text-sm mt-2">
            Developed Python scripts and Bash workflows for high-performance computing tasks. Applied version control using Git/GitHub. Conducted research in computer vision and AI, optimizing ML models for cluster performance. Authored clear, collaborative documentation.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-medium">Software Developer Coop - UVic Advancement Services</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2022 - Aug 2022 · Victoria, BC</p>
          <p className="text-sm mt-2">
            Automated mail preprocessing using OCR technology. Performed donor segmentation via unsupervised learning, with insights visualized in Tableau. Built surveys and webpages with HTML, CSS, and JavaScript. Wrote efficient SQL queries for reporting and data analysis.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Education</h2>

        <div className="mb-4">
          <h3 className="font-medium">University of Victoria</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Bachelor of Software Engineering · April 2025</p>
          <p className="text-sm mt-1">Specialization in Data Mining and Analysis, Artificial Intelligence, and Machine Learning</p>
        </div>

        <div>
          <h3 className="font-medium">Selkirk College</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Associate of Sciences · April 2020</p>
          <p className="text-sm mt-1">Completed with Honors</p>
        </div>
      </section>
    </div>
  )
}
