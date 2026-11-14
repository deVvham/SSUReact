import { useState, useRef } from "react";
import Viewer from "./Viewer";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Body9() {
const [number, setNumber] = useState(0);
const [message, setMessage] = useState("");
const [value, setValue] = useState("");
const inputRef = useRef(null);

const onIncrease = () => {
    setNumber(number + 1); setMessage("");
};

const onDecrease = () => {
    const newNumber = number - 1;
    if(newNumber < 0) {
        setMessage("0 이상 입력하세요");
        inputRef.current.focus();
        return;
    }
    setNumber(newNumber);
    setMessage("");
};

const onChange = (e) => {
    const v = e.target.value;
    if (/^-?\d*$/.test(v)) {
        setValue(v);
        setMessage("");
    } else {
        setMessage("정수만 입력하세요");
    }
};

const onAdd = () => {
    if (value === "" || value === "-") {
        setMessage("정수를 입력하세요");
        inputRef.current.focus();
        return;
    }
    setNumber(number + Number(value));
    setValue("");
    setMessage("");
};

return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <Buttons  onIncrease={onIncrease}  
                    onDecrease={onDecrease}  />
    <Inputs
    inputRef={inputRef}
    message={message}
    value={value}
    onChange={onChange}
    onAdd={onAdd}
    />
    </div>
  );
}export default Body9;