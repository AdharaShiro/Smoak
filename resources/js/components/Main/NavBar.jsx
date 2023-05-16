import { Nav, Navbar, NavDropdown, Row, Col, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function BasicExample() {

    const getCountProducts = async () => {
        const user_id = localStorage.getItem('user_id');
        try {
            const response = await axios.get(`http://localhost/Smoak/public/api/countProducts/${user_id}`);
            setcountProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const [countProducts, setcountProducts] = useState([]);
    useEffect(() => {
        getCountProducts()
    }, [])

    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Link to="/smoak/public/">
                            <img src="https://i.imgur.com/arcVaGd.png"
                                style={{ maxHeight: '45px' }} />
                        </Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to='/smoak/public/catalogue'>Productos</Nav.Link>
                                <Nav.Link as={Link} to='/smoak/public/metodo'>Metodos de pago</Nav.Link>
                                <Nav.Link as={Link} to='/smoak/public/centro'>¿Necesitas ayuda?</Nav.Link>
                            </Nav>
                            <Nav align="end">
                                <Nav.Link as={Link} to='/smoak/public/cart'>
                                    <Badge badgeContent={countProducts} color="primary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Nav.Link>
                            </Nav>
                            <NavDropdown id="dropright" align="end" title={<img src="https://i.postimg.cc/rmY3H9RD/log.png"
                                alt='login' style={{ maxHeight: '40px' }} />}>
                                <NavDropdown.Item as={Link} to="/smoak/public/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/smoak/public/carro">Carrito</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/smoak/public/login" onClick={() => logout()}>Cerrar sesion</NavDropdown.Item>
                            </NavDropdown>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <div>
                <section>
                    <Outlet></Outlet>
                </section>
            </div>

            <footer style={{ backgroundColor: '#0000' }}>
                <br />
                <div>
                    <Container>
                        <div class="card text-bg-dark">
                            <img src="https://i.imgur.com/qis7Kz3.png" height="200em" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <Row>
                                    <Col>
                                    </Col>

                                    <Col>
                                        <h5>Contáctanos</h5>

                                        <p><a  href="">servicioCliente@SmoakTechnologies.mx</a></p>
                                    </Col>
                                
                                    <Col>
                                        <h5>nosoros</h5>
                                        <p><a href="">¿quienes Somos?</a></p>
                                        <p><a href="">Segurdad</a></p>
                                        <p><a href="">Calidad</a></p>
                                    </Col>
                                    <Col>
                                        <h5>Polticas del sitio</h5>
                                        
                                        <p><a href="">Términos y condiciones</a></p>
                                        <p><a href=""> Cookies</a></p>
                                        <p><a href="">Políticas de Envío</a></p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Container>
                </div>
            </footer>
        </>
    );
}


export default BasicExample;
