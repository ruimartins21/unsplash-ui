# Unsplash UI App - React Typescript

![Unsplash UI App](./src/assets/gif.gif)

[![Demo](https://img.shields.io/badge/Go-to_the_app-red.svg?style=flat-square)](https://inspiring-torvalds-636403.netlify.app/)

## Introduction 
Welcome! This is an example of a React application with the goal of creating an alternate version of [Unsplash]. A simple SPA will be created based on the Unsplash website and will make some API calls to a public web API of [unsplashAPI].

## Features
The main feature of this project is to show random photos from unplash website and allow user to set some photos as favorites. Client-side caching has been deployed for selected user's favourite photos.

The existing features in the project are:
- Homepage with random photos
- Favourite page
- 404 page
- Automated tests
- React Hooks
- React Redux
- Client side caching
- SCSS/SASS + BEM
- Transitions & animations

Packages & Technologies used in the repo:
- `axios`
- `node-sass`
- `react-router-dom`
- `react-transition-group`
- `react-redux`
- `redux-persist`
- `testing-library`
- `jest-dom`
- `typescript`

## Run it locally

Before clone the repository locally, you will have to create your api key to be placed in the .env file.

```sh
  # Clone this repository
  $ git clone https://github.com/ruimartins21/unsplash-ui.git

  # Go into the repository
  $ cd unsplash-ui

  # Install dependencies
  $ yarn # npm install

  # Setup the environment variables
  $ cp .env.example .env # and fill it with your own unsplash access key

  # Run the app
  $ yarn start # npm run start
```

[unsplashAPI]: <https://unsplash.com/documentation>
[Unsplash]: <https://unsplash.com>