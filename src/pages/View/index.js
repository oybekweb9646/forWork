import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import routes from '../../app/routes';
import './view.css';

const View = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(routes.getProduct(id))
      .then((res) => {
        setProduct(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <div class="card">
            <img src={product?.thumbnail} class="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center">
            <h3>Brand: </h3>
            <p className="ml-4 mb-0">{product?.brand}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Title: </h3>
            <p className="ml-4 mb-0">{product?.title}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Category: </h3>
            <p className="ml-4 mb-0">{product?.category}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Description: </h3>
            <p className="ml-4 mb-0">{product?.description}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Discount Percentage: </h3>
            <p className="ml-4 mb-0">{product?.discountPercentage}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Price: </h3>
            <p className="ml-4 mb-0">{product?.price}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Rating: </h3>
            <p className="ml-4 mb-0">{product?.rating}</p>
          </div>
          <div className="d-flex align-items-center">
            <h3>Stock: </h3>
            <p className="ml-4 mb-0">{product.stock}</p>
          </div>
        </div>
        <div className="col-12 d-flex mt-3">
          {product?.images?.map((image) => (
            <img src={image} class="card-img-top img" alt="..." />
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
