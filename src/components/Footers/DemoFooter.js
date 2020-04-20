/*!

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer" style={{background:'#000'}}>
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li style={{cursor:"pointer"}}>
                <a
                  href="/about-us"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  // href="http://blog.creative-tim.com/?ref=pkr-footer"
                  // target="_blank"
                >
                 support@covidsupply.in
                </a>
              </li>
              {/* <li>
                <a
                  // href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li> */}
            </ul>
          </nav>
          {/* <div className="credits ml-auto">
            <span className="copyright">
              {new Date().getFullYear()}  &#169; COVID SUPPLY INDIA
            </span>
          </div> */}
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
