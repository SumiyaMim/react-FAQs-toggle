import React, { useState } from "react"
import "./FAQ.css"

const FAQ = ({ id, title, desc }) => {

    const [toggle, setToggle] = useState(false);

  return (
    <article className='faq'>
        <div>
            <h5>{title}</h5>
            <button onClick={() => {setToggle(!toggle);}}>
               {toggle ? "-" : "+"}
            </button>
        </div>
        {toggle && <p>{desc}</p>}
    </article>
  )
}

export default FAQ
