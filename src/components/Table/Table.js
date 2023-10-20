import React, { Fragment } from "react";
import OrderList from "../OrderList/OrderList";

const Table = (props) => {
  let orders = props.orders;
  const filteredOrders = orders.filter((order) => {
    return order.table === props.table;
  });

  const onDeleteOrder = (orderId) => {
    props.deleteOrder(orderId);
  };

  return (
    <Fragment>
      <h3>Table {props.table}</h3>
      <ul>
        {filteredOrders.map((order) => (
          <OrderList
            key={order.orderId}
            id={order.orderId}
            price={order.price}
            table={order.table}
            dish={order.dish}
            onDeleteOrder={onDeleteOrder}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default Table;
