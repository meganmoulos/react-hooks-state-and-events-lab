import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react"

function App() {

  // State for values based on user input, keeping track of changing values
  // Set state function
  const [isDark, setIsDark] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  
  // Update switch from light to dark and vice versa
  // Runs on click
  function toggleDarkMode(){
    if(isDark === false){
      setIsDark(true)
    } else {
      setIsDark(false)
    }
    // setIsDark(!isDark) <- another way to do it
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{isDark ? "Light Mode": "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
