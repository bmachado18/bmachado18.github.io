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
          The Peak Renewables project is a collaborative initiative between Selkirk Innovates and Peak Renewables aimed at automating the quality control of wooden studs using machine vision and AI. Currently, Peak employs a manual visual inspection system using an older finger-jointing machine, requiring 4–6 operators to identify defects like knots, holes, and wane. The goal is to replace this labor-intensive process with an automated camera-based system that scans all edges of each board as it moves along a conveyor. The system will apply a pass/fail classification based on NLGA SPS 1 specifications, triggering mechanical controls to either reject or accept the board for finger-jointing. A secondary goal includes optimizing board recovery by identifying precise cut lines to salvage usable material from partially defective boards.
        </p>
        <p>
          The backend infrastructure of the project is designed to support data-intensive computer vision workloads, leveraging both traditional OpenCV methods and modern deep learning techniques. Early exploration using classic image processing (e.g., edge detection) proved insufficiently robust for real-world use. As a result, the project transitioned to using YOLOv5, a state-of-the-art object detection model known for its speed and accuracy. A full training and testing pipeline for YOLOv5 was established using Digital Research Alliance Canada (DRAC) HPC clusters. The process involves converting annotated image data to YOLO format, performing a dataset split, packaging the dataset into a tarball, and running job scripts via SLURM. Model outputs, including weights and metrics, are logged and versioned based on job IDs.
        </p>
        <p>
          The codebase is well-organized and modular, with directories dedicated to interactive notebooks, utility scripts, traditional CV methods, YOLO training dependencies, and job submission scripts. Supporting documentation includes detailed markdown notes on deep learning, YOLOv5 architecture, and project-specific glossaries. The system also maintains structured folders for versioned datasets and output results. With this combination of high-performance compute, deep learning, and real-world integration, the backend is positioned to deliver a scalable and accurate automated quality assurance system that could significantly reduce waste and labor costs in wood product manufacturing.
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
