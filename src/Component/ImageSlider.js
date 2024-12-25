import Data from './Data.json'
import {useEffect, useRef, useState} from 'react'
const ImageSlider=()=>{
const [next, setNext]=useState(0);

let ref=useRef(null);

const handleNext =()=>{

    setNext((previousValue)=>
    {
        if(previousValue === Data.length-1){
            return 0;
        }
        return previousValue +1;
    })
//  if(next=== Data.length-1){
//     setNext(0);
//  }else{
//     setNext(next+1);
//  }
};

const handlePre=()=>{
    if(next==0){
        setNext(Data.length-1);
    }else{
        setNext(next-1);
    }
}
useEffect (()=>{
ref.current=setInterval(handleNext, 1000);
return(()=>{
    clearInterval(ref.current);
})
},[])

   return(
   <>
   <div className='Container' onMouseEnter={()=>clearInterval(ref.current)} onMouseLeave={()=>clearInterval(ref.current)}>
    <button onClick={handlePre} className='left-btn'>{'<'}</button>
    <img src={Data[next].download_url} alt='Image Not Found'></img>
    <button onClick={handleNext} className='right-btn'>{'>'}</button>
   </div>
   </>

   )
}
export default ImageSlider;