# bookshop-js

A simple book store API in need of input validation/sanitization.

This is a part of the University of Wyoming's Secure Software Design Course (Spring 2023). 

## Versioning

`bookshop-js` is built with:

- node version v16.19.0
- npm version 9.6.2
- nvm version 0.39.3

## Usage

Start the api using `npm run dev`

I recommend using [`httpie`](https://httpie.io) for testing of HTTP endpoints on the terminal. Tutorials are available elsewhere online, and you're free to use whatever tools you deem appropriate for testing your code.

## Analysis of Existing Code

Customers must know their ID to update shipping info as they can't look it up as part of the update and no api call exists to look up thier ID.
Customers must know their ID to look up account balance as they can't look it up as part of the action and no api call exists to look up thier ID.
	Add customer id lookup using customer name and shipping address.
If a customer orders multiple copies of the same book the db may behave unpredictably.
	Add handling for when the Database may return more than one result. If multiples are found return data about both and if it's being marked as shipped allow the user to pick which one to modify.
API crashes if data requested is not in the database.
	Add try catch to lookups that return a data not found error instead of crashing.

## Modifications

Used Regular Expression to check for invalid characters in user input and disallow the input from running on the database.

## Statement of Help

Worked with Ryan Harding

