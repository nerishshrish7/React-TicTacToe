import React, { useRef, useState } from 'react'
import circle from '../img/circle.png'
import './Tic.css'
import x from '../img/x.png'

let data= ["", "", "", "", "", "", "", "", ""];
const Tictactoe = () => {

  let [count,setCount]= useState(0);
  let [lock,setLock]=useState(false);
  let titleRef= useRef(null);
  let cell1= useRef(null);
  let cell2= useRef(null);
  let cell3= useRef(null);
  let cell4= useRef(null);
  let cell5= useRef(null);
  let cell6= useRef(null);
  let cell7= useRef(null);
  let cell8= useRef(null);
  let cell9= useRef(null);

  let cell_array=[cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9]

  const toggle=(e,num) => {
    if (lock) {
        return 0;
    }
    else if (count%2===0) {
        e.target.innerHTML= `<img src='${x}'>`;
        data[num]='x';
        setCount(++count);
    }
    else {
        e.target.innerHTML= `<img src='${circle}'>`;
        data[num]='o';
        setCount(++count);
    }
    checkWin();
  }
  const checkWin = ()=>{
    if (data[0] === data[1] && data[1] === data[2] && data[2]!== ""){
        won(data[2]);
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5]!== ""){
        won(data[5]);
    }
    else if(data[6] === data[7] && data[7] === data[8] && data[8]!== ""){
        won(data[8]);
    }
    else if(data[0] === data[3] && data[3] === data[6] && data[6]!== ""){
        won(data[6]);
    }
    else if(data[1] === data[4] && data[4] === data[7] && data[7]!== ""){
        won(data[7]);
    }
    else if(data[2] === data[5] && data[5] === data[8] && data[8]!== ""){
        won(data[8]);
    }
    else if(data[0] === data[4] && data[4] === data[8] && data[8]!== ""){
        won(data[8]);
    }
    else if(data[0] === data[1] && data[1] === data[2] && data[2]!== ""){
        won(data[2]);
    }
    else if(data[2] === data[4] && data[4] === data[6] && data[6]!== ""){
        won(data[6]);
    }
  }

  const won = (winner)=>{
    setLock(true);
    if(winner==="x"){
        titleRef.current.innerHTML= `Congratulations: <img src= ${x}>`;
    }
    else{
        titleRef.current.innerHTML= `Congratulations: <img src= ${circle}>`;
    }
  }

  const reset=()=>{
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML='Tic Tac Toe <span> React </span>';
    cell_array.map((e)=>{
        e.current.innerHTML="";
    })
  }
  return (
    <>
    <div className='h-[100vh] w-[100%] flex justify-center items-center flex-col gap-[5vh]'>
        <h1 ref={titleRef} id='title' className='text-[3vw] text-white font-bold flex gap-[1vw]'>Tic Tac Toe <span className='text-[aqua]'>React</span></h1>
        <div>
            <div className='flex'>
                <div id='cell' ref={cell1} onClick={(e)=>{toggle(e,0)}} className='flex justify-center items-center h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
                <div id='cell' ref={cell2}  onClick={(e)=>{toggle(e,1)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
                <div id='cell' ref={cell3}  onClick={(e)=>{toggle(e,2)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
            </div>
            <div className='flex'>
                <div id='cell' ref={cell4}  onClick={(e)=>{toggle(e,3)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
                <div id='cell' ref={cell5}  onClick={(e)=>{toggle(e,4)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
                <div id='cell' ref={cell6}  onClick={(e)=>{toggle(e,5)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
            </div>
            <div className='flex'>
                <div id='cell' ref={cell7}  onClick={(e)=>{toggle(e,6)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
                <div id='cell' ref={cell8}  onClick={(e)=>{toggle(e,7)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
                <div id='cell' ref={cell9}  onClick={(e)=>{toggle(e,8)}} className='flex justify-center items-center  h-[15vh] w-[7.5vw] bg-[#1f3540] border-solid border-[3px] border-[#0f1b21] rounded-xl cursor-pointer'></div>
            </div>
        </div>
        <button id='restartBtn' onClick={()=>{reset()}} className='h-[8vh] w-[10vw] bg-[#1f3540] outline-none rounded-lg text-[1.5vw] text-[aqua] cursor-pointer'>Reset</button>
    </div>
    </>
  )
}

export default Tictactoe
