'use client';

import { generateAnswer } from '@/lib/gemini';
import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Hello! Need help selling your software license?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

 const [loading, setLoading] = useState(false);

const sendMessage = async () => {
  if (!input.trim() || loading) return;

  setLoading(true);
  const newMessage = { text: input.trim(), sender: 'user' };
  setMessages((prev) => [...prev, newMessage]);
  setInput('');

  const reply = await generateAnswer(newMessage.text+". Give me a short answer");
  const geminiMessage = { text: reply, sender: 'bot' };
  setMessages((prev) => [...prev, geminiMessage]);
  setLoading(false);
};

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border border-[#3d2b80] bg-[#1a133b] shadow-lg">
      <div className="bg-[#22184d] text-white text-center py-3 font-semibold border-b border-[#3d2b80]">
        Chat Support
      </div>

      <div className="h-80 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-[#3d2b80]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-lg text-sm shadow-md ${
              msg.sender === 'user'
                ? 'bg-[#4e2a84] text-white ml-auto text-right'
                : 'bg-[#2e1c57] text-[#d1c9f5] text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex items-center bg-[#1a133b] border-t border-[#3d2b80] px-4 py-3"
      >
        <input
          type="text"
          className="flex-1 bg-transparent text-white placeholder-[#888] text-sm outline-none py-2 px-3"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-[#f472b6] hover:bg-[#ec4899] rounded-full transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
