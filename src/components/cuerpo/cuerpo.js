import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from '../results';
import Details from '../details';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';

import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';


function Cuerpo(props) {

    return (
        <BrowserRouter>
            <div>
            <CssBaseline />
            <Grid fluid>
                <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <AppBar />
                </Col>
                </Row>
                <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <div className="App-banner">

                    </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                    <Redirect from="/" to="/results" />
                    <Switch>
                        <Route path="/results" component={Results} />
                        <Route path="/details/:itemId" component={Details} />
                        <Redirect from="/" to="/results" />
                    </Switch>
                </Col>
                <Col xs={12} sm={12} md={2} lg={2}>
                    <div className="App-banner">

                    </div>
                </Col>
                </Row>
                
                <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <footer className="App-footer">
                    Pie
                    </footer>
                </Col>
                </Row>
            </Grid>
            </div>
        </BrowserRouter>
    );
}

export default Cuerpo;