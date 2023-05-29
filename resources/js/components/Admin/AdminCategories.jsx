import { React, useState, useEffect } from 'react';
import { Button, Modal, Form, ModalDialog } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Create } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red, yellow } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';

function Store(props) {
    const endpoint = 'http://localhost/Smoak/public/api/category_store'
    const navigate = useNavigate();

    const [Description, setDescription] = useState('');

    const store = async (e) => {
        const token = localStorage.getItem('token')
        console.log(token);
        e.preventDefault();
        await axios.post(endpoint, { description: Description },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")
                alert("Categoria agregada");
                navigate("/smoak/public/admin/admcategories")
            }).catch(error => {
                console.log(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => window.location.reload()}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar Categoria
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control as="textarea"
                            name="Description"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>
                    Listo
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
function Update(props) {
    const endpoint = 'http://localhost/Smoak/public/api/category_update'
    const [id, setId] = useState('')
    const [Description, setDescription] = useState('');
    const navigate = useNavigate();

    const update = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        await axios.post(endpoint, { id: props.Category.id, description: Description },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Categoria actualizada")
            }).catch(error => {
                alert(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => window.location.reload()}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar categoria
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID: </Form.Label>
                        <Form.Control
                            name="nombre" value={props.Category.id}
                            onChange={(e) => setId(e.target.value)}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Control
                            name="Description" value={Description}
                            onChange={(e) => setDescription(e.target.value)} required />
                        <Form.Label>Dato a modificar: {props.Category.description}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button></Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Listo</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Destroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    const endpoint = 'http://localhost/Smoak/public/api/category_delete'
    const deleteCategory = async (id) => {
        await axios.post(endpoint, { id: props.Category.id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Categoria eliminada")
            }).catch(error => {
                alert(error.response.data);
            })
        navigate("/smoak/public/admin/admcategories")
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
                    Seguro que quieres eliminar la categoria: {props.Category.description}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteCategory(props.Category.id)} className='btn btn-danger'>Eliminar</button>
                </ModalDialog>
            </Modal.Body>
        </Modal>
    );
}

function AdminCategories(props) {
    const [modalStore, setModalStore] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [category, setCategory] = useState({});

    const getCategories = async () => {
        try {
            const response = await axios.get(`http://localhost/Smoak/public/api/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const [Categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
    }, [])

    function categoryEdit(category) {
        setModalEdit(true);
        setCategory(category);
    }
    function categoryDelete(category) {
        setModalDelete(true);
        setCategory(category);
    }

    return (
        <div className='container-sm'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td><h3>Categorias</h3></td>
                        <td></td>
                        <td className='text-end' onClick={() => setModalStore(true)}>
                            <IconButton variant="outline-success">
                                <AddIcon color="success" />
                            </IconButton>
                        </td>
                        <Store
                            show={modalStore}
                            onHide={() => setModalStore(false)}
                        />
                    </tr>
                </thead>
            </table>
            <div className="table-responsive overflow-auto" style={{ maxHeight: '500px' }}>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Categories.map((Category) => (
                            <tr key={Category.id}>
                                <th scope="row">{Category.id}</th>
                                <td>{Category.description}</td>
                                <td className='text-end'>

                                    <IconButton variant="outline-warning" onClick={() => categoryEdit(Category)}>
                                        <CreateOutlinedIcon sx={{ color: yellow[700] }} />
                                    </IconButton>{' '}
                                    <Update
                                        show={modalEdit}
                                        onHide={() => setModalEdit(false)}
                                        Category={category}
                                    />
                                    <IconButton variant="outline-danger" onClick={() => categoryDelete(Category)}>
                                        <DeleteOutlineIcon sx={{ color: red[700] }} />
                                    </IconButton>{' '}
                                    <Destroy
                                        show={modalDelete}
                                        onHide={() => setModalDelete(false)}
                                        Category={category}
                                    />
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminCategories;