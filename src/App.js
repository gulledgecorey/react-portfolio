import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Project from "./components/Project"
function App () {
    return (
        <div>
         <Header/>   
      <div>
       <About/>
        <Project/>
        <br/>
       <Contact/>
  </div>
  
</div>

    )
}
export default App;