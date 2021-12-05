import React from 'react'

function Numeromayor() {
    const [a,setA]=React.useState(0);
    const [b,setB]=React.useState(0);
    const [c,setC]=React.useState(0);
    const [numMayor,setNumMayor]=React.useState(0);
    const comparar = () =>{
        if(parseInt(a)>parseInt(b)){
            if(parseInt(a)>parseInt(c)){
                setNumMayor(a)
            }else{
                setNumMayor(c)
            }
        }else{
            if(parseInt(b)>parseInt(c)){
                setNumMayor(b)
            }else{
                setNumMayor(c)
            }
        }
        
    }
    return (
        <div>
            <input type="number" onChange={(e)=>setA(e.target.value)}  />
            <input type="number" onChange={(e)=>setB(e.target.value)}  />
            <input type="number" onChange={(e)=>setC(e.target.value)}  />
            <input type="submit" value="Comparar" onClick={()=>comparar()} />
            <input type="number" value={numMayor} />
        </div>
    )
}

export default Numeromayor
