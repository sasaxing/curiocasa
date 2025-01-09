# Curio Casa

My home Museum

## Database
```
# install mongodb
brew tap mongodb/brew
brew update
brew install mongodb-community@8.0
brew --prefix # show the install path
brew services start mongodb-community@8.0
brew services list
mongosh
```

default database service url: mongodb://127.0.0.1:27017

## Backend

```
cd backend
yarn
yarn build
yarn start
```
Open http://localhost:5000/api/examples in browser

## Frontend
cd frontend
npm install
npm start

## Test

localhost:3000