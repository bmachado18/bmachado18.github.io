import { Link } from 'react-router-dom'

export default function Peakrenewables() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="/hero/peak-hero.png"
        alt="Project Three hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Peak Renewables</h1>
        <p className="text-sm text-gray-500">March 20, 2024</p>
      </header>
      <section className="space-y-4">
        <p>
          The Peak Renewables project aimed to automate the quality control of wodden studs using machine vision and AI. The manual inspection process took 4-6 operators to identify defects like knots, holes, and wane. The goal was simple - to replace this labor intensive process with an automated camera-based system that scans all edges of each board, and passes or fails the board based on such.
        </p>
        <p>
          My contributions to this project involved thoroughly testing and documenting traditional computer visions methodologies, then training an AI model to test such. After sufficiently testing traditional methods, we decided to use YOLOv5, a state-of-the-art object detection model known for its speed and accuracy. After scavenging the internet for training data, we found labelled a 20,000 image dataset to train a model - it was until I tried training the model on my personal laptop I realized that we needed more computing power and reliability. This lead us to using the Digital Research Alliance of Canada (DRAC) High-Performance Computing (HPC) clusters, where I ended up designing a pipeline to untar data, re-annotate data in the proper format, conduct a train-test split, begin training with various techniques, and leveraging ML observability with CometML to review how training is performing. 
        </p>
        <p>
          The codebase is well-organized and modular, with directories dedicated to interactive notebooks, utility scripts, traditional CV methods, YOLO training dependencies, and job submission scripts. Supporting documentation includes detailed markdown notes on deep learning, YOLOv5 architecture, and project-specific glossaries. The system also maintains structured folders for versioned datasets and output results. With this combination of high-performance compute, deep learning, and real-world integration, the codebase is positioned to deliver a performant defect detection pipeline that could significantly reduce waste and labor costs in wood product manufacturing.
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
