import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  // 인풋창 전용 상태는 여기서 관리
  const [content, setContent] = useState('');
  // 빈 값일 시 포커스
  const contentRef = useRef();
  
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  const onSubmit = () => {
    if (content.trim() === '') {
      contentRef.current.focus();
      return;
    };
    onCreate(content);
    setContent('');
  }
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo.."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;