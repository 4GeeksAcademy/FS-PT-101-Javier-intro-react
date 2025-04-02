import React from "react";


export const ComponenteConJS = () => {

    let age = 55

    const sum = (a, b) => a + b

    const sayHi = () => 'hola usuario'


    console.log(sayHi())
    return (
        <div>
            <h1>
                sera? {age} age
            </h1>
            <p className="fs-2">mi resultado es {sum(20, 20)}</p>

            {sum(5, 30) > 40 ? <span>es mayor que 40</span> : <span>ja jaa....</span>}
            {sayHi()}
        </div>
    )
}