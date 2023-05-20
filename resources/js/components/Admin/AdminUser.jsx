import {Table, Button, Modal, Form, ModalDialog} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserStore(props) {
    const endpoint = 'http://localhost/Smoak/public/api/register'
    const [role, setRole] = useState('')
    const [nombre, setName] = useState('')
    const [apellido, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        
        await axios.post(endpoint,
            {
                nombre: nombre, apellido: apellido, email: email, password: password,
                remember_token: remember_token, dirección: dirección
            },
            {            
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")      
                alert("Usuario agregado")           
                navigate("/public/admin/admuser")               
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar usuario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            name="nombre" value={nombre}
                            onChange={(e) => setName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control
                            name="nombre" value={apellido}
                            onChange={(e) => setLastname(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rol:</Form.Label>
                        <Form.Control
                            name="nombre" value={rol}
                            onChange={(e) => setRol(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            name="nombre" value={email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            name="nombre" value={password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </Form.Group>                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control
                            name="nombre" value={dirección}
                            onChange={(e) => setAddress(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button></Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button> 
            </Modal.Footer>
        </Modal>
    );
}

function UserUpdate(props) {
    const endpoint = 'http://localhost/Smoak/public/api/user_update'
    const [id, setId] = useState('')
    const [rol, setRol] = useState('')
    const [nombre, setName] = useState('')
    const [apellido, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember_token, setRemember_token] = useState('')
    const [dirección, setAddress] = useState('')
    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        await axios.post(endpoint,
            {
                id: props.user.id, rol: rol, nombre: nombre, apellido: apellido, email: email,
                password: password, remember_token: remember_token, dirección: dirección
            },{            
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")     
                alert("Usuario editado")            
                navigate("/Smoak/public/admin/admuser")               
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar usuario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>id:</Form.Label>
                        <Form.Control
                            name="nombre" value={props.user.id}
                            onChange={(e) => setId(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            name="nombre" value={nombre} placeholder={props.user.nombre}
                            onChange={(e) => setName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control
                            name="nombre" value={apellido} placeholder={props.user.apellido}
                            onChange={(e) => setLastname(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rol:</Form.Label>
                        <Form.Control
                            name="nombre" value={rol} placeholder={props.user.rol}
                            onChange={(e) => setRol(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            name="nombre" value={email} placeholder={props.user.email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            name="nombre" value={password} placeholder={props.user.password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Direccion:</Form.Label>
                        <Form.Control
                            name="nombre" value={dirección} placeholder={props.user.dirección}
                            onChange={(e) => setAddress(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button></Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button> 
            </Modal.Footer>
        </Modal>
    );
}
 
function UserDestroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const endpoint = 'http://localhost/Smoak/public/api/user_delete'
    
    
    const deleteUser = async (id) => {
        await axios.post(endpoint, { id: id },
            {            
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log("realizado")      
            alert("Usuario eliminado")           
            navigate("/Smoak/public/admin/admuser")               
        }).catch(error => {
            console.log("Error");
            console.log(error.response.data);
        })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Seguro que deseas eliminar este usuario? {props.user.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteUser(props.user.id)} className='btn btn-danger'>ELiminar</button>
                </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button> 
            </Modal.Footer>
        </Modal>
    );
}

function AdminUser() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [userDatos, setUserDatos] = useState({});

    const getAllUser = async () => {
        const response = await axios.get(`http://localhost/Smoak/public/api/user_index`)
        setUser(response.data)
    }

    const [User, setUser] = useState([])
    useEffect(() => {
        getAllUser()
    }, [])

    function editUser(user) {
        setModalShow2(true)
        setUserDatos(user)
    }

    function deleteUser(user) {
        setModalShow3(true)
        setUserDatos(user)
    }

    return (
        <>
            <body style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", }}>
                <div style={{ display: "inline-flex", textAlign: "end", paddingBottom: "10px  " }}>
                    <div style={{ paddingRight: "20px" }}>
                        Usuarios
                    </div>
                    <div>
                        <Button variant="primary" onClick={() => setModalShow1(true)}>Agregar</Button>{' '}
                        <UserStore
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                        />
                    </div>
                </div>
                <div>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>_token</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {User.map((users) => (
                                <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.rol}</td>
                                    <td>{users.nombre}</td>
                                    <td>{users.apellido}</td>
                                    <td>{users.email}</td>
                                    <td>{users.password}</td>
                                    <td>{users.remember_token}</td>
                                    <td>{users.dirección}</td>
                                    <td>
                                        <Button variant="warning" onClick={() => editUser(users)}>Editar</Button>{' '}
                                        <UserUpdate
                                            show={modalShow2}
                                            onHide={() => setModalShow2(false)}
                                            user={userDatos}
                                        />
                                        <Button variant="danger" onClick={() => deleteUser(users)}>Eliminar</Button>{' '}
                                        <UserDestroy
                                            show={modalShow3}
                                            onHide={() => setModalShow3(false)}
                                            user={userDatos}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </body>
        </>
    );
}
export default AdminUser;