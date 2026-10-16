import { useState, useRef } from "react";

const BtnColorChg = () => {
    const btnRef = useRef();
    const [isGreen, setIsGreen] = useState(false);
  
function colorchange() {
    if (isGreen === false) {
        btnRef.current.style.backgroundColor = "green";
        setIsGreen(true);
    } else {
        btnRef.current.style.backgroundColor = "black";
        setIsGreen(false);
    }
}

    
  return (
    <div className="flex gap-9 mt-20 max-w-120 mx-auto justify-center border-2 border-cyan-400/30 p-4 shadow-2xl shadow-blue-950/40">
      <button onClick={colorchange}  className="bg-black text-white px-5 text-2xl py-4 rounded-2xl w-30  border-solid border-cyan-400/30 border-2 "> btn1</button>
      <button ref={btnRef} className="bg-black text-white text-2xl px-5 py-4 rounded-2xl w-30  border-solid border-cyan-400/30 border-2">btn2</button>
    </div>
  )
}

export default BtnColorChg
