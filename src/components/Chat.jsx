import { Send, MoreVertical, Trash2, Copy } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const user = {
    name: "Alex Johnson",
    profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
  };
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeMessageMenu, setActiveMessageMenu] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: user.name,
      profilePicture: user.profilePicture,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    setTimeout(() => {
      const botMessage = {
        id: Date.now(),
        sender: "Chatbot",
        profilePicture:
          "https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg",
        text: "This is a bot reply!",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        read: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    setActiveMessageMenu(null);
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    setActiveMessageMenu(null);
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="flex flex-col justify-evenly mb-5">
        <h1 className="text-2xl font-bold mb-1 text-blue-950">AI Assitant</h1>
        <span className="text-sm font-bold text-gray-600">
          Get instant help with mentors, communities, and platform guidance
        </span>
      </div>
      <div className="grid grid-rows-[15%_75%_10%] border border-gray-300 rounded-lg h-128 w-150">
        <div className="flex items-center gap-4 border-b border-gray-300 p-5 bg-blue-50 rounded-t rounded-b-none rounded-lg">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg"
              alt="Chatbot"
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-meduim font-bold">Momentum AI</h3>
            <span className="text-sm text-gray-500">
              Online • Instant responses
            </span>
          </div>
        </div>
        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === user.name ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-2 max-w-xs lg:max-w-md ${
                    msg.sender === user.name ? "flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={msg.profilePicture}
                    alt={msg.sender}
                    className="w-8 h-8 rounded-full flex-shrink-0 mt-1"
                  />

                  <div className="relative group">
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        msg.sender === user.name
                          ? "bg-blue-100 rounded-br-none"
                          : "bg-white border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      <p className="text-gray-800">{msg.text}</p>
                      <div
                        className={`flex items-center mt-1 text-xs ${
                          msg.sender === user.name
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <span className="text-gray-500">{msg.time}</span>
                        {msg.sender === user.name && (
                          <span
                            className={`ml-1 ${
                              msg.read ? "text-blue-500" : "text-gray-400"
                            }`}
                          >
                            ✓✓
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message options */}
                    <button
                      className={`absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full bg-gray-100 shadow-sm
                        ${msg.sender === user.name ? "-left-8" : "-right-8"}`}
                      onClick={() =>
                        setActiveMessageMenu(
                          activeMessageMenu === msg.id ? null : msg.id
                        )
                      }
                    >
                      <MoreVertical className="w-4 h-4 text-gray-500" />
                    </button>

                    {/* Message menu */}
                    {activeMessageMenu === msg.id && (
                      <div
                        className={`absolute z-10 bg-white rounded-lg shadow-lg py-1 w-32
                        ${msg.sender === user.name ? "right-0" : "left-0"}`}
                      >
                        {msg.sender === user.name ? (
                          <>
                            <button
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                              onClick={() => deleteMessage(msg.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                              onClick={() => copyMessage(msg.text)}
                            >
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="flex items-center border-t border-gray-300 justify-evenly">
          <input
            className="w-128 p-3 font-semibold border h-8 border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-500 p-2 rounded-lg hover:bg-blue-700 cursor-pointer text-white  disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={sendMessage}
            disabled={message.trim() === ""}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
