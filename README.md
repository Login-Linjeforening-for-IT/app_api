# App-api

### Project description
App-api is a minimalistic API created to host app specific content. The service provides the following endpoints: /questions, /neverhaveiever and /okredflagdealbreaker. More content will be added as we see fit.

### Run application
Use `npm i && npm start` to run this application. This installs all necesarry
dependencies, compiles the TypeScript to JavaScript, and starts the application
on port 8080.

### Features
- Hosts the backend necesarry for the application to run as intended
- API hosting different types of content necesarry for subfeatures of the Login app.

### Design decisions and main components
The ‘main’ component of the application is the API. This is what makes the app 
possible, and provides the actual content. The backend is a node application 
written in TypeScript. There are about 800 hard coded items provided by default.
More endpoints and content will be added as we see fit, after the API has been
integrated successfully, and is working fully as intended.

Project started 18.08.24.
