import React from "react";
import Sidebar from "../components/common/sidebar/sidebar";
import Header from "../components/common/header/header";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./template.scss"

const Template = ({ children }) => {
  const { sidebarLeft } = useSelector((state) => state.left);

  return (
    <Container fluid className="template">
      <Row>
        {sidebarLeft ? (<Col xs={0} lg={0} xxl={0} className="p-0" >
          <Sidebar />
        </Col>) : (<Col lg={3} xxl={2} className="p-0">
          <Sidebar />
        </Col>)}
        {sidebarLeft ? (<Col xs={12} lg={12} xxl={12} style={{paddingLeft: "12px"}}>
          <Header />
          {children}
        </Col>) : (<Col lg={9} xxl={10} className="paddingLeft">
          <Header />
          {children}
        </Col>)}
        
      </Row>
    </Container>
  );
};

export default Template;
