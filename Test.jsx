import React, { useState } from "react";

const Test = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // isLoggedIn is named as state variable and setLoggedIn is named as state function
  // useState is a hook that lets you add React state to function components
    // It returns an array with 2 elements
    // The first element is the current state value and the second element is a function that lets you update it
    // The only argument to useState is the initial state
    // The initial state does not have to be an object, it can be any type
    // The useState function is a named export from the 'react' module

  // return(
  //     <div>
  //         <h1>Welcome Guest</h1>
  //         <h1>Welcome John</h1>
  //     </div>
  // )
  let response;
  if (isLoggedIn) {
    response = <h1>Welcome John</h1>;
  } else {
    response = <h1>Welcome Guest</h1>;
  }

  return response;
};
export default Test;
