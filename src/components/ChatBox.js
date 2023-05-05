import React from "react";
import { useEffect, useRef, useState } from "react";
import { 
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  QuerySnapshot
 } from "firebase/firestore";
import { db } from "../firebase";

import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const messagescroll = useRef();

  useEffect(() => {
    const q = query(
      collection( db, "messages" ),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id:doc.id });
      });
      setMessages(messages);
    }) 
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={messagescroll}></span>
      <SendMessage scroll={messagescroll} />
    </main>
  );
};

export default ChatBox;
