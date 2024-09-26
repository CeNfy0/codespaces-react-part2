export default function MouseEvent(){
    return (<h1 
        onClick={e=>console.log('onClick')}
        onMouseEnter={e=>console.log('onMouseEnter')}
        onMouseover={e=>console.log('onMouseOver')}></h1>)
} 