import { useRef, useState } from "react"


const StopWatch = () => {
    const [timer , setTimer]= useState(0)
    let timerRef = useRef(null)
    function start(){
       if (timerRef.current !== null) return;
         timerRef.current = setInterval(() => {
            setTimer(timer=>timer + 1);
  }, 100);
    }
    function pause(){
         clearInterval(timerRef.current);
          timerRef.current=null
    }   
    function reset(){
        setTimer(0)

    }

 return (
  <div className="relative mx-auto mt-12 max-w-120 overflow-hidden rounded-3xl border border-cyan-400/30  from-slate-900 via-slate-950 to-blue-950 px-4 py-8 text-center shadow-2xl shadow-blue-950/40 sm:px-8">

    <header className="mb-2 text-2xl font-bold tracking-wide text-white">
      Stop <span className="text-cyan-400">Watch</span>
    </header>

    <h1 className="mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-full border-4 border-cyan-400/70  text-5xl font-bold tabular-nums text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:h-56 sm:w-56">
      {timer}
    </h1>

    <button
      onClick={start}
      className="m-1 rounded-xl bg-green-500 from-emerald-500 to-green-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/30 active:scale-95 sm:m-2 sm:px-6"
    >
      Start
    </button>

    <button
      onClick={pause}
      className="m-1 rounded-xl bg-red-500  from-amber-400 to-orange-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/30 active:scale-95 sm:m-2 sm:px-6"
    >
      Pause
    </button>

    <button
      onClick={reset}
      className="m-1 rounded-xl bg-amber-500 from-rose-500 to-red-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/30 active:scale-95 sm:m-2 sm:px-6"
    >
      Reset
    </button>

  </div>
)

}

export default StopWatch
