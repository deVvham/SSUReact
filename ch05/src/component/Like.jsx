import { useState } from "react";

function Like() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);
    const handleCilck = () => {
        setLiked(!liked);
        setCount(count + 1);
    };

return (
        <div>
            <h2>{liked ? "♥ 좋아요 상태" : "안 좋아요"}</h2>
            <h3>좋아요 수: {count}</h3>
            <button onClick={handleCilck}>{liked ? "취소" : "좋아요"}</button>
        </div>
    );
}
export default Like;