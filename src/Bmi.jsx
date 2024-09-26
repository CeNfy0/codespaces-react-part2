import { useRef,useState } from "react";

const BmiText=({bmi})=>{
    if(bmi<18.5)
        return(<h1>Underweight</h1>);
    if(bmi>30)
        return(<h1>Overweight</h1>);
    return(<h1>Normal weight</h1>);
}

export default function Bmi(){

    const H_input = useRef(null);
    const W_input = useRef(null);
    const [Bmi,setBmi] = useState(0);

    const handleClick=()=>{
        let h = H_input.current.value/100;
        let w = W_input.current.value;
        setBmi(w/Math.pow(h,2));
    }

    return(<>
    <h1>BMI CALCULATOR</h1>
    <h3>Height : <input type="text" ref={H_input}/> cm </h3>
    <h3>Weight : <input type="text" ref={W_input}/> Kg </h3>

    <button onClick={()=>handleClick()}> Calculate </button><br/>
    <h3>Bmi value:{Bmi.toFixed(2)}</h3>
    <BmiText bmi={Bmi}/>
    
    </>);
}