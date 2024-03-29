/*!

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import Covidicon from "../../logo.svg"

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  NavItem,
  NavLink
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse ] = React.useState(false);

  /*const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };*/

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", 'white')}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
        <img src={Covidicon} width={18} height={18} style={{marginTop:-7}} alt="logo"></img>
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title=""
            tag={Link}
            className="navbar-header-txt"
          >
            COVID SUPPLY INDIA
          </NavbarBrand>
         
          {/* <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button> */}
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {/* <NavItem>
              <NavLink to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-examples-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Documentation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                // target="_blank"
                
              >
                
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/about-us"
              
              >
                
                About Us
              </NavLink>
            </NavItem> 
            <NavItem>
            <NavLink
                data-placement="bottom"
                href="/all-product"
              
              >
                
                Products
              </NavLink>
            </NavItem>
                 <NavItem>
         
             {/* <Button
                 className="btn-round mr-1"
                 color="info" 
                 type="button"
                href="/login"
                // href="#pablo"
                // target="_blank"
            
              >
               Log In / Sign Up
             </Button> */}
       
            </NavItem>


          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
