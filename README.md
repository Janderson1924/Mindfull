<!-- TITLE -->
<h1> Mindfull </h1>
<p>A full-stack mental health resource application</p>
<p>
Tech Stack

- React
- React Router
- Express
- Postgres
- SASS
</p>

<!-- INTRODUCTION -->

## Introduction

Mindfull is a simple, but powerful mental health resource application that allows users to find resources based on how they are feeling in the moment and to help overcome these obstacles.

Created by Justin Anderson ([**@janderson1924**](https://github.com/janderson1924)), Luke Bergmann ([**@lukebergmann**](https://github.com/lukebergmann)), and Caden Choi ([**cadenkchoi**](https://github.com/cadenkchoi)).

<!-- FEATURES -->

## Features

- List of moods, when selected show resources for each mood
- Ability to favourite/unfavourite resources
- Meditation page with 10 minute timer
- **Profile page**: View favourited resources, and journalling wall where you can post/delete notes for yourself
- **More Resources**: Has links to BetterHelp, GoodNewsNetwork, and RSS Feed from GoodNewsNetwork that links to Inspiring Articles

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

3. Run reset on Postgres database in Express and seed files

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

5. Visit `http://localhost:3000/` (change from port 3000 in url if react asks) in browser

<p>Tip for Setting up Server</p>
Set proxy for React project to `localhost:8080` in the `package.json` file, so the Express app listens to port 8080 in `server.js`.

## Screenshots

!["DESCRIPTION OF SCREENSHOT/GIF"](LINK TO PICTURE - COPY LINK ADDRESS FROM FOLDER IN GITHUB)
!["DESCRIPTION OF SCREENSHOT/GIF"](LINK TO PICTURE - COPY LINK ADDRESS FROM FOLDER IN GITHUB)
!["DESCRIPTION OF SCREENSHOT/GIF"](LINK TO PICTURE - COPY LINK ADDRESS FROM FOLDER IN GITHUB)
!["DESCRIPTION OF SCREENSHOT/GIF"](LINK TO PICTURE - COPY LINK ADDRESS FROM FOLDER IN GITHUB)

## Special Thanks

Boilerplate credit goes to @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). It uses the same React app, but replaces the Rails server with an Express server.
