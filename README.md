<!-- ABOUT THE PROJECT -->

## Nutrient Tracker

A web tool that is integrated with the [USDA's FoodData Central API](https://fdc.nal.usda.gov/) allowing you to track the nutrients of your foods.

### Built With

- [React.js](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Lodash](https://lodash.com/)
- [Jest](https://jestjs.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow the steps below:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- [USDA FoodData Central API Key](https://fdc.nal.usda.gov/api-key-signup.html)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ApolloEagle/nutrient-tracker.git
   ```
2. Navigate to repo
   ```sh
   cd nutrient-tracker
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. create a `.env.local` file in root and add API Key
   ```js
   REACT_APP_API_KEY=YOUR_API_KEY;
   ```
5. Run application
   ```sh
   npm start
   ```

### Testing

- Run tests
  ```sh
  npm test
  ```
