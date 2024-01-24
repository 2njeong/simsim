import { useState } from "react";
import Layout from "./components/Layout";
import MakeCards from "./components/MakeCards";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([]);

  return (
    <div className="App">
      <Layout todolist={todolist} setTodolist={setTodolist} />
      <MakeCards
        now="Working ✍🏼"
        todolist={todolist}
        setTodolist={setTodolist}
        isActive={false}
      />
      <div>
        {/* <h2>Working</h2>
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
          })} */}
      </div>
      <MakeCards
        now="Done 🙌🏻"
        todolist={todolist}
        setTodolist={setTodolist}
        isActive={true}
      />
    </div>
  );
}

export default App;
