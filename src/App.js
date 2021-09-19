import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");

  const [list, setList] = useState(["todo", "todo1", "todo3", "todo4"]);
  const date = new Date().toLocaleDateString();

  const [pushlist, setPushlist] = useState(0);

  const modalcontrol = () => {
    setModal(!modal);
  };

  const change = (e) => {
    setInput(e.target.value);
  };

  const inputList = () => {
    setList([input, ...list]);
  };

  const deleteInput = (idx) => {
    const filterd = list.splice(idx, 1);

    setList(list.filter((el) => el !== filterd));
  };

  return (
    <div className="App">
      <div className="blog_navbar">
        <h3 style={{ color: "blue" }}>TODOLIST</h3>
      </div>
      {list.map((el, idx) => (
        <div key={idx} className="blog_list">
          <h3
            onClick={() => {
              setPushlist(idx);
            }}
          >
            {el}
          </h3>
          <button
            onClick={() => {
              deleteInput(idx);
            }}
          >
            삭제
          </button>
          <div>{date}</div>
          <hr></hr>
        </div>
      ))}

      <div className="publish">
        <input value={input} onChange={change} />
        <button onClick={inputList}>저장</button>
      </div>

      <button onClick={modalcontrol}>모달</button>
      {modal ? <Modal list={list} pushlist={pushlist} /> : null}
    </div>
  );
};

export default App;

/*
데이터바인딩
*/
