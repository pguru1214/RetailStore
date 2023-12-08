import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { getProducts } from "../Store/ProductSlice";

const ProductsStore = () => {
  const dispatch = useDispatch();

  const cartProduct = (product) => {
    dispatch(add(product));
  };

  const { data, status } = useSelector((state) => state.products);

  const Cards = data.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "15px" }} key={product.id}>
      <Card className="h-100">
        <div className="text-center p-2">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR. {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => cartProduct(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  useEffect(() => {
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="row m-0">
      <h1>Products Dashboard</h1>
      {Cards}
    </div>
  );
};

export default ProductsStore;
