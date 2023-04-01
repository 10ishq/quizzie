# Quizzie

This project is a simple quiz app built with React. It utilizes the Open Trivia API to generate random questions based on a selected category.

Demo: [Play Quizzie](http://quizziegame.web.app/)

* Select category and play!


![ezgif-4-36776d9c22](https://user-images.githubusercontent.com/30299564/229290653-0170b365-d070-4c18-9db9-e3ea3b63e029.gif)

* Celebrate with Confetti!


![ezgif-4-0e85362090](https://user-images.githubusercontent.com/30299564/229290658-7493ab1e-38d7-42d7-8d79-8f5074513495.gif)


## Table of Contents:
* Installation
* Usage
* Technologies Used
* Contributing
* Lisence

## Installation
To run this project, you will need to have Node.js installed on your machine.

1. Clone this repository to your local machine using the command below.

`git clone https://github.com/10ishq/quizzie.git`

2. Navigate to the project directory.

`cd quizzie`

3. Install the required dependencies with the following command.

`npm install`

4. Install Tailwind 

`npm install -D tailwindcss`

`npx tailwindcss init`

* Configure your template paths
Add the paths to all of your template files in your `tailwind.config.js` file

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Start the development server.
`npm start`

6. Open http://localhost:3000 to view the app in your browser.


## Usage

### Selecting a Category

Upon loading the app, the user will be prompted to select a category for the quiz. Clicking on a category will take the user to the first question in the quiz.

## Answering Questions

The quiz consists of 10 multiple choice questions. The user can select an answer by clicking on one of the provided options. Once an answer has been selected, the user can move on to the next question by clicking the "Next" button.

## Viewing Results

After answering all 10 questions, the user will be taken to a results page that displays their score out of 10. The user can then click the "Reset" button to restart the quiz.

## Technologies Used

* React
* TypeScript
* React Router
* React Context API
* Open Trivia API

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow the steps below.

* Fork the project.
* Create a new branch.
* Make your changes and commit them.
* Push your changes to your fork.
* Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
