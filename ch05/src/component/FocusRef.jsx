import { useRef } from "react";

function FocusRef() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>포커스 이동</button>
        </div>
    );
}
export default FocusRef;