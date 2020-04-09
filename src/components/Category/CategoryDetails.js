
import React from "react";
import Category from "./Category";
import { Row, Container } from "reactstrap";

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
    return (
        <>
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            {elements}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default CategoryDetails;
