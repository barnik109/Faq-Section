import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(true)
    return (
      <div style={{margin:"1rem",padding:"1rem",backgroundColor:"pink"}}>
            {toggle && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sapiente
                    voluptatibus accusamus vel exercitationem. Minus id, porro incidunt quam
                    eum eius,
                    voluptatum quis repellenduslaudantium nihil officiis omnis harum tempora.
                </p>
          )}
            <div style={{textAlign:'center'}}>
                <button onClick={() => { setToggle(!toggle) }}>{toggle ? "Hide" : "Show"}</button>
            </div>
            </div>
  )
}

export default Toggle