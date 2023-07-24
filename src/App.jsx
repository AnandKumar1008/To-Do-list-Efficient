import Rect, { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const inpRef = useRef();
  const handleClick = () => {
    if (!inpRef.current.value) return;
    setList([...list, { inp: inpRef.current.value, check: false }]);
    inpRef.current.value = '';
  };
  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" ref={inpRef} />
      <button onClick={handleClick}>Done</button>
      {list.map((text, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={text.check}
            onClick={(e) => {
              const arr = [...list];
              arr[i] = { ...arr[i], check: !arr[i].check };
              setList(arr);
            }}
          />
          <input
            value={text.inp}
            onChange={(e) => {
              const item = [...list];
              item[i] = { ...item[i], inp: e.target.value };
              setList(item);
            }}
          />
          <button
            onClick={() => {
              const arr = list;
              const item = arr.splice(i, 1);
              console.log(arr, item);
              console.log(i);
              setList([...arr]);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
