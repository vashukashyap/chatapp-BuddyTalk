"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import "../../styles/chats.css";
import "../../styles/index.css";

import {
  ChatEngine,
  NewChatForm,
  MessageFormSocial,
  getOrCreateChat,
} from "react-chat-engine";
import Navbar from "./components/navbar";

export default function Chats() {
  const router = useRouter();

  const [directMessageUser, setDirectMessageUsername] = useState("");
  const [showChat, setShowChat] = useState(true);
  const [username, setUsername] = useState(
    secureLocalStorage.getItem("username")
  );
  const [password, setPassword] = useState(
    secureLocalStorage.getItem("password")
  );

  function createDirectChat(e,creds) {
    e.preventDefault();
    getOrCreateChat(
      creds,
      {
        is_direct_chat: true,
        usernames: [directMessageUser],
        title: directMessageUser,
      },
      () => setDirectMessageUsername("")
    );
  }

  useEffect(() => {
    if (username == null || password == null) router.push("/");
  });

  if (!showChat) return <div />;

  function renderChatForm(creds) {
    return (
      <div className="border-b-2 mb-1">
        <NewChatForm />
        <form onSubmit={(e) => createDirectChat(e,creds)}>
          <div className="flex mx-2 my-2">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Friend"
              onChange={(e) => {
                setDirectMessageUsername(e.target.value);
              }}
            />
          </div>
          </form>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-16">
        <ChatEngine
          height="90vh"
          projectID={process.env.PROJECT_ID}
          userName={username}
          userSecret={password}
          renderNewMessageForm={() => <MessageFormSocial />}
          renderNewChatForm={(creds) => renderChatForm(creds)}
          onFailAuth={(props) => secureLocalStorage.setItem('password', null)}
        />
      </div>
    </>
  );
}
