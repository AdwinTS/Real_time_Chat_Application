import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-2xl shadow-2xl space-y-6 transform transition-transform duration-300 hover:scale-105 w-full max-w-sm">
      <h2 className="text-3xl font-extrabold text-white text-center">
        Sign In
      </h2>
      <p className="text-gray-400 text-center text-lg">
        Sign In With Google To Continue
      </p>
      <button
        onClick={signInWithGoogle}
        className="w-full py-4 px-6 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg flex items-center justify-center space-x-3 transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.24 10.21l-.01.01-1.63 1.57c-2.02 1.94-3.3 4.29-3.3 7.02l.02.2c.4 3.65 3.32 6.57 6.97 6.97h.2c2.73 0 5.08-1.28 7.02-3.31l1.57-1.63a.85.85 0 00.19-.38.85.85 0 00-.38-.19l-1.57 1.63c-1.63 1.57-3.69 2.47-5.96 2.47a6.83 6.83 0 01-6.84-6.84c0-2.27.9-4.33 2.47-5.96l1.63-1.57a.85.85 0 00.38-.19.85.85 0 00-.38.19zM12.24 1.79l-1.63 1.57c-1.63 1.57-2.47 3.69-2.47 5.96a6.83 6.83 0 006.84 6.84c2.27 0 4.33-.9 5.96-2.47l1.57-1.63a.85.85 0 00.38-.19.85.85 0 00-.38.19l-1.57 1.63c-2.02 1.94-3.3 4.29-3.3 7.02l.02.2c.4 3.65 3.32 6.57 6.97 6.97h.2c2.73 0 5.08-1.28 7.02-3.31l1.57-1.63a.85.85 0 00.19-.38.85.85 0 00-.38-.19l-1.57 1.63z" />
        </svg>
        <span className="ml-2">Sign In with Google</span>
      </button>
    </div>
  );
};