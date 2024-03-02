import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
export const IcecreamView = () => {
  const [value, defaulValue] = React.useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecream- {numOfIcecreams} </h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input type="number" value={value} onChange={(e) => defaulValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restock Icecream</button>
    </div>
  );
};
