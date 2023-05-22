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
    const endpoint = 'http://localhost/Smoak/public/api/product_store'
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [photo, setPhoto] = useState('');
    const [storage, setStorage] = useState('');
    const [RAM, setRAM] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');
    const [description, setDescription] = useState('');
    const [CPU, setCPU] = useState('');
    const [price, setPrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [subcategory_id, setSubcategory_id] = useState('');


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

    const store = async (e) => {

        const token = localStorage.getItem('token')
        console.log(token);
        e.preventDefault();
        await axios.post(endpoint, {
            name: name, model: model, brand: brand, color: color,
            photo: photo, storage: storage, RAM: RAM, batteryCapacity: batteryCapacity,
            Description: description, CPU: CPU, price: price, stockQuantity: stockQuantity, subCategory_id: subcategory_id
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Producto agregado");
                navigate("/smoak/public/admin/admproducts")
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
                    Agregar producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control as="textarea"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Modelo:</Form.Label>
                        <Form.Control as="textarea"
                            name="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Marca:</Form.Label>
                        <Form.Control as="textarea"
                            name="brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>color:</Form.Label>
                        <Form.Control as="textarea"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Foto:</Form.Label>
                        <Form.Control as="textarea"
                            name="photo"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Almacenamiento:</Form.Label>
                        <Form.Control as="textarea"
                            name="storgae"
                            value={storage}
                            onChange={(e) => setStorage(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>RAM:</Form.Label>
                        <Form.Control as="textarea"
                            name="RAM"
                            value={RAM}
                            onChange={(e) => setRAM(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Capacidad de Batería:</Form.Label>
                        <Form.Control as="textarea"
                            name="batteryCapacity"
                            value={batteryCapacity}
                            onChange={(e) => setBatteryCapacity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control as="textarea"
                            name="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>CPU:</Form.Label>
                        <Form.Control as="textarea"
                            name="CPU"
                            value={CPU}
                            onChange={(e) => setCPU(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control as="textarea"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Cantidad en Stock:</Form.Label>
                        <Form.Control as="textarea"
                            name="stockQuantity"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Subcategoria:</Form.Label>
                        <Form.Control as="textarea"
                            name="subcategory_id"
                            value={subcategory_id}
                            onChange={(e) => setSubcategory_id(e.target.value)}
                            required
                        >
                            <option value="">Seleccione la subcategoria</option>
                            {Subcategories.map((Subcategory) => (
                                <option value={Subcategory.id} key={Subcategory.id}>{Subcategory.description}</option>
                            ))}

                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Button type='submit'>Guardar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
function Update(props) {
    const endpoint = 'http://localhost/Smoak/public/api/product_update'
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [photo, setPhoto] = useState('');
    const [storage, setStorage] = useState('');
    const [RAM, setRAM] = useState('');
    const [batteryCapacity, setBatteryCapacity] = useState('');
    const [description, setDescription] = useState('');
    const [CPU, setCPU] = useState('');
    const [price, setPrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [subcategory_id, setSubcategory_id] = useState('');

    const update = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        await axios.post(endpoint, {
            name: name, model: model, brand: brand, color: color,
            photo: photo, storage: storage, RAM: RAM, batteryCapacity: batteryCapacity,
            Description: description, CPU: CPU, price: price, stockQuantity: stockQuantity, subCategory_id: subcategory_id
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Producto actualizado")
            }).catch(error => {
                alert(error.response.data);
            })
    }

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
                    Editar producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID: </Form.Label>
                        <Form.Control
                            name="nombre" value={props.Product.id}
                            onChange={(e) => setId(e.target.value)}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control as="textarea"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.name}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Modelo:</Form.Label>
                        <Form.Control as="textarea"
                            name="model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.model}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Marca:</Form.Label>
                        <Form.Control as="textarea"
                            name="brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.brand}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>color:</Form.Label>
                        <Form.Control as="textarea"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.color}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Foto:</Form.Label>
                        <Form.Control as="textarea"
                            name="photo"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.photo}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Almacenamiento:</Form.Label>
                        <Form.Control as="textarea"
                            name="storgae"
                            value={storage}
                            onChange={(e) => setStorage(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.storage}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>RAM:</Form.Label>
                        <Form.Control as="textarea"
                            name="RAM"
                            value={RAM}
                            onChange={(e) => setRAM(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.RAM}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Capacidad de Batería:</Form.Label>
                        <Form.Control as="textarea"
                            name="batteryCapacity"
                            value={batteryCapacity}
                            onChange={(e) => setBatteryCapacity(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.batteryCapacity}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control as="textarea"
                            name="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.description}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>CPU:</Form.Label>
                        <Form.Control as="textarea"
                            name="CPU"
                            value={CPU}
                            onChange={(e) => setCPU(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.CPU}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control as="textarea"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.price}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Cantidad en Stock:</Form.Label>
                        <Form.Control as="textarea"
                            name="stockQuantity"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                            required
                        />
                        <Form.Label>Dato a modificar: {props.Product.stockQuantity}</Form.Label>

                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Subcategoria:</Form.Label>
                        <Form.Select
                            name="subcategory_id"
                            value={subcategory_id}
                            onChange={(e) => setSubcategory_id(e.target.value)}
                            required
                        >
                            <option value="">Seleccione la subcategoria</option>
                            {Subcategories.map((Subcategory) => (
                                <option value={Subcategory.id} key={Subcategory.id}>{Subcategory.description}</option>
                            ))}

                        </Form.Select>
                        <Form.Label>Dato a modificar: {props.Product.subcategory_id}</Form.Label>

                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

function Destroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    const endpoint = 'http://localhost/Smoak/public/api/product_delete'
    const deleteProduct = async (id) => {
        await axios.post(endpoint, { id: props.Product.id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Producto eliminado")
            }).catch(error => {
                alert(error.response.data);
            })
        navigate("/smoak/public/admin/admproducts")
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
                    Seguro que quieres eliminar el producto: {props.Product.name}
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

function AdminProducts(props) {
    const [modalStore, setModalStore] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [product, setProduct] = useState({});

    const getProducts = async () => {
        try {
            const response = await axios.get(`http://localhost/Smoak/public/api/products`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])

    function productEdit(product) {
        setModalEdit(true);
        setProduct(product);
    }
    function productDelete(product) {
        setModalDelete(true);
        setProduct(product);
    }

    return (
        <div className='container-sm'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td><h3>Productos</h3></td>
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
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Color</th>
                        <th scope="col">Almacenamiento</th>
                        <th scope="col">RAM</th>
                        <th scope="col">Capacidad de bateria</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">CPU</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Subcategory</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((Product) => (
                        <tr key={Product.id}>
                            <th scope="row">{Product.id}</th>
                            <td>{Product.photo}</td>
                            <td>{Product.name}</td>
                            <td>{Product.model}</td>
                            <td>{Product.brand}</td>
                            <td>{Product.color}</td>
                            <td>{Product.storage}</td>
                            <td>{Product.RAM}</td>
                            <td>{Product.batteryCapacity}</td>
                            <td>{Product.description}</td>
                            <td>{Product.CPU}</td>
                            <td>{Product.price}</td>
                            <td>{Product.stockQuantity}</td>
                            <td>{Product.subcategory_id}</td>
{/* El Jared estuvo aquí, ya se jue has pruebas de todo, ya se me hizo tarde baaaaaaaaai */}
                            <td className='text-end'>

                                <IconButton variant="outline-warning" onClick={() => productEdit(Product)}>
                                    <CreateOutlinedIcon sx={{ color: yellow[700] }} />
                                </IconButton>{' '}
                                <Update
                                    show={modalEdit}
                                    onHide={() => setModalEdit(false)}
                                    Product={product}
                                />
                                <IconButton variant="outline-danger" onClick={() => productDelete(Product)}>
                                    <DeleteOutlineIcon sx={{ color: red[700] }} />
                                </IconButton>{' '}
                                <Destroy
                                    show={modalDelete}
                                    onHide={() => setModalDelete(false)}
                                    Product={product}
                                />
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
}

export default AdminProducts;