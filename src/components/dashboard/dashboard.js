import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllUser } from "../../api/dummyjson-service";

const Dashboard = () => {
  const [userQuantity, setUserQuantity] = useState([])

  const loadData = async () => {
    try {
      const resp = await getAllUser();
      setUserQuantity(resp.data.total)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  

  return (
    <Container fluid className="dashboard-cards">
      <Row className="g-4">
        <Col sm={6} xl={3} >
          <Link to="/dashboard/students">
            <Card className="students-card">
              <Card.Text>
                <HiOutlineAcademicCap />
              </Card.Text>
              <Card.Title>Students</Card.Title>
              <span>{userQuantity}</span>
            </Card>
          </Link>
        </Col>
        <Col sm={6} xl={3}>
          <Link to="/dashboard">
            <Card className="course-card">
              <Card.Text>
                <BiBookmark />
              </Card.Text>
              <Card.Title>Course</Card.Title>
              <span>13</span>
            </Card>
          </Link>
        </Col>
        <Col sm={6} xl={3}>
          <Link to="/dashboard">
            <Card className="payments-card">
              <Card.Text>
                <RiMoneyDollarBoxLine />
              </Card.Text>
              <Card.Title>Payments</Card.Title>
              <span>556,000₺</span>
            </Card>
          </Link>
        </Col>
        <Col sm={6} xl={3}>
          <Link to="/dashboard">
            <Card className="users-card">
              <Card.Text>
                <FiUser />
              </Card.Text>
              <Card.Title>Users</Card.Title>
              <span>3</span>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
