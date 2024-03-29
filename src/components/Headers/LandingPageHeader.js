
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/added/landing_page_header.jpg") + ")"
        }}
        className="page-header page-header-banner"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center" style={{marginTop: -85}}>
            <h1>For Government, Hospitals and Institutions</h1>
            <h2>Genuine and Certified Medical Supplies </h2>
            {/*<br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button>*/}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
