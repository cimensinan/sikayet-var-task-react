import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import avatar from "../../../assets/img/Avatar.png";
import "./sidebar.scss";
import { question } from "../../../helpers/swal";
import { BiBookmark, BiChevronLeft } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuFileBarChart2 } from "react-icons/lu";
import { RxMixerVertical } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { chevronClicked } from "../../../store/slices/sidebar-slice";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { sidebarLeft } = useSelector((state) => state.left);
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(chevronClicked(!sidebarLeft));
  };

  const handleLogout = () => {
    question("Logout", "Are you sure to logout?").then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userName");
        navigate("/");
      }
    });
  };

  const adminUserName = localStorage.getItem("userName");
  const capitalizedUserName =
    adminUserName.charAt(0).toUpperCase() +
    adminUserName.slice(1).toLowerCase();

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={sidebarLeft ? "admin-navbar admin-left" : "admin-navbar"}
      variant="dark"
    >
      <Container>
        <div className="avatar">
          <h5>MANAGE COURSES</h5>
          <div className="admin-brand">
            <Navbar.Brand>
              <img src={avatar} alt="avatar" className="img-fluid" />
            </Navbar.Brand>
            <h6>{capitalizedUserName}</h6>
            <p>Admin</p>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/dashboard"
              active={pathname === "/dashboard"}
            >
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard"
              active={pathname.startsWith("/dashboard/course")}
            >
              <BiBookmark /> Course
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/students"
              active={pathname.startsWith("/dashboard/students")}
            >
              <HiOutlineAcademicCap /> Students
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard"
              active={pathname.startsWith("/dashboard/payment")}
            >
              <RiMoneyDollarBoxLine /> Payment
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard"
              active={pathname.startsWith("/dashboard/report")}
            >
              <LuFileBarChart2 /> Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard"
              active={pathname.startsWith("/dashboard/settings")}
            >
              <RxMixerVertical /> Settings
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>
              Logout <FiLogOut />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button
        className={`toggle-button ${sidebarLeft ? "active" : ""}`}
        onClick={handleSidebarToggle}
      >
        <div>
          <BiChevronLeft />
        </div>
      </button>
    </Navbar>
  );
};

export default Sidebar;
