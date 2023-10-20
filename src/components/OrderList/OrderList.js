import React from "react";

const OrderList = (props) => {
  const onDelete = () => {
    props.onDeleteOrder(props.id);
  };

  return (
    <li>
      <section style={{ display: "inline" }}>
        {props.price}-Table {props.table}-{props.dish}
      </section>
      <button type="button" style={{ marginLeft: "5px" }} onClick={onDelete}>
        Delete Order
      </button>
    </li>
  );
};

export default OrderList;
