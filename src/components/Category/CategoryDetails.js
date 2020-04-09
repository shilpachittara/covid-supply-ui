
import React,{ Component, useState } from "react";
import Category from "./Category";
import { Row, Container,Button } from "reactstrap";

function CategoryDetails() {
    document.documentElement.classList.remove("nav-open");
    var arr = ["one", "two", "three", "four"];
    var elements = [];
    for (var i = 0; i < arr.length; i++) {
        elements.push(<Category key={arr[i]} />);
    }
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });

    let [count, setCount] = useState(false);
    return (
        <>
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            {elements}
                        </Row>
                        <div className={count?"":"d-none"}>
                        <div className="m-t-50">
                        <Row>
                            {elements}
                        </Row>
                        </div>
                        <div className="m-t-50">
                        <Row>
                            {elements}
                        </Row>
                        </div>
                        </div>
                        <Row>
                        <div className="show-more-btn-landing m-t-20">
                        <Button
                  className="btn-round mr-1"
                  color="primary"
                  outline
                  type="button"
                  onClick={() => setCount(!count)}
                >
                  Show More
                </Button>
                        </div>
                        </Row>
                        
                    </Container>
                </div>
            </div>
        </>
    );
}

export default CategoryDetails;
