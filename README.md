# client-server-template

An instant search web app that fetches NBA Player data from a backend server:
- The front-end is built with React, using Vite.
- The backend is build with nodeJS and Express.

A basic React app with a client-server interaction I might reuse.

## Getting Started

### Prerequisites

- NodeJS v16.14.2
- npm 8.19.1

### Back-end

Launch the Express API on the backend serve:
- `cd server`
- `npm install`
- `node index.js`

Test the API is running by visiting `http://localhost:8080/?q=kobe` in your browser.

### Font-end

To launch the front-end:
- Go back to the root directory
- `npm install`
- `npm run dev`

Test it's running by visiting `http://127.0.0.1:5173/` in your browser.
Search for an NBA player in the search bar.

### Data source

The data is fetched from [this Kaggle dataset](https://www.kaggle.com/justinas/nba-players-data).


