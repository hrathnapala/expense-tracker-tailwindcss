// import React, { useReducer } from "react";
import React from "react";
import "./App.css";
import Forms from "./components/Forms";
import Graph from "./components/Graph";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const App = () => {
  // const [state, dispatch] = useReducer(reducer, { count: 0, age: 25 });

  return (
    <div className="body">
      <div className="container mx-auto max-w-6xl drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* chart */}
          <Graph />
          {/* form */}
          <Forms />
        </div>
      </div>
    </div>
    // <div className="body">
    //   <h3 className="font-bold text-2xl">{state.count}</h3>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "INCREMENT" });
    //     }}
    //     className="block mx-auto bg-indigo-500 py-3 px-6 rounded-2xl text-white hover:bg-indigo-700"
    //   >
    //     Increment
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "DECREMENT" });
    //     }}
    //     className="block mx-auto bg-indigo-500 my-4 py-3 px-6 rounded-2xl text-white hover:bg-indigo-700"
    //   >
    //     Decrement
    //   </button>
    // </div>
  );
};

export default App;
