import React, { Component } from "react";
import AddItemForm from "../components/AddItemForm";

class Grocery extends Component {
  //start in this component with your code for step one

  state = {
    showForm: false
  }

  render() {
    return <div>
      <button onClick={()=>this.setState({showForm: !this.state.showForm})}>Toggle Form</button>
      {this.state.showForm && <AddItemForm />}
      {/* add other components here */}
      </div>;
  }
}

export default Grocery;
