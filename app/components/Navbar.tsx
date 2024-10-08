"use client";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Container, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavbarData = () => {
  return (
    <Navbar expand="lg" className="sticky-top bg-light" id="navbar">
      <Container fluid>
        <Link href="/">
          <Image
            src="/logo.png"
            className="m-0 p-2 responsive-logo"
            width={130}
            height={100}
            alt="logo"
          />
        </Link>
        <Navbar.Toggle className="me-3 text-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-dark fw-semibold d-flex align-items-center">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link
                style={{ textDecoration: "none", fontSize: "15px" }}
                className="mx-1"
              >
                Home
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarData;
