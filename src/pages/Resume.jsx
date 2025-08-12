export default function ResumePDF() {
  const pdfUrl = "/brent-machado-resume.pdf"; // change if needed

  return (
    <div className="mx-auto max-w-4xl p-4 space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Resume</h1>
        <div className="flex items-center gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline"
          >
            Open in new tab
          </a>
          <a
            href={pdfUrl}
            download
            className="text-sm rounded-xl border px-3 py-1 hover:bg-gray-50 dark:hover:bg-zinc-800"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* PDF viewer */}
      <div className="rounded-2xl border shadow overflow-hidden">
        {/* iframe tends to be the most compatible simple embed */}
        <iframe
          src={`${pdfUrl}#view=FitH`}
          title="Brent Machado Resume PDF"
          className="w-full h-[80vh]" // scrollable area
        />
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        If the PDF doesn’t load in your browser,{" "}
        <a href={pdfUrl} target="_blank" rel="noreferrer" className="underline">
          click here to open it
        </a>
        .
      </p>
    </div>
  );
}