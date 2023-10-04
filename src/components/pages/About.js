import img1 from "../../images/4E832AC1-6077-4698-8E38-F3278F5EA7DB_1_105_c.jpeg"
import "../../App.css"
function About () {
  
    return (
        <div>
        <div id="About" className="w3-container w3-card w3-margin-bottom"><img id="picture" src={img1} alt ="img" />
          <h2 id="h2" className="w3-padding-16">About Me</h2>
          <div className="w3-container">
            <p>My name is Corey Gulledge and I live in Rochester Hills, Michigan. I've loved basketball ever since I was able to hold a basketball.
              I don't have any pets but I do love all kinds of pets. I recently began coding to see how I would like it and see if I could find a career in it.</p>
          </div>
        </div>
        
        </div>

    )
}
export default About;