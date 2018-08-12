import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-grid-system';
import SectionDescription from "./components/villages/neighborhoods/blocks/blocks/Section Description.js";
import Laptop from "./components/villages/neighborhoods/blocks/houses/Laptop.js"

class SectionA extends React.Component{
    render(){
        return(
            <section className="section-a">
            <Container>
                <Row>
                    <SectionDescription/>
                    <Laptop/>
                    </Row>
                </Container>
            </section>
        )
    }
}
module.exports = SectionA;