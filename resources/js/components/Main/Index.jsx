import { Col, Row, Button, Tab, Tabs, Carousel, Stack, Card } from 'react-bootstrap';
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


  return (
    <div className="container">
      <div className="row">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.imgur.com/6vb9TyB.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/afgbr18.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://i.imgur.com/Upc938Y.png" className="d-block w-100" alt="..." />
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
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer" style={{ textAlign: 'right' }}>
                <div className="row">
                  <div className="col" style={{textAlign: 'left'}}>
                    <Checkbox {...label} title='Cart' icon={<AddShoppingCartIcon />} checkedIcon={<ShoppingCartIcon />} />
                  </div>
                  <div className="col px-3">
                    <Checkbox {...label} title='Favorite' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox {...label} title='Add to listing' icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Main;


/*

*/