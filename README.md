# React News List Component

This is a small React component that retrieves and displays a list of items from an API endpoint. Each item has a title and description. It supports pagination, error handling, and unit tests.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Features](#features)
  - [Pagination](#pagination)
  - [Error Handling](#error-handling)
  - [Unit Tests](#unit-tests)
- [Bonus Points](#bonus-points)
  - [Search Functionality](#search-functionality)
  - [React Router](#react-router)
  - [State Management](#state-management)
- [API](#api)

## Getting Started

### Installation

1. Clone this repository: `git clone https://github.com/your-username/react-news-list.git`
2. Navigate to the project directory: `cd react-news-list`
3. Install dependencies: `npm install`

### Usage

1. Obtain your API key from [News API](https://newsapi.org/docs).
2. Open `src/api.ts` and replace `'YOUR_API_KEY'` with your actual API key.
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000`

## Features

### Pagination

The list of items is paginated to show 10 items per page initially. Clicking the "Load More" button fetches and appends more items to the list.

### Error Handling

The component handles error cases gracefully. If the API is down or the response is malformed, appropriate error messages are displayed.

### Unit Tests

Unit tests are implemented using Jest and React Testing Library. Run tests using: `npm test`

## Bonus Points

### Search Functionality

Search functionality is added to filter the list of items by title or description. Enter your search query in the input field to filter the results.

### React Router

React Router is used to handle different routes and views. Additional routes and components can be added for extended functionality.

### State Management

The component uses Redux Toolkit for state management. Redux store is used to manage pagination, search, and error state.

## API

- Documentation: [News API](https://newsapi.org/docs)
- Base URL: `https://newsapi.org/v2`
