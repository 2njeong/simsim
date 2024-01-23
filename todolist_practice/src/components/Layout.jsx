import React, { useState } from "react";

function Layout({ todolist, setTodolist }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const contentInput = (e) => {
    setContent(e.target.value);
  };

  const addBtn = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    const newTodolist = [...todolist, newTodo];
    setTodolist(newTodolist);

    setTitle("");
    setContent("");
  };

  return (
    <header className="header">
      <h1>My todo list</h1>
      <div>
        <input value={title} onChange={titleInput}></input>
        <input value={content} onChange={contentInput}></input>
        <button onClick={addBtn}>추가하기</button>
      </div>
    </header>
  );
}

export default Layout;
