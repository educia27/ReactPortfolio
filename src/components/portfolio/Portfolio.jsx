import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";



export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);


  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "javascript unit testing",
      title: "JavaScript Unit Testing",
    },
    {
      id: "forms dom and http with js",
      title: "Forms, DOM, and HTTP with JS",
    },
    {
      id: "java spring boot mvc app",
      title: "Java Spring Boot MVC App",
    },
    {
      id: "java persistence",
      title: "Java Persistence",
    },
  ];

  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
        <div className="container">
            <div className="item">
              <a href="https://replit.com/@educia27/Mars-Rover-Autograded-1#rover.js">
                <img src= "assets/jasmine.jpeg" alt=""/>
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/LC101-September-2021/assignment-5-launch-checklist-educia27/blob/main/scriptHelper.js">
                <img src= "assets/dom2.jpeg" alt=""/>
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/LC101-September-2021/java-assignment-3-techjobs-mvc-edition-educia27/blob/master/src/main/java/org/launchcode/techjobs/mvc/controllers/ListController.java">
                <img src= "assets/springboot.png" alt=""/>
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/LC101-September-2021/java-assignment-4-techjobs-persistent-edition-educia27/blob/master/src/main/java/org/launchcode/techjobs/persistent/controllers/HomeController.java">
                <img src= "assets/persistence.png" alt=""/>
              </a>
            </div>
            {/* <table>
              <tbody> Paths to projects:
                <tr>1. 
                  <a href="https://replit.com/@educia27/Mars-Rover-Autograded-1#rover.js">Jasmine</a>
                </tr>
                <tr>2. 
                  <a href="https://github.com/LC101-September-2021/assignment-5-launch-checklist-educia27/blob/main/scriptHelper.js">HTML, Forms, HTTP</a>
                </tr>
                <tr>3. 
                  <a href="https://github.com/LC101-September-2021/java-assignment-3-techjobs-mvc-edition-educia27/blob/master/src/main/java/org/launchcode/techjobs/mvc/controllers/ListController.java">MVC</a>
                </tr>
                <tr>4.
                  <a href="https://github.com/LC101-September-2021/java-assignment-4-techjobs-persistent-edition-educia27/blob/master/src/main/java/org/launchcode/techjobs/persistent/controllers/HomeController.java">JPA Java</a>
                </tr>
              </tbody>
            </table> */}
        </div>
    </div>
  )
}
