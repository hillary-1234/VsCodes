

import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const bgColor = isOn ? "bg-yellow-100 " : "bg-slate-600";
  return (
    <div
      className={`flex flex items-center justify-center h-screen ${bgColor} `}
    >
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        <div
          className={` h-8 w-6 ${isOn ? "bg-slate-300" : "bg-slate-200"} `}
        ></div>
        <div
          className={` h-8 w-6 ${isOn ? "bg-slate-200" : "bg-slate-300"} `}
        ></div>
      </button>
    </div>
  );
};
export default App;
