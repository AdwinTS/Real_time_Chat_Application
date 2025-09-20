// components/Home.jsx
function Home({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Welcome to ChatSphere 🚀</h1>
      <p className="text-lg text-gray-200 mb-8 max-w-lg text-center">
        Connect, collaborate, and chat in real-time with friends and teams. 
        Start by signing in and joining your favorite room.
      </p>
      <button
        onClick={onContinue}
        className="py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform hover:-translate-y-1"
      >
        Continue →
      </button>
    </div>
  );
}

export default Home;
