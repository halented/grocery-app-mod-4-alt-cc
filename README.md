# React Immersive Code Challenge: Grocery App

Welcome to the **Grocery App**, where you can do simulated shopping!

![alt text][checkpoint]

[checkpoint]: ./public/checkpoint_demo.gif "Checkpoint demo"

Using our app, you can view an abbreviated list of items you might find in a grocery store. Users should be able to add items into their cart and remove them. 

## Instructions

For this project, you’ll be building out a React application that displays a list of available grocery items, among other features. Try your best to find the right places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Setup

After cloning down the project:

1. Run `npm install` in your terminal
2. Run `npm start`: This will open both your React page on port `6002` and your backend on port `6001`.

## Endpoints

The base URL for your backend is: `http://localhost:6001`

These are the endpoints you might need:

- GET: `/items`
- POST: `/items`

## What You Already Have

`Grocery` is the highest component below App, and serves as the main container for all of the pieces of the page.

`ItemContainer` and `YourCart` are container components, which are children of `Grocery`. `ItemContainer` is where all the available grocery items will be displayed, while `YourCart` (the yellow portion on the top of the screen) will only display the items that have been selected by the user.

`GroceryItemCard` and `ItemDetails` are presentational components that have been provided for you that will render out information about an individual item formatted for a list view and for a full view, respectively. They are pre-styled, and it is your responsibility to get the data into them.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; however, if your finished product has some styling issues, don't worry too much about it.

## Core Deliverables

As a user, I should be able to:

- See images and names of all items rendered in `ItemContainer`.
- Add an individual item to my cart by clicking on it. The selected item should render in the `YourCart` component. Items may be added more than once. The item **does not** disappear from the `ItemContainer`.
- Remove an item from your cart by clicking on it. The item disappears from the `YourCart` component.
- Make a "purchase", removing all items from your cart at once. 

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- View further details on a grocery item before deciding whether or not to put it in my cart. Clicking on the item card should instead display a show view (`ItemDetails`) for that item, which should replace `ItemContainer`. ItemDetails should have two buttons: one to go back to the list view and another to add the item to your cart. Your app could look like the following:

![alt text][full_demo]

[full_demo]: ./public/full_demo.gif "Full demo"

- Sort items by their name or price. For this, create a new component, `SortBar`.
- When a single item is added to the cart more than once, show that item's count, rather than just two of the item.
- When I add an item to the cart it will be **removed** from the `ItemContainer` and added to `YourCart`.


## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-4.md).

