# Casa Antika

My home Museum

## Database

```
# install mongodb
brew tap mongodb/brew
brew update
brew install mongodb-community@8.0
brew --prefix # show the install path

# start (usually one time)
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
Open http://localhost:5000/antikas in browser, to see all items.

## Frontend

```
cd frontend
yarn
yarn dev
```

## Test

To test outside of local network, using ngrok:

```
cd backend
yarn build && yarn start

ngrok http 8080

cd frontend
VITE_BACKEND_URL="https://ngrok_public_url_for_8080" yarn dev
```
Open "https://ngrok_public_url_for_8080" in the browser of any device :)
