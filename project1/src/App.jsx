import { useRef, useEffect, useState } from 'react';
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const didMountRef = useRef(false);

  useEffect(() => {
   const timer = setInterval(() => {
    console.log("깜박");
   }, 1000);
   /*App.jsx 파일 내용 수정되면 리렌더 -> 클린업 출력*/
return () => {
  console.log("클린업");
  clearInterval(timer);
};
  }, [count]); 
  return (
   <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <Viewer count={count} />
    </section>
    <section>
      <Controller handleSetCount={handleSetCount} />
    </section>
    </div>
  );
}

export default App;