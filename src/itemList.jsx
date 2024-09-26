import { useState,useEffect } from "react"

function Item({name, isPacked}){
    return (<li>{name} {isPacked ? name && '✔':name}</li>)
}

export default function ItemList(){

    useEffect(()=>{
        console.log("this component is loaded!");

        return ()=>{
            alert("component unload")
        }
    },[])

    const items = [{name:"Beef", isPacked:true},
        {name:"Egg", isPacked:true},
        {name:"Flour", isPacked:true},
        {name:"Sugar", isPacked:true}
    ]
    const [value,setValue] = useState("")
    const filterList = items.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
    const ItemList = filterList.map(i=>
    <Item key={i.name} name={i.name} isPacked={i.isPacked}></Item>)
    return (<>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <ul>
        {ItemList}
        {/* <Item name="Beef" isPacked={true}></Item>
        <Item name="Egg" isPacked={true}></Item>
        <Item name="Flour" isPacked={true}></Item>
        <Item name="Sugar" isPacked={true}></Item> */}
    </ul></>)
}