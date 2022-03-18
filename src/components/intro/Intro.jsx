import "./intro.scss";

import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backDelay:  1500,
      backSpeed: 60,
      strings: ['Skilled in JS, Java, HTML, CSS, Python, SQL.', 'Always Learning.' ],
    });
  },[])
  return (
    <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
              <img src="assets/eddy.jpg" alt= ""/>
            </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2> Hello, my name is</h2>
            <h1>Eddy Tamayo Garcia</h1>
            <h3>Seeking development roles. <span ref={textRef}></span> </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""></img>
          </a>
        </div>
    </div>
  )
}
