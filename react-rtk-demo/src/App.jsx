import React, { useState } from "react";

import "./App.css";
import {CakeView} from "./features/cake/CakeView"; // Corrected import
import {UserView} from "./features/user/UserView"; // Corrected import
import {IcecreamView} from "./features/icecream/IcecreamView"; // Corrected import

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView /> {/* Corrected component name */}
      <IcecreamView /> {/* Corrected component name */}
      <UserView /> {/* Corrected component name */}
    </div>
  );
}

export default App;
