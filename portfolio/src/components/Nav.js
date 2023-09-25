function Nav() {
  function about () {
    document.querySelector("#About").style = "display: block"
    document.querySelector("#Contact").style = "display: none"
    document.querySelector("#Work").style = "display: none"
  }
  function contact () {
    document.querySelector("#About").style = "display: none"
    document.querySelector("#Contact").style = "display: block"
    document.querySelector("#Work").style = "display: none"
  }
  function work () {
    document.querySelector("#About").style = "display: none"
    document.querySelector("#Contact").style = "display: none"
    document.querySelector("#Work").style = "display: block"
  }
  function home () {
    document.querySelector("#About").style = "display: none"
    document.querySelector("#Contact").style = "display: none"
    document.querySelector("#Work").style = "display: none"
  }
  return (
    <nav id="nav"className="w3-bar">
      <button className="w3-bar-item w3-button" onClick = {home} href="#About">Home</button>
      <button className="w3-bar-item w3-button" onClick = {about} href="#About">About Me</button>
      <button className="w3-bar-item w3-button" onClick = {work} href="#Work"> Work</button>
      <button className="w3-bar-item w3-button" onClick = {contact} href="#Contact"> Contact</button>
    </nav>
  );
}
export default Nav;
