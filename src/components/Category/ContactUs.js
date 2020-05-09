import React, { Component } from "react";

// reactstrap components
import {
    Button,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
import SubmitOrderService from "services/SubmitOrderService";

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.service = new SubmitOrderService()
        this.state = {
            response: ''
        }
    }

    submitQuery = (event) => {
        event.preventDefault()
        const form = document.forms['submit-to-google-sheet']
        let body = new FormData(form)
        console.log("output", this.service.submitQuery(body))
        this.setState({ response: "Request Submitted Successfully!!!" })
    }

    render() {
        return (
            <>
                <div className="section contact-section">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Contact us</h2>
                                <Form className="contact-form" name="submit-to-google-sheet" onSubmit={this.submitQuery}>
                                    <Row>
                                        <Col md="6">
                                            <label>Name</label>
                                            <Input id="name" name="name" placeholder="Name" type="text" required/>
                                        </Col>
                                        <Col md="6">
                                            <label>Email</label>
                                            <Input id="email" name="email" placeholder="Email" type="text" required/>
                                        </Col>
                                        <Col md="6">
                                            <label>Contact Number</label>
                                            <Input id="number" name="mobile" placeholder="Mobile number" type="text" required/>
                                        </Col>
                                    </Row>
                                    <label>Message</label>
                                    <Input id="message"
                                        name="message"
                                        placeholder="Tell us your queries..."
                                        type="textarea"
                                        rows="4"
                                        required
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" color="danger" size="lg">
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>

                                    <h4 className="text-center">{this.state.response}</h4>
                                    <div className="contact-bottom"></div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default ContactUs;
