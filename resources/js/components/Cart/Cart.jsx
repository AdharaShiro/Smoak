import { Button, Form, Col, Row, Table, Modal, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom';



function ProductUpdate(props) {
    const user_id = localStorage.getItem('user_id')
    const endpoint = 'http://localhost/Smoak/public/api/cart_update'
    const [quantity, setquantity] = useState('')
    const updateProduct = async (id) => {
        await axios.post(endpoint, { user_id: user_id, product_id: id, quantity: quantity })
        alert("Producto actualizado");
        navigate('/carro')
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit {props.product.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            name="quantity" value={quantity} placeholder={props.product.stockQuantity}
                            onChange={(e) => setquantity(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => updateProduct(props.product.id)} className='btn btn-warning'>Edit</Button>
                <Button onClick={() => window.location.reload()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
const user = localStorage.getItem("user");
function ProductDeleted(props) {
    const endpoint = 'http://localhost/Smoak/public/api/cart_delete'
    const deleteProduct = async (id) => {
        await axios.post(endpoint, { id: id, user: user })
        alert("Producto eliminado");
        navigate('/')
    }
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¿Seguro que quieres eliminar {props.product.product}?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={() => deleteProduct(props.product.id)} className='btn btn-danger'>Delete</Button>
                <Button onClick={() => window.location.reload()}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}


function Cart() {
    const navigate = useNavigate();
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [ProductData, setProductDatos] = useState({});

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user_id");
    if (token == null) {
        navigate("/Smoalk/public/login")
    }

    const getAllProduct = async () => {
        const response = await axios.get(`http://localhost/Smoak/public/api/cart/${user}`);
        setProduct(response.data)
    }

    const [Product, setProduct] = useState([])
    useEffect(() => {
        getAllProduct()
    }, [])


    function editProduct(product) {
        setModalShow1(true)
        setProductDatos(product)
    }

    function deleteProduct(product) {
        setModalShow2(true)
        setProductDatos(product)
    }

    const soldProducts = async (e) => {
        e.preventDefault();
        const user = localStorage.getItem("user");
        const endpoint = '';
        await axios.post(endpoint, { user: user });
        alert("Compra hecha");
        navigate('/Smoak/public/');
    }

    var subtotal = 0;
    var amount = 0;
    {
        Product.map((item) => (
            subtotal = subtotal + (item.price * item.quantity)
        ))
    }
    {
        Product.map((item) => (
            amount = amount + (1 * item.quantity)
        ))
    }
    console.log("subtotal:", subtotal)
    console.log("quantity:", amount)


    return (
        <>
            <div style={{ backgroundColor: "#ededed" }}>
                <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", backgroundColor: "#ededed", paddingBottom: "5%" }}>
                    <Row>
                        <div style={{ display: "inline-flex", textAlign: "end", paddingBottom: "5px", paddingTop: "10px" }}>
                            <h1>Carrito</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col style={{ width: "auto%", backgroundColor: "white", borderRadius: "10px" }}>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Imagen</th>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Product.map((products) => (
                                            <tr key={products.id}>
                                                <td>{products.id}</td>
                                                <td><Image src={products.photo} width={100}></Image></td>
                                                <td>{products.name}</td>
                                                <td>{products.price}</td>
                                                <td>{products.setquantity}</td>
                                                <td>
                                                    <Button variant="outline-info" onClick={() => editProduct(products)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                        </svg>
                                                        </Button>{' '}
                                                    <ProductUpdate
                                                        show={modalShow1}
                                                        onHide={() => setModalShow1(false)}
                                                        product={ProductData}
                                                    />
                                                    <Button variant="outline-danger" onClick={() => deleteProduct(products)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                        </svg>
                                                    </Button>{' '}
                                                    <ProductDeleted
                                                        show={modalShow2}
                                                        onHide={() => setModalShow2(false)}
                                                        product={ProductData}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col style={{ maxWidth: "25%", marginLeft: "2%" }}>
                            <div style={{ textAlign: "center", backgroundColor: "white", paddingBottom: "5%", paddingTop: "5%", borderRadius: "15px" }}>
                                <h1>Subtotal:</h1>
                                <h2><strong>$</strong>{subtotal}</h2>
                                <br />
                                <h4> <strong>{amount}</strong> product(s) </h4>
                                <div className="d-grid gap-2" style={{ marginLeft: "5%", marginRight: "5%" }}>
                                    <div>
                                        <Button variant="Primary" size="lg" onClick={soldProducts}>
                                            Realizar compra
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Cart;