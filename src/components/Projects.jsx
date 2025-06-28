const Projects = () => {
  const projects = [
    {
      title: "Returned Mail OCR",
      desc: "Simplifies tedious data entry with computer vision, optical character recognition, and Python",
      link: "https://github.com/bmachado18/Returned-Mail-OCR-Project"
    },
    {
      title: "Defect Detection Study",
      desc: "A proof of concept to automate lumber defect detection, leveraging artifical intelligence, computer vision, and Python",
      link: "https://github.com/bmachado18/peak-renewables-archived"
    },
    {
      title: "React Jobs",
      desc: "A mock job board for business to post jobs and front-end devs to find jobs built with React",
      link: "https://github.com/bmachado18/react-jobs"
    }
  ]

  
  return (
    <section className="bg-white text-gray-900 pt-5 pb-32" id="projects">
      <div className="container mx-auto items-center">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-red-900 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            Here are some of my favourite projects!
          </p>
        </div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
            return (
              <div className="relative" key={i}>
                <div className="project-card bg-white rounded-lg shadow-lg p-5 relative hover:bg-secondary hover:shadow-xl transition duration-300">
                  <h1 className="text-2xl font-bold mb-5 border-b-[2px] w-[300px] border-red-900 pb-2">
                    {project.title}
                  </h1>
                  <p className="py-5 text-center font-bold px-2">
                    {project.desc}
                  </p>

                  <div className="mx-auto">
                    <a
                      href={project.link}
                      className="px-5 py-2 bg-white text-gray-900 border border-primary hover:bg-primary hover:text-white font-bold"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Projects

