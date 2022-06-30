import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../app/reducers/product';
import routes from '../../app/routes';
import './header.css';

const Header = () => {
  const products = useSelector((state) => state.product.products);
  const [filterProduct, setFilterProduct] = useState();
  const [categoryies, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(routes.getCategory())
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error + 'error');
      });
  }, []);

  const handleChange = (e) => {
    setFilterProduct(products);

    const newProducts = filterProduct.products.filter(function (product) {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    dispatch(setProduct({ count: products.count, products: newProducts }));
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    axios
      .get(routes.getProductsWithFilter(`?category=${e.target.value}`))
      .then((res) => {
        dispatch(setProduct(res.data));
      })
      .catch((error) => {
        console.log(error + 'error');
      });
  };

  return (
    <div className="header">
      <div className="input-group w-50">
        <input
          onChange={handleChange}
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group-prepend">
          <button className="btn btn-success">search</button>
        </div>
      </div>
      <select className="form-control w-25" aria-label="Default select example" onChange={handleSelectChange}>
        {categoryies && categoryies?.map((category) => <option value={category}>{category}</option>)}
      </select>
    </div>
  );
};

export default Header;
