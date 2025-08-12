import { Link } from 'react-router-dom'

export default function MailOCR() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="/hero/ocr-hero.png"
        alt="Project Three hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Returned Mail OCR Project</h1>
        <p className="text-sm text-gray-500">March 20, 2024</p>
      </header>
      <section className="space-y-4">
        <p>
          The Returned Mail OCR Project is a Python-based tool designed to streamline data extraction from scanned appeal letters using the Tesseract OCR engine. It automates the otherwise manual task of transcribing contact and appeal details from returned mail documents into a structured Excel file. The project currently supports three types of appeal formats: law appeals, general appeals without a constituent ID, and general appeals with one. This makes it a targeted solution for organizations dealing with high volumes of returned correspondence, particularly in administrative or fundraising contexts.
        </p>
        <p>
          The application provides both a command-line interface (CLI) and a graphical user interface (GUI) for ease of use. The CLI guides users through batch processing steps interactively, while the GUI allows users to select PDF files, scan documents, and generate Excel output files with button clicks. Once scanned, the program attempts to extract fields like Name, Address Lines 1–3, Appeal ID, and Constituent ID when available. A temporary images folder is created during processing for verification purposes and can be easily deleted after review.
        </p>
        <p>
          Installation is handled via an Anaconda environment, using an environment.yml file to set up dependencies, ensuring a reproducible and isolated Python environment named ocr_proj. The tool is well-suited for internal workflows that require digitizing batches of returned mail for data reconciliation, contact updates, or follow-up. Its combination of OCR automation, structured export, and user-friendly controls make it a practical asset for administrative teams.
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
