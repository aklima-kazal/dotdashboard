export default function ArticleStatusPage({ params }) {
  const { status } = params; // This will be 'drafts', 'scheduled', etc.

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{status} Articles</h1>
      <p className="text-gray-500 mb-6">Managing your {status} content.</p>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        {/* You can fetch data based on the status variable here */}
        <p className="text-center py-10 text-gray-400">
          Fetching list of {status}...
        </p>
      </div>
    </div>
  );
}
