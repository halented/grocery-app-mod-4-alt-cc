import React from "react";

const GroceryItemCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.item.id}
        onClick={() => console.log("add code to connect event listener")}
      >
        <div className="image">
          <img alt="oh no!" src={props.item.image} />
        </div>
        <div className="content">
          <div className="header">
            {props.item.name}
          </div>
          <div className="meta text-wrap">
            <small>{props.item.description}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                °
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroceryItemCard;
