function Contact() {
  return (
    <div>
      <div id="Contact" className="w3-container w3-card">
        <h2 id="h2" className="w3-padding-16">
          Contact
        </h2>
        <div className="w3-container">
          <p>
            Email: <br />
            coreygulledge35@gmail.com
          </p>
        </div>
        <div className="w3-container">
          <p>
            GitHub: <br />
            <a id="link" href="https://github.com/gulledgecorey">
              gulledgecorey
            </a>
          </p>
        </div>
      </div>
      <footer id="foot" className="w3-container w3-center w3-margin-top">
        <i className="fa fa-facebook-official w3-hover-opacity" />
        <i className="fa fa-instagram w3-hover-opacity" />
        <i className="fa fa-snapchat w3-hover-opacity" />
        <i className="fa fa-pinterest-p w3-hover-opacity" />
        <i className="fa fa-twitter w3-hover-opacity" />
        <i className="fa fa-linkedin w3-hover-opacity" />
      </footer>
    </div>
  );
}
export default Contact;
