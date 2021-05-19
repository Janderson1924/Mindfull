<!-- TITLE -->
<div align="center">
<img src="./public/images/mindfull_logo_rounded.png" width="250"/>
<p><b>A full-stack mental health resource application</b></p>
<p>This application's tech stack includes React, Express, PostgreSQL, CSS/SASS, and HTML</p>
</div>

<!-- INTRODUCTION -->

## Introduction

Mindfull is a simple, but powerful mental health resource application that allows users to find resources based on how they are feeling in the moment and to help overcome these obstacles.

<b>** This is a demo build, which is currently only optimized for mobile viewing **</b>

Created by Justin Anderson ([**@janderson1924**](https://github.com/janderson1924)), Luke Bergmann ([**@lukebergmann**](https://github.com/lukebergmann)), and Caden Choi ([**@cadenkchoi**](https://github.com/cadenkchoi)).

<!-- FEATURES -->

## Features

- List of moods, when selected show resources for each mood
- Ability to favourite/unfavourite resources
- Meditation page with 10 minute timer
- **Profile page**: View favourited resources, and journalling wall where you can post/delete notes for yourself
- **More Resources**: Has links to BetterHelp, GoodNewsNetwork, and RSS Feed from GoodNewsNetwork that links to Inspiring Articles

## Screenshots

#### Landing Page !["Landing Page"](https://github.com/cadenkchoi/Mindfull/blob/master/public/images/landing_page.gif?raw=true)

#### Moods and Resources Pages

!["Moods and Resources Pages"](https://github.com/cadenkchoi/Mindfull/blob/master/public/images/mood_resource.gif?raw=true)

#### Profile Page

!["Profile Page"](https://github.com/cadenkchoi/Mindfull/blob/master/public/images/profile_page.gif?raw=true)

#### Meditation Page

!["Meditation Page"](https://github.com/cadenkchoi/Mindfull/blob/master/public/images/meditating.gif?raw=true)

<!-- INSTALLATION -->

## Installation

1. Close or download the respository

```
git clone https://github.com/cadenkchoi/Mindfull.git
```

2. Navigate to the project directory and install dependencies for both React and Express

```
cd Mindfull/react-front-end
npm install
cd Mindfull/express-back-end
npm install
```

3. Run reset on PostgreSQL database in Express and seed files

```
cd Mindfull/express-back-end
psql \i migrations/1_schema.sql
\i seeds/1_seeds.sql
```

4. Open two terminal windows and launch both React and Express Servers

```
cd Mindfull/react-front-end
npm start
cd Mindfull/express-back-end
npm start
```

5. Visit `http://localhost:3000/` in browser
   (change from port 3000 in url if react asks)

<b>Tip for Setting up Server</b>
Set proxy for React project to `localhost:8080` in the `package.json` file, so the Express app listens to port 8080 in `server.js`.

## Dependencies

Front-End

- React
- React-router-dom
- Axios
- Date-fns
- Node-sass
- Rss-parser
- Font Awesome
- Material UI

Back-End

- Express
- Body-parser
- Cors
- Dotenv
- Http-proxy-middleware
- PostgreSQL
- Nodemon

## Special Thanks

Boilerplate credit goes to @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). It uses the same React app, but replaces the Rails server with an Express server.
