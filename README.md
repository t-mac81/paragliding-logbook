# Paragliding Logbook <p align="left"><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://ionicframework.com" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer"> <img src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" width="40" height="40"/> </a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/> </a> </p>

This is an app for a paragliding school to store student information and track their progress. Students can enter their profile information, add gliders they fly and then log their flights. New users/students must complete and submit their profile prior to accessing the menu structure and app functionality. The main landing page has a react twitter plugin to make it easy for instructors to post meeting place and time for the next lessons.

Instructors can view students profiles, flights and add comments about students only viewable by other instructors. Comments are visible on the student profile page and can be deleted by the instructor.

Administrators can grant/revoke admin and/or instructor privileges to users. They can also activate/de-activate users. This controls which users are visible on the current student roster in the instructors area.

## What I learned from this project

- Using AWS amplify to build and manage a serverless app
- Using AWS appsync to test and build graphQL queries and mutations to/from dynamoDB
- Using AWS cognito to create and manage user pools
- How to create a cross platform mobile app with the ionic react framework
- Usage and benefits of react useState and useEffect hooks
- The benefits of using a react as a framework compared to vanilla JS
- how to create forms and validate entries with Formik
- Using Redux to manage global state
- Usage of typescript with react
- Using git branches to organize feature additions
- How to use capacitor and android studio to create an android app
- How to use eslint to create consistent code

## How to bootstrap the project

Since the project backend resides on AWS you must have user privileges in the AWS account tied to the amplify project.

- Create an access key in AWS IAM
- Clone the repository
- run `npm install`
- run `amplify pull` and use the access key created in AWS IAM
- run `amplify codegen`

## Screenshots

<p align="middle">
  <img src="./screenshots/student_menu.png" width="35%" />
  <img src="./screenshots/menu_structure.png" width="35%" /> </br>
  Student menu vs user with instructor+admin privileges 
</p>
<br/>

<p align="middle">
  <img src="./screenshots/student_roster.png" width="35%" />
  <img src="./screenshots/admins_area.png" width="35%" /> </br>
  Instructor and admins areas
</p>
<br/>

<p align="middle">
  <img src="./screenshots/add_glider.png" width="35%" />
  <img src="./screenshots/gliders_list.png" width="35%" /> </br>
  Adding a glider
</p>
<br/>

<p align="middle">
  <img src="./screenshots/add_flight.png" width="35%" />
  <img src="./screenshots/flight_list.png" width="35%" /> </br>
  Adding a flight log
</p>
<br/>

<p align="middle">
  <img src="./screenshots/profile_student.png" width="35%" />
  <img src="./screenshots/profile-instructor_view.png" width="35%" /> </br>
  Viewing a profile as a student vs the same profile as an instructor
</p>
<br/>

<p align="middle">
  <img src="./screenshots/landing_page.png" width="35%" /> </br>
  Landing page with twitter plugin
</p><br/>

## Android Build

All of the dev dependencies are in place to build an android version of the app. Android Studio installation is required. To build the android app:

- run `npm run build` to create the production build
- run `npx cap copy android` to copy the production build into the android folders
- run `npx cap open android` to open the project in android studio

## Links

[Logbook app live on AWS](https://logbook.dcbqz0jfj4xyo.amplifyapp.com)

[Northwest Paragliding](https://www.nwparagliding.school/)

<!-- ## Credits

## License -->
