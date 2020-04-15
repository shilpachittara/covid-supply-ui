/*!

*/
import React from "react";

// reactstrap components
import {
  Container
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function OrderSuccess() {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="m-t-80"><div className="txt-center">
        <h1>Covid Supply India</h1>
      </div>
      </div>
      <div className="section profile-content" >

        <Container>
          <div className="txt-center m-b-30">
            <h2>Thank you for placing your order</h2>
          </div>


          <div className="ml-auto mr-auto text-center" md="6">
            <h3>
              Your order have been received successfully.we will get back to you in 12 hours
             </h3>
            <br />
          </div>
          <br />

        </Container>

      </div>
    </>
  );
}

export default OrderSuccess;
