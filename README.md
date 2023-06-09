# Getting Started with Create React App

The project is implementation of famous 2048 game
## Available Scripts

In the project directory, you can run:
### `npm install`
Install all the dependencies required for this project .

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Rules of playing the game
Game Board: The game is played on a 4x4 grid, which consists of 16 tiles initially filled with two tiles, each with a value of 2 or 4.

Tile Movement: You can slide the tiles on the grid in four directions - up, down, left, or right - using arrow keys or swipe gestures.

Tile Merging: When two tiles with the same number touch, they merge into one tile with the sum of their values. For example, two tiles with a value of 2 merge into one tile with a value of 4.

Goal: The objective of the game is to reach the 2048 tile by merging tiles and creating higher-valued tiles through strategic moves.

Tile Generation: After each move, a new tile with a value of either 2 or 4 appears randomly on an empty tile on the board.

Game Over: The game ends when there are no possible moves left, i.e., the grid is full, and no adjacent tiles have the same value for merging.

Scoring: The game keeps track of your score, which increases with each successful tile merge. The score is the sum of the values of merged tiles.

Strategies: To improve your chances of winning, you can use various strategies such as merging smaller tiles first, keeping the highest tile in a corner, and planning ahead to avoid blocking the grid.

Restart: If you want to start a new game, you can restart by clicking the "New Game" button or using the corresponding command.

Winning: The game is won when you successfully merge tiles to create a 2048 tile. However, the game can still continue after reaching 2048, allowing you to aim for a higher score.