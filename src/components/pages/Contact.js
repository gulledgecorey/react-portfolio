function Contact() {
  return (
    <div>
      <div id="Contact" className="w3-container w3-card">
        <h2 id="h2" className="w3-padding-16">
          Contact Page
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
        <div className="w3-container">
          <p>
          <a id="link"href = "mailto: coreygulledge35@gmail.com">Email</a>
          </p>
        </div>
        <div className="w3-container">
          <p>
            <a id="link" href="https://github.com/gulledgecorey">
              GitHub
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
