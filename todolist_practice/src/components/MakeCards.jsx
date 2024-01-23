import React from "react";

function MakeCards({ now, todolist, deleteBtn, doneOrCancelBtn, isActive }) {
  return (
    <div>
      <h2>{now}</h2>
      {todolist
        .filter((a) => a.isDone === isActive)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <h4>{todo.content}</h4>
              <button onClick={() => deleteBtn(todo.id)}>삭제하기</button>
              <button onClick={() => doneOrCancelBtn(todo.id)}>
                {todo.isDone ? "삭제" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default MakeCards;
