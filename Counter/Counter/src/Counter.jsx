import { useState } from "react"

const Counter=()=>{
    const [count, setCount]= useState(0)
    const handleClickAdd=()=>{
        setCount(count+1)
        console.log(handleClick)
    }
    const handleClickLess=()=>{
        setCount(count-1)
    }
    return(
<>
    <h1> Clicked {count} times</h1>
    <button onClick={handleClickAdd}>Count Add</button>
    <button onClick={handleClickLess}>Count Less</button>
    </>
   
   )
    


}

export default Counter