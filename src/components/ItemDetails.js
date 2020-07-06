import React from "react";

const ItemDetails = props => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.item.image}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {props.item.name}</h2>
            <p>
              <strong>Description: </strong>
              {props.item.description}
            </p>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <p>Price:</p>
                    <strong>{props.item.price}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("connect this to a function that shows all items")
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log(
                  "connect this to a function that adds this item to your personal cart"
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
