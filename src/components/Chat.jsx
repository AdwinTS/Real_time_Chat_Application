import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const appId = typeof __app_id !== 'undefined' ? __app_id : import.meta.env.VITE_FIREBASE_APP_ID;

export const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, `artifacts/${appId}/public/data/messages`);

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [room]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage === "") return;
    const userDisplayName = auth.currentUser?.displayName || 'Anonymous';

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: userDisplayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gray-900 p-6 border-b border-gray-700 text-center">
        <h1 className="text-3xl font-extrabold text-blue-400">Room: <span className="text-gray-200">{room.toUpperCase()}</span></h1>
      </div>
      <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start">
            <div className="bg-gray-700 text-gray-100 p-4 rounded-3xl max-w-xs md:max-w-md break-words shadow-md transition-all duration-300 transform hover:scale-[1.01]">
              <span className="font-bold text-blue-300 mr-2">{message.user}:</span>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-700 bg-gray-900 space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="flex-1 p-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:-translate-y-0.5"
        >
          Send
        </button>
      </form>
    </div>
  );
};