import { useRef, useState } from "react";

function BodyRef1() {
    const [text, setText] = useState("");
    const textRef = useRef();
    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if(text.length < 5) {
            alert("5글자 이상 입력하세요.");
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        }
    };
    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
} 
export default BodyRef1;