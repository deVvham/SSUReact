import { useState } from "react";
import Viewer from "./Viewer";
import Buttons from "./Buttons";

function Body6() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h2>{number}</h2>
            <Viewer number = {number} />
            <BUttons onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>
    );
}
export default Body6;