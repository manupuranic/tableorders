import React, { useReducer } from "react";
import Input from "../UI/Input/Input";

const inputReducer = (state, action) => {
  if (action.type === "ID_CHANGE") {
    return {
      orderId: action.value,
      price: state.price,
      dish: state.dish,
      table: state.table,
      isValid: state.isValid,
    };
  } else if (action.type === "PRICE_CHANGE") {
    return {
      orderId: state.orderId,
      price: action.value,
      dish: state.dish,
      table: state.table,
      isValid: state.isValid,
    };
  } else if (action.type === "DISH_CHANGE") {
    return {
      orderId: state.orderId,
      price: state.price,
      dish: action.value,
      table: state.table,
      isValid: state.isValid,
    };
  } else if (action.type === "TABLE_CHANGE") {
    return {
      orderId: state.orderId,
      price: state.price,
      dish: state.dish,
      table: action.value,
      isValid: state.isValid,
    };
  } else if (action.type === "IS_VALID") {
    let isValid;
    if (
      state.orderId.trim().length !== 0 &&
      state.price.trim().length !== 0 &&
      state.dish.trim().length !== 0 &&
      state.table !== 0
    ) {
      isValid = true;
    } else {
      isValid = false;
    }
    return {
      orderId: state.orderId,
      price: state.price,
      dish: state.dish,
      table: state.table,
      isValid: isValid,
    };
  } else if (action.type === "CLEAR_INPUTS") {
    return {
      orderId: "",
      price: "",
      dish: "",
      table: "0",
      isValid: true,
    };
  }
  return state;
};

const OrderForm = (props) => {
  const [state, dispatchState] = useReducer(inputReducer, {
    orderId: "",
    price: "",
    dish: "",
    table: "0",
    isValid: true,
  });

  const onIdChange = (event) => {
    dispatchState({ type: "ID_CHANGE", value: event.target.value });
  };
  const onPriceChange = (event) => {
    dispatchState({ type: "PRICE_CHANGE", value: event.target.value });
  };
  const onDishChange = (event) => {
    dispatchState({ type: "DISH_CHANGE", value: event.target.value });
  };
  const onTableChange = (event) => {
    dispatchState({ type: "TABLE_CHANGE", value: event.target.value });
  };

  const onFormSubmission = (e) => {
    e.preventDefault();
    dispatchState({ type: "IS_VALID" });
    if (state.isValid) {
      props.onSubmit({
        orderId: state.orderId,
        price: state.price,
        dish: state.dish,
        table: state.table,
      });
      dispatchState({ type: "CLEAR_INPUTS" });
    } else {
      alert("Form input is empty!");
    }
  };

  return (
    <form onSubmit={onFormSubmission}>
      <Input
        id="orderid"
        type="text"
        label="Order ID: "
        value={state.orderId}
        onChange={onIdChange}
      />
      <Input
        id="price"
        type="Number"
        label="Price: "
        value={state.price}
        onChange={onPriceChange}
      />
      <Input
        id="dish"
        type="text"
        label="Choose Dish: "
        value={state.dish}
        onChange={onDishChange}
      />
      <label htmlFor="table">Choose Table: </label>
      <select id="table" value={state.table} onChange={onTableChange}>
        <option value="0">Choose a Table</option>
        <option value="1">Table 1</option>
        <option value="2">Table 2</option>
        <option value="3">Table 3</option>
      </select>
      <button type="submit" style={{ marginLeft: "5px" }}>
        Add to bill
      </button>
    </form>
  );
};

export default OrderForm;
