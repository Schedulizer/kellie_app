#Kellie Web Application 
  
 #Team Mates
  
 - Carlos Velasquez
 - Gagandeep Singh
 - Allie Liu
 - Ilya Sovet
 
 ---
 
 
 ### Heroku Deployment
 
 kellie-app.heroku.com
 
 ### Trello Board
 
 <a href="https://trello.com/b/zgZNVrMz/project-3">Trello Board</a>
 
 ### GitHub Link
 
 <a href="https://github.com/Schedulizer/kellie_app/">GitHub link </a>
 
 ---
 
 
 ###Technology Used
 - MongoDB & Express
 - RESTful API
 - AJAX
 - Node.js
 - HTML5 & CSS5
 - JavaScript
 - FullCalendar
 - BootStrap
 - OAuth Authentication
 - Passport
 - Nodmailer
 
 
 
 
 Kellie app is an Application built for Kellie so she is able to communicate more effectivley with GA Instructors. Producers are able to sign up and login and be able to manipulate their FullCalendar that is viewable for instructors. Producers are then able to send emails to Instructors through the App using nodemailer.
 
 The Kellie App uses MongoDB to store the database of Instructors and producers. It also uses Express to CRUD our Inustructor/Producer data. The information of users including username, password, email and role are located in `kellie-app.heroku.com/users/`
 
 The Producers and Instructors are able to login through OAuth using passport. The Instructors do not have access to manipulate the data of the FullCalendar while the Producer
