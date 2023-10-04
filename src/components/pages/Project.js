import img2 from "../../images/ReelDeal.png"
import img3 from "../../images/Shoutouttothebeat.png"
import img4 from "../../images/WorkDayScheduler.png"
import img5 from "../../images/Portfolio.png"
import img6 from "../../images/Quiz.png"
import img7 from "../../images/Note-Taker.png"

import "../../App.css"
function Project () {
    return (
        <div id="Work" className="w3-container w3-card">
        <h2 id="h2" className="w3-padding-16">Work</h2>
        <div className="w3-container">
        <p id="title">Reel Deal</p>
          <a id="link" href="https://fzhao888.github.io/ReelDeal/ "><img id="reeldeal" src={img2} alt ="img" /></a>
          <a id="link" href="https://github.com/fzhao888/ReelDeal">Repo</a> <br />
          
          {/* <img id="image"src ="ReelDeal.png"> */}
        </div>
        
        <div className="w3-container">
         <p id="title">Shoutout to the Beat</p>
          <a id="link" href="https://mysterious-gorge-44175-06939e93d547.herokuapp.com/"><img id="sottb" src={img3} alt ="img"/></a> 
          <a id="link" href="https://github.com/gulledgecorey/music-blog">Repo</a><br />
          {/* <img id="image"src ="Shoutouttothebeat.png"> */}
        </div>
        <div className="w3-container">
          <p id="title">Workday Scheduler</p>
          <a id="link" href="https://gulledgecorey.github.io/work-day-scheduler/"><img id="wds" src= {img4} alt ="img"/></a>
          <a id="link" href="https://github.com/gulledgecorey/work-day-scheduler">Repo</a> <br />
          {/* <img id="image"src ="WorkDayScheduler.png"> */}
        </div>
        <div className="w3-container">
          <p id="title">Portfolio</p>
          <a id="link" href="https://gulledgecorey.github.io/Portfolio/"><img id="portfolio" src= {img5} alt="img"/></a>
          <a id="link" href="https://github.com/gulledgecorey/Portfolio">Repo</a> <br />
          {/* <img id="image"src ="Portfolio.png"> */}

        </div>
        <div className="w3-container">
          <p id="title">Quiz</p>
          <a id="link" href="https://gulledgecorey.github.io/javascript-quiz/"><img id="quiz" src= {img6} alt="img"/></a>
          <a id="link" href="https://github.com/gulledgecorey/javascript-quiz">Repo</a> <br />
          {/* <img id="image"src ="Quiz.png"> */}
        </div>
        <div className="w3-container">
          <p id="title">Note Taker</p>
          <a id="link" href="https://note-taker-90000-93451fb855b3.herokuapp.com/"><img id="note" src= {img7} alt="img"/></a>
          <a id="link" href="https://github.com/gulledgecorey/note-taker">Repo</a> <br />
          {/* <img id="image"src ="Note-taker.png"> */}
        </div>
      </div>
    )
}
export default Project;