import React, { useEffect } from 'react';
import { Container, Nav, Navbar, Col, Row, Tab } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function AdmNav() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (user === null) {
            alert("Inicia sesion primero")
            navigate("/Smoak/public/login")
        }
        if (user.role === null || user.role !== "admin") {
            alert("Inicia sesion con la cuenta adecuada")
            navigate("/Smoak/public/login")
        }
    });

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('user_id');
        alert("Sesion cerrada")
    }

    return (
        <>
            <div style={{ display: "grid", content: "center", backgroundColor: "#f5f6fb" }}>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="Tablero">
                            <Row>
                                <Col style={{ paddingLeft: "2%", background: "#4065d6", paddingBottom: "1%", maxHeight: "735px", minHeight: "100%", minWidth: '10%', maxWidth: '25%' }}>
                                    <img src="https://i.imgur.com/arcVaGd.png"
                                        style={{ width: "100%", paddingTop: "2%", paddingLeft: "2%" }} />
                                    <Nav className="flex-column">
                                        <hr />
                                        <Nav.Link as={Link} to='/Smoak/public/admin' style={{ color: "white" }}>Tablero</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/Smoak/public/admin/admcategories' style={{ color: "white" }}>Categorias</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/Smoak/public/admin/admsubcategories' style={{ color: "white" }}>Subcategorias</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/Smoak/public/admin/admproducts' style={{ color: "white" }}>Productos</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/Smoak/public/login' onClick={() => logout()} style={{ color: "white" }}>Cerrar Sesión</Nav.Link>
                                        <hr />
                                    </Nav>
                                </Col>
                                <Col style={{ width: "auto" }}>
                                    <Row style={{ backgroundColor: "#ffffff" }}>
                                        <header>
                                            <Navbar>
                                                <Container>
                                                    <Navbar.Collapse className="justify-content-end">
                                                        {user !== null ? (
                                                            <Navbar.Text>
                                                                Signed in as: {user.name} {user.lastName}
                                                            </Navbar.Text>
                                                        ) : null}

                                                    </Navbar.Collapse>
                                                </Container>
                                            </Navbar>
                                        </header>
                                    </Row>
                                    <Outlet></Outlet>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default AdmNav;