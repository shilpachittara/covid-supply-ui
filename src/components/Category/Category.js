
import React from "react";
import MaskIcon from "../../assets/icons/medical-mask.svg"
import { Link } from 'react-router-dom';

// reactstrap components
import { Button,
  Container,
  Row,
  Col } from "reactstrap";

// core components

function Category() {
  return (
    <>
              <Col md="3">
                <Link to="/productRegistration">
                <div className="info">
                  <div className="icon icon-info">
                    <img className="" src={MaskIcon} style={{width:80,height:80}}></img>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mask</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
                </Link>
              </Col>
    </>
  );
}

export default Category;
