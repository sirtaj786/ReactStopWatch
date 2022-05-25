import React, { useEffect, useState } from 'react'

function msToTime(duration) {
    var milliseconds = parseInt((duration%1000))
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }


const Stopwatch = () => {
    const[timerId,setTimerId]=useState(null)
    const[watch,setWatch]=useState(1000)
    useEffect(()=>{
        return()=>{
            //unmounting

        }
    },[timerId,watch])
    const start=()=>{
        if(!timerId){
            let id=setInterval(()=>{
           setWatch((prev)=>prev+1000)
            

           },100)
          setTimerId(id)
       }
    };
    const stop=()=>{
        clearInterval(timerId)
        setTimerId(null)
    }
    const restart=()=>{
        clearInterval(timerId);
        setWatch(0)
        setTimerId(null)
    }
  return (
      <div>
            
            <h2>Stopwatch</h2>
            <h1>{msToTime(watch)}</h1>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Pause</button>
                <button onClick={restart}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch