import React from 'react';
import { Container } from 'reactstrap';
import Header from '../header/Header';
import './layout.scss'
import TechnologySearch from "../technology-search/TechnologySearch ";

const Layout = () => {
    return <div className="layout">
        <Header className="layout-header"/>
        <Container className="layout_container">
          <TechnologySearch></TechnologySearch>
        </Container>
    </div>
}

export default Layout ;
