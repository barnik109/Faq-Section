import React, { useState } from 'react'
import "./faq.css"

const Faq = ({id,title,desc}) => {
  const [toggle,setToggle]=useState(false)
  return (
      <article class="faq">
          <div>
              <h4>{title}</h4>
        <button onClick={() => {setToggle(!toggle) }}>{toggle?"-":"+"}</button>
              </div>
      {toggle && <p>{desc}</p>}
    </article>
  )
}

export default Faq