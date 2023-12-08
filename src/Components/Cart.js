import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  const cartItemList = cartItems.map((item) => (
    <div className="col-md-3" style={{ marginBottom: "15px" }} key={item.id}>
      <Card className="h-100">
        <div className="text-center p-2">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>INR. {item.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Remove from Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row m-0">{cartItemList}</div>;
};

export default Cart;
