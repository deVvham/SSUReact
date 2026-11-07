import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsHeader from './component/PropsHeader';
import PropsBody from './component/PropsBody';
import PropsFooter from './component/PropsFooter';
function ChildComp() {
  return <div>child component</div>;
}
function App() {
  const name = "권현지";
  const bodyProps = {name: "권현지", location: "인천시"};
  return ( 
    <>
      <PropsHeader name = {name}/> {/*속성 값 넘기기*/}
      <PropsBody> <ChildComp /> </PropsBody> {/*함수 넘기기 */}
      <PropsFooter {...bodyProps} />
    </>
  );
}

export default App
