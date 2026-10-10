import { React } from "react";
import { format } from "date-fns";

function App() {
  const today = new Date();
  
  const formattedDate = format(today, "yyyy-MM-dd HH:mm:ss");
  return (
    <div>
      <h1>오늘 날짜</h1>
      <p>{formattedDate}</p>
    </div>
  );
}

export default App;
