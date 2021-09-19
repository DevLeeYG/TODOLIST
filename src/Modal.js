import React from "react";

const Modal = ({ list, pushlist }) => {
  return (
    <div className="blog_modal">
      <h2>{list[pushlist]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;
