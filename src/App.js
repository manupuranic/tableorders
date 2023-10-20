import { Fragment, useEffect, useState } from "react";
import "./App.css";
import OrderForm from "./components/OrderForm/OrderForm";
import Table from "./components/Table/Table";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const localStorageOrders = localStorage.getItem("orders");
    if (localStorageOrders) {
      setOrders(JSON.parse(localStorageOrders));
    }
  }, []);

  const addToOrders = (order) => {
    const newOrders = [...orders, order];
    setOrders(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));
  };

  const deleteOrderHandler = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Table Orders</h1>
      <OrderForm onSubmit={addToOrders} />
      <Table table="1" orders={orders} deleteOrder={deleteOrderHandler} />
      <Table table="2" orders={orders} deleteOrder={deleteOrderHandler} />
      <Table table="3" orders={orders} deleteOrder={deleteOrderHandler} />
    </Fragment>
  );
}

export default App;
