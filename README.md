## React Reminder App

## This project was build using React | JSON Server deployed in Heroku

## Plese, [Click Here](https://sujanrajs-reminder-app.netlify.app/) for live demo - FrontEnd

## [Click Here](https://reminder-json-server.herokuapp.com/tasks) for API - JSON server deployed in Heroku

### Project features:

### - Add-Button opens the form to add reminder task..

### - Close-button closes the form..

### - User can view previous tasks just below the form or below header when form is close..

### - User can input reminder task Name, Date & Time manually..

### - User can mark the set-reminder check-box (checked box highlights the task box with white border, unchecked leaves it without highlight)..

### - Save task-Button saves the input task, date and time..

### - User can toggle marking the reminder by double clicking above the task title itself..

### - Leaving empty input field alerts user to fill the inputs..

### - Cross-Icon-Button deletes the reminder..

##

### Project Execution:

### - After the project is cloned..

### - To execute locally go to: root-folder/src/pages/Home.js

### - Comment the line like given below in that folder, because this link is for json server deployed in heroku

    const HerokuUrl = `https://reminder-json-server.herokuapp.com/tasks`;

### - And uncomment the line like given below in that folder, because this link is for local json server

    const LocalUrl = `http://localhost:5000/tasks`;

### - In the same folder mentioned above, after that line replace all the `HerokuUrl` by `LocalUrl`

### - Install all the dependencies using command `npm install` in the root folder..

### - Run command `npm run server` which runs json server in port: 5000..

### - API end point will be `http://localhost:5000/tasks`..

### - Run command `npm start` after json server starts on above link mentioned..

### - Frontend runs on port: 3000 such as `http://localhost:3000/`
