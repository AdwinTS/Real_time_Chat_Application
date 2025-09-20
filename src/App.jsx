import { useState, useRef } from 'react';
import { Auth } from './components/Auth.jsx';
import Cookies from "universal-cookie";
import { Chat } from './components/Chat.jsx';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.js';
import Home from './components/Home.jsx';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const [showHome, setShowHome] = useState(true);
  const roomInputRef = useRef(null);

  const SignUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  const goHome = () => {
  setShowHome(true);    // Show the home page
  setAuthMode(null);    // Reset login/signup mode
};
    if (showHome) {
    return <Home onContinue={() => setShowHome(false)} />;
  }

  if (!isAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Auth setIsAuth={setIsAuth} goHome={goHome}/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      {room ? (
        <div className="w-full h-full flex justify-center">
          <Chat room={room} />
        </div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col items-center gap-6 w-full max-w-2xl transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-extrabold text-blue-400">Join a Room</h2>
          <div className="w-full">
            <label htmlFor="room-input" className="block text-sm font-medium text-gray-300 mb-2">Enter Room Name:</label>
            <input
              id="room-input"
              ref={roomInputRef}
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="e.g., general-chat"
            />
          </div>
          <button
            onClick={() => setRoom(roomInputRef.current.value)}
            className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 ease-in-out transform hover:-translate-y-1"
          >
            Enter Chat
          </button>
        </div>
      )}
      <div className="mt-8">
        <button
          onClick={SignUserOut}
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default App;