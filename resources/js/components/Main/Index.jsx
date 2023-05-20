import { Col, Row, Button, Tab, Tabs, Carousel, Stack, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Main() {
  /*const getAllProducto = async (id = 1) => {
    const response = await axios.get(`http://smoak/public/api/product_show/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    setProducto(response.data)
  }
  const [Producto, setProducto] = useState([])
  useEffect(() => {
    getAllProducto()

  }, [])*/

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  //hace uso de la ruta del controlador y guarda la informacion en esta variable 


  const getLastProducts = async () => {
    try {
      const responce = await axios.get(`http://localhost/Smoak/public/api/lastProducts`);
      setlastProducts(responce.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [lastProducts, setlastProducts] = useState([]);
  useEffect(() => {
    getLastProducts()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector('#carouselExampleFade');
      const isPlaying = carousel.querySelector('.carousel-item-next, .carousel-item-prev');

      if (!isPlaying) {
        const next = carousel.querySelector('.carousel-item.active').nextElementSibling;
        const index = next.getAttribute('data-bs-slide-to');
        const btn = carousel.querySelector(`button[data-bs-slide-to="${index}"]`);
        btn.click();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.imgur.com/u4fHzEs.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/Tt8aBqn.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/j3wjxv5.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/x5R3DLQ.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/EC05KlX.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/Ld6Fk1u.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/KzHWVq3.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/geN1zWE.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      <div className="row py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {lastProducts.map((lp) => (
            // Contenido de la plantilla 
            <div className="col" key={lp.id}>
              <div className="card h-100">
                {/* Estructura del if   */}
                {lp.photo === "" ? (
                  <Image src="https://i.imgur.com/SZLTLGr.jpg" rounded></Image>
                ) : (
                  <Image src={lp.photo} rounded></Image>
                )}
                <div className="card-body">
                  <h5 className="card-title">{lp.name}</h5>
                  <p className="card-text">${lp.price}</p>
                </div>
                <div className="card-footer" style={{ textAlign: 'right' }}>
                  <div className="row">
                    <div className="col" style={{ textAlign: 'left' }}>
                      <Checkbox {...label} 
                      title='Cart' icon={<AddShoppingCartIcon />} checkedIcon={<ShoppingCartIcon />} />
                    </div>
                    <div className="col px-3">
                      <Checkbox  title='Favorite' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      <Checkbox {...label} title='Add to listing' icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;


/*

*/