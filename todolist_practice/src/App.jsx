import { useState } from "react";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([]);

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
      <Layout todolist={todolist} setTodolist={setTodolist} />
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
