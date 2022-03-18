import "./works.scss"

export default function Works() {
  return (
    <div className="works" id ="works">
        <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/java.png" alt=""/>
                  </div>
                  <h2>Spring Data JPA and Object Relational Mapping</h2>
                  <p>This project was a focus on converting data between Java objects and relational databases.
                    A model-view-controller design pattern was implemented in order to achieve the project goals.
                    This entails creating persistent classes, using repository interfaces to perform CRUD operations,
                    and using Thymeleaf templates to support dynamic content. 
                  </p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src="assets/javaPersistence.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        {/* <img src="assets/arrow.png" className="arrow left" alt=""/>
        <img src="assets/arrow.png" className="arrow right" alt=""/> */}
    </div>
  );
}
