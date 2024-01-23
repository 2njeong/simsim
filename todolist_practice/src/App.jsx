import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([]);

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

  const deleteBtn = (id) => {
    const restList = todolist.filter((a) => id !== a.id);
    setTodolist(restList);
  };

  const doneOrCancelBtn = (id) => {
    const newlist = todolist.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodolist(newlist);
  };

  return (
    <>
      <header>
        <h1>My todo list</h1>
        <div>
          <input value={title} onChange={titleInput}></input>
          <input value={content} onChange={contentInput}></input>
          <button onClick={addBtn}>추가하기</button>
        </div>
      </header>
      <div>
        <h2>Working</h2>
        {todolist
          .filter((a) => a.isDone === false)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <h4>{todo.content}</h4>
                <button onClick={() => deleteBtn(todo.id)}>삭제하기</button>
                <button onClick={() => doneOrCancelBtn(todo.id)}>완료</button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>Done</h2>
        {todolist
          .filter((a) => a.isDone === true)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <h4>{todo.content}</h4>
                <button onClick={() => deleteBtn(todo.id)}>삭제하기</button>
                <button onClick={() => doneOrCancelBtn(todo.id)}>취소</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
