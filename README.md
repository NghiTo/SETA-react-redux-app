# Redux Toolkit Posts App

This is a simple React-Redux application demonstrating the use of **Redux Toolkit** with `createAsyncThunk` for handling asynchronous operations. The app fetches posts from an API and allows users to add new posts.

## Features

- Fetch and display a list of posts from an external API.
- Add new posts using a form component.
- Styled using **Tailwind CSS** for responsive and modern UI.

## Technologies Used

- React
- Redux Toolkit
- Redux Thunk (`createAsyncThunk`)
- Tailwind CSS
- Axios

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js installed on your machine
- A package manager like npm or yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/NghiTo/SETA-react-redux-app.git
   cd redux-toolkit-posts-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
4. Open the app in your browser at http://localhost:5173.

## How It Works

### Fetching Posts

1. Posts are fetched from the API `https://jsonplaceholder.typicode.com/posts` using `getPosts`, a thunk action created using `createAsyncThunk`.
2. The thunk handles three states: `pending`, `fulfilled`, and `rejected`, which are managed in the `postsSlice`.

### Adding a Post

1. A new post is added using the `createPost` thunk, which sends a POST request to the API.
2. The response is appended to the `items` array in the Redux state.

### Redux Store

The Redux store is created using `configureStore` from Redux Toolkit, and `postSlice` is included in the store.

### Styling

The UI is styled using **Tailwind CSS** for a modern, clean design.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Runs the test suite (if configured).
- `npm run build`: Builds the app for production.

## API Reference

The app interacts with the following API endpoints:

1. **Get Posts**
   - URL: `https://jsonplaceholder.typicode.com/posts`
   - Method: `GET`

2. **Create Post**
   - URL: `https://jsonplaceholder.typicode.com/posts`
   - Method: `POST`
   - Body:
     ```json
     {
       "title": "string",
       "body": "string"
     }
     ```

