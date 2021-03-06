# Cadmium

## Description

This application presents the user with listings by date of art events happening in Richmond, VA. The user will be able to create their own event postings, but they will be required to login or create an account before doing so. In future developments of Cadmium, they will be able to add to their own personal list and either print, email, or plot on a map. 


## Table of Contents

1. [Technologies Used](#Technologies-Used)
2. [User Story](#User-Story)
3. [Acceptance Criteria](#Acceptance-Criteria)
4. [Application Requirements](#Application-Requirements)
5. [Mock Up](#Mock-Up)
6. [Usage](#Usage)
7. [Contact](#Contact)
8. [License](#License)

## Technologies Used
```
1. JavaScript
2. Express.js
3. Node.js
4. MySQL2 package
5. Sequelize package
6. Express.handlebars package
7. Dotenv package
8. Bycrypt package
9. Express-session package
10. Connect-session-sequelize package
11. Handlebars
12. GET & POST API routes to add/retrieve data
13. MVC structure
14. Sweetalerts (new technology)
```

## User Story
```md
AS AN art enthusiast in Richmond, Va 
I WANT to find upcoming art events 
SO THAT I can plan out when/where they’re happening.
```

## Acceptance Criteria
```md
GIVEN a CMS-style art events site:
WHEN I visit the site for the first time,
THEN I am presented with the landing page, which presents me with the options to login or create an account.
WHEN I choose to create an account,
THEN I am prompted to create a username and password and enter an email address.
WHEN I click on the login button,
THEN my user credentials are saved and I am logged into the site.
WHEN I revisit the site at a later time and choose to sign in,
THEN I am prompted to enter my username and password.
WHEN I am signed in to the site,
THEN I see navigation links for the homepage, the add event page, and the logout button.
WHEN I click on the homepage option in the navigation,
THEN I am taken to the homepage and presented with existing art events that include the event title, date, time, venue name, venue address, brief description, potentially an image related to the specific event, and potentially a link to the event.
WHEN I click on the create an event option in the navigation,
THEN I am taken to the add event page and presented with the option to add a new event.
WHEN I click on the button to add a new art event,
THEN I am prompted to enter the event title, date, time, venue name, venue address, brief description,  an image link related to the specific event (if I have one), and a link to the event (if I have one).
WHEN I click on the button to create a new event,
THEN the event title, date, time, venue name, venue address, brief description, and respective links are saved, and I am taken back to the homepage with my new event added at the bottom of the list.
WHEN I click on the logout option in the navigation,
THEN I am signed out of the site.
WHEN I am idle on the site for more than a set time,
THEN I am prompted to log in again before I can view events.
```

## Application Requirements
```md
* Must use Node.js and Express.js to create a RESTful API
* Must use Handlebars.js as the template engine
* Must use MySQL and the Sequelize ORM for the database
* Must have both GET and POST routes for retrieving and adding new data
* Must use at least one new library, package, or technology not studied in class
* Must have a folder structure that meets the MVC paradigm
* Must include authentication (express-session and cookies)
* Must protect API keys and sensitive information with environment variables
* Must be deployed using Heroku (with data)
* Must have a polished UI Must be responsive
* Must be interactive (i.e., accept and respond to user input)
* Must meet good-quality coding standards (file structure, best practices, etc.)
* Must have a professional README (unique name, description, link to the deployed app)
```

## Mock-Up

The following photos provide a mock-up of the application: 
1. Landing Page
![Landing page prompts user to login or signup](./public/images/landing-page.png)
2. Login Page
![Login page prompts return users to enter their email and password associated with the account ](./public/images/login-page.png)
3. Signup Page
![Signup page prompts user to login or signup](./public/images/signup-page.png)
4. Homepage
![Homepage shows navigation bar and all events on database](./public/images/homepage-1.png)
![Homepage shows all events on database](./public/images/homepage-2.png)
5. Add event page
![Add event page prompts user to add event title, date, time, location name, location address, and gives the option to add an image link and an event link](./public/images/add-event-page.png)

## Github link

The following link leads to the GitHub repository for this app:
[GitHub Link](https://github.com/johnsoncm/cadmium)


## Heroku Link

The following link leads to the deployed application on Heroku:

[Heroku Link](https://ancient-lowlands-14789.herokuapp.com/login)


## Usage
To run the app locally, follow these steps:
1. Install the necessary dependencies. Navigate to the repository's root directory and run the following: 
```
npm install
```
2. Create a .env file in the root directory. It should contain the following information:
```
DB_NAME=your database name
DB_USER=your username (often 'root')
DB_PASSWORD=your password
```
3. Create your own database by running the following query in MySQL Workbench:
```
DROP DATABASE IF EXISTS cadmium;
CREATE DATABASE cadmium;
```
4. To seed the database, enter the following:
```
node seeds/node
```
5. To start the server, enter the following:
```
npm start
```
## Contact
If you have any questions about the repo, contact the following contributors:
* [Casey Johnson](https://github.com/johnsoncm)
* [Seth Vance](https://github.com/sethvance26)
* [Erick McNeil](https://github.com/ErickMcNeil)
* [Catherine Smith](https://github.com/crsmith01)
## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Copyright 2021 Cadmium
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
