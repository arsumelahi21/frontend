export const metadata = {
  title: 'Job Matcher',
  description: 'A minimal job-candidate matching system using vector similarity in PostgreSQL',
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to <span className="text-blue-600">Job Matcher</span></h1>
        <p className="text-gray-600 mb-8">
          Use our simple tool to add job listings, register candidate profiles, and match them using AI-powered similarity.
        </p>

        <nav className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/add-job"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
          >
            ➕ Add Job
          </a>
          <a
            href="/add-candidate"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow"
          >
            👤 Add Candidate
          </a>
          <a
            href="/match"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow"
          >
            🔍 Match Candidates
          </a>
        </nav>
      </div>
    </main>
  );
}
