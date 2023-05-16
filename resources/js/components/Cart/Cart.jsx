import { Button, Form, Col, Row, Table, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom';

//CUENTA 
//sb-fo43mb22318371@personal.example.com | 0@KV|W4a

function ProductUpdate(props) {
    const endpoint = 'http://localhost/Smoak/public/api/cart_update'
    const [quantity, setquantity] = useState('')
    const updateProduct = async (id) => {
        await axios.post(endpoint, { product_id: product_id, quantity: quantity })
        alert("Product actualizado");
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
                    Edit {props.product.product}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            name="quantity" value={quantity} placeholder={props.product.quantity}
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
        await axios.post(endpoint, { id: id, user: user})
        alert("Product eliminado");
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


function Carrito() {
    const navigate = useNavigate();
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [productDatos, setProductDatos] = useState({});

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user_id");
    if (token == null) {
        navigate("/example-app/public/login")
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

    const productsVendidos = async (e) => {
        e.preventDefault();
        const user = localStorage.getItem("user");
        const endpoint = 'http://localhost/example-app/public/api/productsVendidos';
        await axios.post(endpoint, {user: user});
        alert("Compra hecha");
        navigate('/example-app/public/');
    }

    var subtotal = 0;
    var cant = 0;
    {
        Product.map((item) => (
            subtotal = subtotal + (item.precio * item.quantity)
        ))
    }
    {
        Product.map((item) => (
            cant = cant + (1 * item.quantity)
        ))
    }
    console.log("subtotal:", subtotal)
    console.log("quantity:", cant)


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
                                            <th>Product</th>
                                            <th>Memoria</th>
                                            <th>Color</th>
                                            <th>Precio</th>
                                            <th>quantity</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Product.map((products) => (
                                            <tr key={products.id}>
                                                <td>{products.id}</td>
                                                <td><img src={products.imagen} alt="imagen {products.id}" width="100px" /></td>
                                                <td>{products.product}</td>
                                                <td>{products.memoria}</td>
                                                <td>{products.color}</td>
                                                <td>{products.precio}</td>
                                                <td>{products.quantity}</td>
                                                <td>
                                                    <Button variant="warning" onClick={() => editProduct(products)}>Editar</Button>{' '}
                                                    <ProductUpdate
                                                        show={modalShow1}
                                                        onHide={() => setModalShow1(false)}
                                                        product={productDatos}
                                                    />
                                                    <Button variant="danger" onClick={() => deleteProduct(products)}>Eliminar</Button>{' '}
                                                    <ProductDeleted
                                                        show={modalShow2}
                                                        onHide={() => setModalShow2(false)}
                                                        product={productDatos}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col style={{ maxWidth: "20%", marginLeft: "2%" }}>
                            <div style={{ textAlign: "center", backgroundColor: "white", paddingBottom: "5%", paddingTop: "5%", borderRadius: "15px" }}>
                                <h1>Subtotal:</h1>
                                <h2><strong>$</strong>{subtotal}</h2>
                                <br />
                                <h4> <strong>{cant}</strong> product(s) </h4>
                                <div className="d-grid gap-2" style={{ marginLeft: "5%", marginRight: "5%" }}>
                                    <div>
                                        <Button variant="Primary" size="lg" onClick={productsVendidos}>
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

export default Carrito;