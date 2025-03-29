import { useState } from "react"

function Lab02 (){

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [result, setResult] = useState(0)
    const [operation, setOperation] = useState("")

    const handleChangeA = (e) => {
        setA(parseInt(e.target.value))
    }

    const handleChangeB = (e) => {
        setB(parseInt(e.target.value))
    }

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    };

    const handleCalculate = () => {
       
        
        const number1 = parseFloat(a);
        const number2 = parseFloat(b);
        let res = 0;

        switch (operation) {
        case 'add':
            res = number1 + number2;
            break;
        case 'subtract':
            res = number1 - number2;
            break;
        case 'multiply':
            res = number1 * number2;
            break;
        case 'divide':
            res = number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
            break;
        default:
            res = 'Invalid operation';
        }

        setResult(res);
    }

    

    

    return (
        <div className="lab02">
            <h1>Lab02</h1>
            <div>
                <input type="text" placeholder="Input a" value={a || ""} onChange={handleChangeA} />
                <br />
                <input type="text" placeholder="Input b" value={b || ""} onChange={handleChangeB} />
                <br />
                <input
                    type="radio"
                    value="add"
                    checked={operation === 'add'}
                    onChange={handleOperationChange}
                /> +
                <input
                    type="radio"
                    value="subtract"
                    checked={operation === 'subtract'}
                    onChange={handleOperationChange}
                /> -
                <input
                    type="radio"
                    value="multiply"
                    checked={operation === 'multiply'}
                    onChange={handleOperationChange}
                /> *
                <input
                    type="radio"
                    value="divide"
                    checked={operation === 'divide'}
                    onChange={handleOperationChange}
                /> /
                <br />
                <button onClick={handleCalculate}>Calculation</button>
                <br />
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Lab02