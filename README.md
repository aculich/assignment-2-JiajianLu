# Assignment 2
## Make your static website dynamic

Our assignments are going to be built around building a blog from the ground up and eventually hosting your blog in the cloud. For this second assignment, you are going to take the static blog that you have created and host it on a server that you will set up, build, and code yourself. At the end of this assignment you will have turned your Virtual Machine into a web server that is hosting your very own site!

You will be using [NodeJS](https://nodejs.org/en/docs/), [Express](https://expressjs.com/en/4x/api.html), and [Mustache](https://mustache.github.io/mustache.5.html) to accomplish this.

You will need to do the following:

### Install and run your web server
First you will need to install NodeJS and NPM (Node Package Manager) in order to install packages. Next you will need to clone this repository and install all of the dependencies that are reqiured for your application to run.

1. To install node please do the following in your VM's terminal
 1. ```sudo apt-get install nodejs```
 2. ```sudo apt-get install npm```
2. Clone your webarch-assign-2 repository
3. Go to terminal, cd into your new webarch-assign-2 repository and install all of your node modules by entering the following command:
 1. ```npm install```
4. You are all set! Now you can run your server by entering the following command
 1. ```nodejs app.js```
5. And go to the url http://localhost:3000 on your browser (within your VM)

### Build a web server that serves the HTML pages you created in assignment 1
You will be wiring up your blog that you have created in assignment 1 to be hosted in your web server. You will need to create routes that tell the server to return the HTML of the page that the user requested. You will need to use Mustache templates to render these pages.

The following URLs should load the following pages:

1. http://localhost:3000/index -> home page
2. http://localhost:3000/about -> about us page
3. http://localhost:3000/contact -> contact us page
4. http://localhost:3000/blog/8-experiments-in-motivation -> 8 experiments in motivation blog post
5. http://localhost:3000/blog/a-mindful-shift-of-focus -> A Mindful Shift of Focus blog post
6. http://localhost:3000/blog/how-to-develop-an-awesome-sense-of-direction -> How to Develop an Awesome Sense of Direction blog post
7. http://localhost:3000/blog/training-to-be-a-good-writer -> Training to Be a Good Writer blog post
8. http://localhost:3000/blog/what-productivity-systems-wont-solve -> What Productivity Systems Won't Solve blog post

### Power your contact form to send a real email to yourself
In this assignment you are going to enable the contact form that you created in assignment 1 and have it send you an actual email. You will do this by having your server send an HTTP POST request to an external API powered by [Mailgun](http://www.mailgun.com). 

Here's the reference for the API and how to use it: [Mailgun API Referefence](https://documentation.mailgun.com/api-sending.html#sending).

**Note: this must be implemented by using the [requests](https://www.npmjs.com/package/request) NodeJS module that is already included in this project. You are not allowed to find another module that integrates Mailgun with NodeJS**

I will be sending a script for you to run on your terminal. When you get that annoucement please run those commands in your terminal and then restart your terminal. This is to save the username and password for the API server that you will be contacting to send emails, as well as set the address where your contact form is sending emails. This is a security measure to avoid saving passwords in source control and to make it easy to change where contact emails are going to.

Here are the requirements for the contact form:

1. Your contact form should send an email to your own email with the following information:
 1. Name
 2. Subject
 3. Message

### Ensure that your CSS, JavaScript, and images are loading correctly

When moving HTML, CSS, and JavaScript to a web server, there may be issues with ensuring that all of those resources are being accessed properly

1. Ensure that your webpage still looks the same as it did in assignment 1 and that your Front End JavaScript is still functional

### Add a LEARNINGS.md file at the root of your repository answering the following questions:

 1. What is the function of the following technologies in your assignment:
    1. HTML
    2. CSS
    3. JavaScript (in the browser)
    4. NodeJS/Express
    5. JavaScript (on the server)
    6. HTTP
    7. GET and POST requests
 2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?
 3. How does NodeJS and JavaScript work together in the server for this assignment?
 4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

## Extra Credit
1. Add an email field to your contact form and add that information along with your name/subject/message
2. Add the current weather for Berkeley, CA to each of the five blog posts. You will need to use AJAX to accomplish this. You have freedom where this data can be placed
 1. **NOTE: This must be done using plain JavaScript. To recieve full credit you cannot include an external library**
 2. You will need to sign up for an account at [OpenWeatherMap](https://openweathermap.org) and [get an API key](http://openweathermap.org/appid)
 3. Next you will need to look at [the documentation](http://openweathermap.org/current) to get the weather for Berkeley, CA
 4. Modify your website to contact OpenWeatherMap to get the latest weather from Berkeley. This must be done on the front end/the browser, so you must use JavaScript that is being run on your browser (think ```<script src="js/script.js"></script>```)
 5. Display it on each of the five blog posts
 
