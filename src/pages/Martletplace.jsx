import { Link } from 'react-router-dom'

export default function Martletplace() {
  return (
    <article className="p-4 max-w-3xl mx-auto space-y-6">
      <img
        src="/hero/martletplace-hero.png"
        alt="Project Two hero"
        className="w-full h-64 object-cover rounded"
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">MartletPlace</h1>
        <p className="text-sm text-gray-500">February 14, 2024</p>
      </header>
      <section className="space-y-4">
        <p>
          The backend of the MartletPlace project is designed with a strong emphasis on scalability, modularity, and developer familiarity, making it a robust foundation for a university-centric marketplace. It is built on a Node.js and Express stack, chosen for its non-blocking, event-driven architecture and alignment with the frontend JavaScript ecosystem. The backend is implemented as a set of microservices, including services for users, listings, reviews, messaging, and charities. This architecture ensures adherence to the Single Responsibility Principle, improving maintainability and enabling independent scaling of services as the platform grows.
        </p>
        <p>
          Requests from the frontend are routed through an NGINX reverse proxy, which delegates traffic to the appropriate backend microservice. For internal communication, services interact with a centralized data layer that abstracts access to a PostgreSQL database. This abstraction promotes separation of concerns and encapsulation. The PostgreSQL instance is optimized with PgBouncer for connection pooling, supporting high concurrency. Other supporting technologies include Redis for caching, Traefik for load balancing in production, and Vitest for backend testing due to its integrated mocking and assertion tools.
        </p>
        <p>
          In terms of functionality, the backend supports user authentication via JWT, real-time messaging via WebSockets, proximity-based search using geolocation, and charity-linked transactions. The system also includes services for search and recommendations, powered by Elasticsearch and TensorFlow respectively, which are treated as algorithmic microservices interfacing with the backend. API endpoints are clearly defined and documented, supporting actions like creating listings, editing user profiles, retrieving search results, and interacting with charity events. This modular, scalable, and secure backend architecture positions MartletPlace to support both high user traffic and evolving feature requirements in a university ecosystem.
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
