import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../app/reducers/product';
import routes from '../../app/routes';
import Header from '../../components/header';
import './main.css';
import PaginationComponent from 'pagination-for-reactjs-component';
import { Link } from 'react-router-dom';

const Card = ({ imgUrl, title, desc, id }) => (
  <div style={{ padding: '35px' }}>
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgUrl} class="card-img-top img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Link to={`/view/${id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  </div>
);

const Main = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(6);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    axios
      .get(routes.getProducts)
      .then((res) => {
        dispatch(setProduct(res.data));
        setPageCount(products.count / 6);
      })
      .catch((error) => {
        console.log(error + 'error');
      });
    setPageCount(products.count / 6 - 1);
  }, []);

  useEffect(() => {
    axios
      .get(routes.getProductsWithFilter(`?offset=${6 * (pageIndex - 1)}&limit=${6 * pageIndex}`))
      .then((res) => {
        dispatch(setProduct(res.data));
      })
      .catch((error) => {
        console.log(error + 'error');
      });
    console.log(pageIndex);
  }, [pageIndex]);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
          {products?.products?.map((product) => (
            <Card
              key={product.id}
              imgUrl={product.thumbnail}
              title={product.title}
              desc={product.description}
              id={product.id}
            />
          ))}
          <div className="col-12">
            <PaginationComponent
              pageCount={pageCount > 0 ? pageCount : 5}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
