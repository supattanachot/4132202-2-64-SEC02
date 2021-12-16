import React ,{useState}from "react";

const dom = (
    <>
      <h1>hello react !!!</h1>
      <p>My name is yut</p>
    </>
    );
    
function Car(){
  const [color, setColor] = useState("red");
  const id = "630112418058";
    return (
    <>{dom}
    <p>ID:{id}</p>
    <p>My Color is{color}</p>
    <button> onClick={()=>{
    setColor("blue");
    }} </button>
    </>
    );
}    
export default Car