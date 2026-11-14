import {useRef, useState } from "react";

function BodyRef0() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        alert(text);
        textRef.current.value = "";
    };

    return (
        <div>
            <input ref={textRef} calue={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성완료</button>
        </div>
    );
}
export default BodyRef0;