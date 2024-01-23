import React from "react";

function MakeCards({ now, todolist, deleteBtn, doneOrCancelBtn, isActive }) {
  return (
    <div className="todoCards">
      <h2>{now}</h2>
      {todolist
        .filter((a) => a.isDone === isActive)
        .map((todo) => {
          return (
            <div key={todo.id} className="cards">
              <h3>{todo.title}</h3>
              <h4>{todo.content}</h4>
              <div className="buttonBox">
                <button onClick={() => deleteBtn(todo.id)} className="btn">
                  삭제하기
                </button>
                <button
                  onClick={() => doneOrCancelBtn(todo.id)}
                  className="btn"
                >
                  {todo.isDone ? "삭제" : "완료"}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MakeCards;
