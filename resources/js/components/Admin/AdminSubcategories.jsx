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
    const endpoint = 'http://localhost/Smoak/public/api/subcategory_store'
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
                alert("Subcategoria agregada");
                navigate("/smoak/public/admin/admsubcategories")
            }).catch(error => {
                console.log(error.response.data);
            })
    }

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
                    Agregar Subcategoria
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
    const endpoint = 'http://localhost/Smoak/public/api/subcategory_update'
    const [id, setId] = useState('')
    const [category_id, setCategory_id] = useState('')
    const [Description, setDescription] = useState('');
    const navigate = useNavigate();

    const update = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        await axios.post(endpoint, { id: props.Subcategory.id, Category_id: category_id, description: Description },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Subcategoria actualizada")
            }).catch(error => {
                alert(error.response.data);
            })
    }

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
                    Editar subcategoria
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID: </Form.Label>
                        <Form.Control
                            name="name" value={props.Subcategory.id}
                            onChange={(e) => setId(e.target.value)}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Select
                            name="category_id"
                            value={category_id}
                            onChange={(e) => setCategory_id(e.target.value)}
                            required
                        >
                            <option value="">Seleccione la categoria</option>
                            {Categories.map((Category) => (
                                <option value={Category.id} key={Category.id}>{Category.description}</option>
                            ))}

                        </Form.Select>
                        <Form.Label>Dato a modificar: {props.Subcategory.Category_id}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Subcategoria:</Form.Label>
                        <Form.Control
                            name="Description" value={Description}
                            onChange={(e) => setDescription(e.target.value)} required />
                        <Form.Label>Dato a modificar: {props.Subcategory.description}</Form.Label>
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

    const endpoint = 'http://localhost/Smoak/public/api/subcategory_delete'
    const deleteSubcategory = async (id) => {
        await axios.post(endpoint, { id: props.Subcategory.id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Subcategoria eliminada")
            }).catch(error => {
                alert(error.response.data);
            })
        navigate("/smoak/public/admin/admsubcategories")
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
                    Seguro que quieres eliminar la subcategoria: {props.Subcategory.description}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteSubcategory(props.Subcategory.id)} className='btn btn-danger'>Eliminar</button>
                </ModalDialog>
            </Modal.Body>
        </Modal>
    );
}

function AdminSubcategories(props) {
    const [modalStore, setModalStore] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [subcategory, setSubcategory] = useState({});

    const getSubcategories = async () => {
        try {
            const response = await axios.get(`http://localhost/Smoak/public/api/subcategories`);
            setSubcategories(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const [Subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        getSubcategories()
    }, [])

    function subcategoryEdit(subcategory) {
        setModalEdit(true);
        setSubcategory(subcategory);
    }
    function subcategoryDelete(subcategory) {
        setModalDelete(true);
        setSubcategory(subcategory);
    }

    return (
        <div className='container-sm'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td><h3>Subcategorias</h3></td>
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
                            <th scope="col">Category ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Subcategories.map((Subcategory) => (
                            <tr key={Subcategory.id}>
                                <th scope="row">{Subcategory.id}</th>
                                <td>{Subcategory.Category_id}</td>
                                <td>{Subcategory.description}</td>
                                <td className='text-end'>

                                    <IconButton variant="outline-warning" onClick={() => subcategoryEdit(Subcategory)}>
                                        <CreateOutlinedIcon sx={{ color: yellow[700] }} />
                                    </IconButton>{' '}
                                    <Update
                                        show={modalEdit}
                                        onHide={() => setModalEdit(false)}
                                        Subcategory={subcategory}
                                    />
                                    <IconButton variant="outline-danger" onClick={() => subcategoryDelete(Subcategory)}>
                                        <DeleteOutlineIcon sx={{ color: red[700] }} />
                                    </IconButton>{' '}
                                    <Destroy
                                        show={modalDelete}
                                        onHide={() => setModalDelete(false)}
                                        Subcategory={subcategory}
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

export default AdminSubcategories;