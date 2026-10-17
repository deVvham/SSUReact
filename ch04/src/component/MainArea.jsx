import React from "react";
function MainArea() {
  const isLogin = true;
   return (
    <div>
         {isLogin&&  <h2>환영합니다!</h2>}
    </div>
   );
}
    export default MainArea