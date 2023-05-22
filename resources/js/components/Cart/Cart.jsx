import { Button, Form, Col, Row, Table, Modal, ModalDialog, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom';

function Destroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    const endpoint = 'http://localhost/Smoak/public/api/cart_delete'
    const deleteProduct = async (id) => {
        await axios.post(endpoint, { id: props.Product.product_id }, {
        }).then(response => {
            alert("Producto eliminado")
        }).catch(error => {
            alert(error.response.data);
        })
        navigate("/smoak/public/cart")
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => window.location.reload()}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Seguro que quieres eliminar el producto del carrito: {props.Product.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteProduct(props.Product.id)} className='btn btn-danger'>Eliminar</button>
                </ModalDialog>
            </Modal.Body>
        </Modal>
    );
}

function Cart() {
    const navigate = useNavigate();
    const [modalDelete, setModalDelete] = useState(false);
    const [ProductData, setProductDatos] = useState({});

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user_id");
    if (token == null) {
        navigate("/Smoak/public/login")
    }

    const getAllProduct = async () => {
        const response = await axios.get(`http://localhost/Smoak/public/api/cart/${user}`);
        setProduct(response.data)
    }

    const [Product, setProduct] = useState([])
    useEffect(() => {
        getAllProduct()
    }, [])

    function deleteProduct(product) {
        setModalDelete(true)
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
    {{
        Product.map((item) => (
            subtotal = subtotal + (item.price)
        ))
    }}


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

                                                <td>
                                                    <Button variant="outline-danger" onClick={() => deleteProduct(products)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                        </svg>
                                                    </Button>{' '}
                                                    <Destroy
                                                        show={modalDelete}
                                                        onHide={() => setModalDelete(false)}
                                                        Product={ProductData}
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