import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilterData = () => {
    if(search === '') return todos; // 빈 값일 때는 todos뿌리기
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()
    ));
  }

  const fitleredTodos = getFilterData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch} 
        placeholder="검색어를 입력하세요" 
      />
      <div className="todos_wrapper">
        {fitleredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} /> // ...todo의 기능 => TodoItem의 props를 가져오기 위해
        })}
      </div>
    </div>
  )
}

export default List;