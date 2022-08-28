# Stacked
This Repo was created during my time as a student at Code Chrysalis.
Thank you for let me have a chance to create full-scratch back-end app!
It was so struggleful but exciting moment for me.

## about this app
This app is named "__Stacked__", that can manage your stacked games, books, etc.
 (We call them "積ん読" or "積みゲー" in Japanese)

## requirements
Please install these applications beforehand.
[node.js](https://nodejs.org/)
[mongoDB](https://www.mongodb.com/ja-jp)
and make sure mongoDB servise is started.

### Database settings
You don't have to create database for the local use.
if you have MongoDB Atlas database, you can use with .env file.

## how to install this app
1. clone this repository
    ```zsh
    $ git clone git@github.com:tamaroh/stacked.git
    ```
1. Go into the repository
    ```zsh
    $ cd stacked
    ```
1. Install dependencies
    ```zsh
    $ npm i
    ```
2. set .env file to the root directory if you have MongoDB Atlas database:
    ```zsh
    DB_PASS="qwertyuiop"
    DB_NAME="stacked"
    DB_CODE="mongodb......"
    EXPRESS_PORT=4000
    ```
    (DB_CODE is the uri of the database, you can copy from "connect to mycluster -> connect your application")
    If local mongoDB is installed, this url is used:
    ```js
    `mongodb://127.0.0.1/${process.env.DB_NAME}`
    ```
    
3. Run the server and the front app.
    ```bash
    $ npm run start
    $ npm run react-start
    ```
    
### end points
You can use these end points with some HTTP client such as [Thunder Client](https://github.com/rangav/thunder-client-support).
| method | end point | description |
|------- | --------- | ----------- |
|GET|/api|get all the items data|
|POST|/api/item|add an item|
|DELETE|/api/item/{id}|delete an item by id|

## features planned (in progress)
- [ ] edit item data
- [ ] add category data
- [ ] refactor using TypeScript
- [ ] account management

