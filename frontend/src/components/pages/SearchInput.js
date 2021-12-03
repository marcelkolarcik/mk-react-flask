import React, {useRef} from 'react';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';

export default function SearchInput() {

    const searchString = useRef('')
    const navigate = useNavigate();

    function performSearch() {
        navigate('search/' + searchString.current.value + '/')
    }


    return (
        <Row>
             <div className={'col-md-12 small px-3 d-flex justify-content-center'}>
                    {['Australia', 'Brazil', 'Canada', 'China', 'Hong Kong', 'Portugal', 'Spain', 'Turkey', 'United States']
                        .map(country => (
                            <Link className=' mx-1 text-muted mb-2'
                                  to={'/search/' + country + '/'}>{country}</Link>
                        ))}
                   </div>
            <Col md={6} className={'mx-auto mb-3'}>

                <div className="d-grid gap-2 px-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Which country?"
                        className="mb-3"
                    >
                        <Form.Control ref={searchString} type="text" placeholder="Search"/>
                    </FloatingLabel>
                    <Button variant="secondary" size="lg" onClick={performSearch}>
                        Search
                    </Button>
                </div>
            </Col>
        </Row>
    );
}