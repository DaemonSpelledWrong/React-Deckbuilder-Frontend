# Magic Deckbuilder Deluxe
A deck building application for the card game Magic the Gathering.
All card data has been seeded from the <a href="https://scryfall.com/docs/api">Scryfall</a> api. - `https://scryfall.com/docs/api`

<a href = "https://youtu.be/IGmXcJ4dCCE">See the most recent features video!</a>

This project is live on: https://react-deckbuilder-frontend.firebaseapp.com

Currently it is not hooked up to a backend and the card rendering will not function!

## Requirements
---
- Ruby
- Rails
- React
- Node / NPM

## Installation
---
Add the following gem lines to your Gemfile: 
```
gem 'rest-client'
gem 'bcrypt'
gem 'jwt'
gem 'simple_command'
gem 'pg'
```
and run `bundle install` from your shell.
The 'pg' gem is for the PostgreSQL database. 

For the frontend, run `npm install` to install all the packages locally.

## Usage
---
- Once the project is forked, make sure to run your migrations and seed your database. You can do this by running: 
  - `rails db:migrate`
  - `rails db:seed`
- Once you've installed the necessary dependancies and run migrations and seeds, host your backend on localhost:3000 by using the rails command: `rails s`
- To host the front end, use `npm start` in your front end.

## Contributing
---
Contributions are currently unwelcome but suggestions and criticism on code quality are! This is a personal project for me at the moment.

## License
---
All card content and logos / images belong to Wizards of the Coast.