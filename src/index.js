import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//a. Create a constant that keeps track of the title and content.
//b. Pass the new note back to the App.
//c. Add new note to an array.
//d. Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//a. Callback from the Note component to trigger a delete function.
//b. Use the filter function to filter out the item that needs deletion.
//c. Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result aiming for:
//https://pogqj.csb.app/
