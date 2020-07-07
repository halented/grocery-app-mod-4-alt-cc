import React, { Component } from "react";

class YourCart extends Component {
  //your shopping cart code here...

  render() {
    return (
      <div className="ui segment inverted yellow item">
        <div className="ui five column grid">
          <div className="row item-row">
            Your Shopping Cart
            {/*...and here...*/}
          </div>
        </div>
      </div>
    );
  }
}

export default YourCart;
