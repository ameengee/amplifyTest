// import './chatStyles.css';

import React from 'react'

import Header from './Header.js';
import Input from './Input.js';
import ChatHistory from './ChatHistory.js'
import { useSelector } from 'react-redux';

const Chat = () => {
  const height = useSelector(state => state.height.height);
  const navOpen = useSelector(state => state.navBar.openNav);
  const asstEditorOpen = useSelector(state => state.editAsst.openEditor);

  if (asstEditorOpen) {
    return (
      <div className='chat-container'>
        <Header />
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col h-screen">
      <Header />
      <div
        className={`flex-1 flex flex-col mt-20 transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-[20%]" : ""
        }`}
      >
        <div
          className="flex-1 overflow-y-auto bg-green-400 mx-auto w-3/5"
          style={{ height: `calc(100% - 80px - ${height - 30}px)` }}
        >
          <ChatHistory />
        </div>
        <Input />
      </div>
    </div>
  );
}

export default Chat;