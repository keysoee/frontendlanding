'use client';

import React, { useState } from 'react';

const ChatBar = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <section className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 border-t">
      <form onSubmit={handleSubmit} className="container mx-auto flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
};

export default ChatBar;
