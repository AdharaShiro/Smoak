import { Nav, Navbar, NavDropdown, Row, Col, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import {IconButton} from '@mui/material';

function BasicExample() {
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
                                <Nav.Link as={Link} to='/smoak/public/productos'>Productos</Nav.Link>
                                <Nav.Link as={Link} to='/smoak/public/metodo'>Metodos de pago</Nav.Link>
                                <Nav.Link as={Link} to='/smoak/public/centro'>¿Necesitas ayuda?</Nav.Link>
                            </Nav>
                            <Nav align="end">
                                <Nav.Link as={Link} to='/smoak/public/carrito'>
                                    <IconButton aria-label="cart">
                                            <i className="material-icons">shopping_cart</i>
                                    </IconButton>
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

            <footer style={{ backgroundColor: '#00acc1' }}>
                <br />
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <h4>Terminos y condiciones</h4>

                                <p><a href="">Busqueda</a></p>
                                <p><a href="">Términos del servicio</a></p>
                            </Col>

                            <Col>
                                <h4>Contáctanos</h4>

                                <p><a href="">servicioalcliente@SmoakTechnologies.com.mx</a></p>
                                <p>Encuentra nuestros productos en cualquiera de los siguientes tiendas <a href="">MARKETPLACES</a>:</p>
                                <ul>
                                    <li>
                                        Sanbors/ Liverpool
                                    </li>
                                    <li>
                                        Mercado / Amazon
                                    </li>
                                    <li>
                                        DDTECH
                                    </li>
                                </ul>
                            </Col>

                            <Col>
                                <h3>NOSOTROS</h3>

                                <p><a href="">¿QUIÉNES SOMOS?</a></p>
                                <p><a href="">MEDIO AMBIENTE</a></p>
                                <p><a href="">SEGURIDAD</a></p>
                                <p><a href="">CALIDAD</a></p>
                            </Col>

                            <Col>
                                <h3>POLÍTICAS DEL SITIO</h3>

                                <p><a href="">Tratamiento de Datos</a></p>
                                <p><a href="">Términos y condiciones</a></p>
                                <p><a href="">Política de Cookies</a></p>
                                <p><a href="">Políticas de Envío</a></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    );
}


export default BasicExample;
//as={Link} to="/librar.io/public/login"