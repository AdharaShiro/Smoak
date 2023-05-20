import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Admin() {
    return (
        <>
            <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", }}>
                <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%" }}>
                    <h1>Página del Administrador</h1>
                    <div style={{ fontWeight: "bold" }}>
                        <Row style={{ fontWeight: "bold" }}>
                            <Col style={{ fontWeight: "bold" }}>
                                <Link to='/Smoak/public/admin/admcategorias'>
                                    {[
                                        'Primary'
                                    ].map((variant) => (
                                        <Card
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: 'auto', textAlign: "center", fontWeight: "bold" }}
                                            className="mb-2"
                                            align="center"
                                        >
                                            <Col>
                                                <Card.Img src='https://i.postimg.cc/DwkNV2x8/categoria.png'
                                                    style={{ width: '75%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                <Card.Title style={{ fontWeight: "bold" }}> <strong>Nuestras</strong> </Card.Title>
                                                    <Card.Text>
                                                        Categorias
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    ))}
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/example-app/public/admin/admproductos'>

                                    {[
                                        'Primary'
                                    ].map((variant) => (
                                        <Card
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: 'auto', textAlign: "center" }}
                                            className="mb-2"
                                            align="center"
                                        >
                                            <Col>
                                                <Card.Img src='https://i.postimg.cc/T1sZ5gj9/producto.png'
                                                    style={{ width: '75%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title style={{ fontWeight: "bold" }}> <strong>Nuestros</strong> </Card.Title>
                                                    <Card.Text>
                                                        Productos
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    ))}
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/Smoak/public/admin/admuser'>
                                    {[
                                        'Primary'
                                    ].map((variant) => (
                                        <Card
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: 'auto', textAlign: "center" }}
                                            className="mb-2"
                                            align="center"
                                        >
                                            <Col>
                                                <Card.Img src='https://i.postimg.cc/wv72yPwC/usuario.png'
                                                    style={{ width: '75%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Body>   
                                                <Card.Title style={{ fontWeight: "bold" }}> <strong>Nuestros</strong> </Card.Title>                                                 
                                                    <Card.Text>
                                                        Usuarios
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    ))}
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <hr />

                    <div align="center" style={{ paddingBottom: "2%" }}>
                        <h5>Herramientas que permiten adminstar la página.</h5>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Admin;