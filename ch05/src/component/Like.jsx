import { useState } from "react";

function Like() {
    const [liked, setLiked] = useState(false);
    const handleCilck = () => {
        setLiked(!liked);
    };

return (
        <div>
            <h2>{liked ? "♥ 좋아요 상태" : "안 좋아요"}</h2>
            <button onClick={handleCilck}>좋아요</button>
        </div>
    );
}
export default Like;