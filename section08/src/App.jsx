import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

// 다시 생성안해도 되므로 밖으로 컴포넌트 밖으로 뺌
const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    date: new Date().getTime(),
  },
];


function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); // 고유의 id값주기

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    // todos 배열에 newTodo추가
    // todos.push(newTodo); 절대안됨.
    // 상태변화 함수를 호출해서 수정해야됨 => state값을 리액트가 감지하고 컴포넌트를 정상적으로 리렌더링 할 수있음.
    setTodos((prevTodos)=> [newTodo, ...prevTodos]); // 배열안에 기존 todos 가져오고, 두번째 인자에 새로운 데이터 넣기
  }

  const onUpdate = (targetId) => {
  // todos State의 값들 중에
  // targetId와 일치하는 id를 갖는 투두 아이템 isDone 변경

  // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 배열
  // setTodos(todos.map((todo) => {
  //   if(todo.id === targetId) {
  //       return {
  //         ...todos,
  //         isDone: !todo.isDone
  //       }
  //     }
  //     return todo;
  //   }
  // ))
  setTodos(todos.map((todo) =>
    todo.id === targetId 
      ? {...todo, isDone: !todo.isDone}
      : todo
    ))
  }

  const onDelete = (targetId) => {
    // 인수: todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }


  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;
