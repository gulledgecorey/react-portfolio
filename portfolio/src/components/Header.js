import img1 from "../4E832AC1-6077-4698-8E38-F3278F5EA7DB_1_105_c.jpeg"
import Nav from "./Nav"
function Header() {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
      <div className="w3-row-padding">
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-container">
              <h2 id="h2">Corey Gulledge</h2>
              <Nav/>
            </div>
          </div>
        </div>
      </div>
<div className="w3-display-container">
  <img src={img1} style={{width: '25%'}} alt="Avatar" />
  <div className="w3-display-bottomleft w3-container w3-text-black">
  </div>
</div>

    </div>
  );
}
export default Header;
