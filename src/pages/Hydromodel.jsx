import { Link } from 'react-router-dom'

export default function Hydromodel() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="/hero/hydro-hero.png"
        alt="Project One hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Hydromodel</h1>
        <p className="text-sm text-gray-500">August 1st, 2025</p>
      </header>
      <section className="space-y-4">
        <p>
The Hydromodel App is a comprehensive web-based platform for hydrological modeling that allows users to delineate watersheds, perform terrain analysis, and run simulations using custom climate and disturbance data. Built with modularity in mind, the application separates concerns between user interaction, API handling, and heavy geospatial processing. It features a clean user interface built with Vue 3 and Quasar, offering map-based workflows using Leaflet and state management via Pinia. On the backend, the platform leverages FastAPI for rapid API development and secure user authentication, while data persistence is handled by PostgreSQL.
        </p>
        <p>
          At the core of the backend architecture is a dual-server setup: one for general API and user management (served by FastAPI), and another for compute-heavy analysis (powered by Celery and Redis). These services are containerized and orchestrated using deployment scripts with NGINX acting as a reverse proxy. Users can authenticate, upload shapefiles, delineate catchments, and trigger model processing jobs, which are handled asynchronously by Celery workers. Terrain analysis and result generation leverage a geospatial Python stack, including GeoPandas, Rasterio, Shapely, Xarray, and PySheds, all configured within a Python 3.12 environment for compatibility.
        </p>
        <p>
The backend is API-driven, with endpoints supporting user registration, login, shapefile uploads, result retrieval, model submission, and admin actions. Processed results—including terrain PDFs and zipped model outputs—are accessible to users via download links. The project supports local development via Uvicorn and deployment via shell scripts and static file bundles. It emphasizes reproducibility, clarity, and extensibility—evident in its structured directories (e.g., hydro_api/, hydro_analysis/, scripts/, docs/), standardized environment files, and clearly documented job management strategy. Overall, Hydromodel is a highly functional, research-backed platform that streamlines complex hydrological workflows through modern web technologies.
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
