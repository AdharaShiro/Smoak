import { Nav, Navbar, NavDropdown, Row, Col, Container } from 'react-bootstrap';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';



function NavBar() {
    const u_id = localStorage.getItem('user_id');
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('user_id');
        alert("Sesion cerrada")
        navigate('/smoak/public/login')
    }

    const getCountProducts = async () => {
        try {
            const response = await axios.get(`http://localhost/Smoak/public/api/countProducts/${u_id}`);
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

                                {/*                                 
                                <Nav.Link as={Link} to='/smoak/public/Help'>Favoritos</Nav.Link>


                                <div class="input-group">
                                    <div class="input-group-text" id="btnGroupAddon2"> <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></span></div>
                                    <input type="text" class="form-control" placeholder="Buscar..." aria-label="Search" aria-describedby="btnGroupAddon2" />
                                </div> */}

                            </Nav>
                            {/*if syntax */}
                            {u_id === null ? (
                                <NavDropdown id="dropright" align="end" title={<img src="https://i.postimg.cc/rmY3H9RD/log.png"
                                    alt='login' style={{ maxHeight: '40px' }} />}>
                                    <NavDropdown.Item as={Link} to="/smoak/public/login">Iniciar Sesión</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/smoak/public/register">Registrarse</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav align="end">
                                    <Nav.Link as={Link} to='/smoak/public/cart'>
                                        <Badge badgeContent={countProducts} color="primary">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </Nav.Link>

                                    <NavDropdown id="dropright" align="end" title={<img src="https://i.postimg.cc/rmY3H9RD/log.png"
                                        alt='login' style={{ maxHeight: '40px' }} />}>
                                        <NavDropdown.Item as={Link} to="/smoak/public/login">Usuario</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} to="/smoak/public/login" onClick={() => logout()}>Cerrar sesion</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            )}




                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <div>
                <section>
                    <Outlet></Outlet>
                </section>
            </div>


        </>
    );
}


export default NavBar;
