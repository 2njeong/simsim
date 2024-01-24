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
    if (title && content) {
      const newTodolist = [...todolist, newTodo];
      setTodolist(newTodolist);
    }
    if (!title) {
      alert("제목을 입력해주세요");
    }
    if (!content) {
      alert("내용을 입력해주세요");
    }

    setTitle("");
    setContent("");
  };

  return (
    <header className="header">
      <h1>My todo list</h1>
      <div className="inputBox">
        <input value={title} onChange={titleInput} className="todo"></input>
        <input value={content} onChange={contentInput} className="todo"></input>
        <button onClick={addBtn}>추가하기</button>
      </div>
    </header>
  );
}

export default Layout;
