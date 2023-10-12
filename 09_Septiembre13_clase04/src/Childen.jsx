import React from "react";

// Realizo el componente hijo con una arrow function
const Children=({title,content,sum}) =>{
// Sector para colocar código JS
    const result = sum(5);
return(
    // Sector para colocar código HTML
    <>
    <div >
        <h1 className="tituloProps"> {title}</h1>
        <p>{content}</p>
        <p>El resultado  es: {result}</p>
    </div>
    </>
);
}

export default Children;