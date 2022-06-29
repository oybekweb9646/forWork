import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Header from '../../components/header';
import './main.css';

const Card = () => (
  <div style={{ padding: '35px' }}>
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);

const Main = () => {
  const [state, setState] = useState({
    data: [{}, {}, {}, {}],
    limit: 10,
    activePage: 1,
  });

  const handlePageChange = (number) => {
    console.log(number);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-12">
            <Pagination className="px-4">
              {state.data.map((_, index) => {
                return (
                  <Pagination.Item
                    onClick={() => handlePageChange(index + 1)}
                    key={index + 1}
                    active={index + 1 === state.activePage}
                  >
                    {index + 1}
                  </Pagination.Item>
                );
              })}
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
