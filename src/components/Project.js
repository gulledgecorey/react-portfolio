import img2 from "../ReelDeal.png"
import img3 from "../Shoutouttothebeat.png"
import "../App.css"
function Project () {
  let style = {
    display: "none"
  }
    return (
        <div id="Work" className="w3-container w3-card"style = {style}>
        <h2 id="h2" className="w3-padding-16">Work</h2>
        <div className="w3-container">
        <p id="title">Reel Deal</p>
          <a id="link" href="https://fzhao888.github.io/ReelDeal/ "><img id="reeldeal" src={img2} alt ="img" /></a> <br />
          
          {/* <img id="image"src ="ReelDeal.png"> */}
        </div>
        
        <div className="w3-container">
         <p id="title">Shoutout to the Beat</p>
          <a id="link" href="https://mysterious-gorge-44175-06939e93d547.herokuapp.com/"><img id="sottb" src={img3} alt ="img"/></a> <br />
          {/* <img id="image"src ="Shoutouttothebeat.png"> */}
        </div>
      </div>
    )
}
export default Project;