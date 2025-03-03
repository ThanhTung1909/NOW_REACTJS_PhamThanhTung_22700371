import { useState } from "react"

function Lab01 (){

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [result, setResult] = useState(0)


    const handleChangeA = (e) => {
        setA(parseInt(e.target.value))
    }

    const handleChangeB = (e) => {
        setB(parseInt(e.target.value))
    }

   

    const handleClick = () => {
       
        
        setResult( a + b)
    }

    

    

    return (
        <div>
            <h1>Lab01</h1>
            <input type="text" placeholder="Input a" onChange={handleChangeA} />
            <br/>
            <input type="text" placeholder="Input b" onChange={handleChangeB} />
            <br/>
            <button onClick={handleClick}>Click</button>
            <br />
            <span>{result}</span>

           
            

        </div>
    )
}

export default Lab01