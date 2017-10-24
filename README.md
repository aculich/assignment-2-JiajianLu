# Assignment 2
## Make your static website dynamic

Our assignments are going to be built around building a blog from the ground up and eventually hosting your blog in the 
cloud. For this second assignment, you are going to take the static blog that you have created and host it on a server 
that you will set up, build, and code yourself. At the end of this assignment you will have used your vagrant box to 
power a web server that is hosting your very own site!

You will be using [Flask](http://flask.pocoo.org/)

You will need to do the following:

### To run on Google Cloud Platform

Using your @berkeley.edu account go to: https://console.cloud.google.com/

Activate your free $300 in credits (note, this will require a credit card to activate, however you will NOT be charged by Google even after your free credits run out).

Open [Google Cloud Shell](https://cloud.google.com/shell/docs/) and then run through the directions below (note the instructions have been changed slightly for use in the GCS environment rather than Vagrant):

### Clone your repo and run your server

1. Clone your webarch-assign-2 repository inside your vagrant box under /vagrant
2. Run ```cd webarch-assign-2```
3. Install all of your requirements by running the command: ```pip install -r requirements.txt --user ```
4. Tell your vagrant box where the code to your flask application lives by running the command ```export FLASK_APP=webserver.py```
5. Run your application by running the command ```flask run --host=0.0.0.0 --port=8080```
6. Open using Web Preview on Port 8080 in GCS

You would see your terminal look something like this:

```
aculich@cloud-demo-143206:~/assignment-2-JiajianLu$ flask run --host=0.0.0.0 --port=8080
 * Serving Flask app "webserver"
 * Running on http://0.0.0.0:8080/ (Press CTRL+C to quit)
```

### Build a web server that serves the HTML pages you created in assignment 1
You will be wiring up your blog that you have created in assignment 1 to be hosted in your web server. You will need to 
create routes that tell the server to return the HTML of the page that the user requested. You will need to use the 
[templates feature](http://flask.pocoo.org/docs/0.12/templating/) of Flask to power these pages.

The following URLs should load the following pages:

1. http://localhost:5000/index -> home page
2. http://localhost:5000/about -> about us page
3. http://localhost:5000/contact -> contact us page
4. http://localhost:5000/blog/8-experiments-in-motivation -> 8 experiments in motivation blog post
5. http://localhost:5000/blog/a-mindful-shift-of-focus -> A Mindful Shift of Focus blog post
6. http://localhost:5000/blog/how-to-develop-an-awesome-sense-of-direction -> How to Develop an Awesome Sense of 
Direction blog post
7. http://localhost:5000/blog/training-to-be-a-good-writer -> Training to Be a Good Writer blog post
8. http://localhost:5000/blog/what-productivity-systems-wont-solve -> What Productivity Systems Won't Solve blog post

### Power your contact form to send a real email to yourself
In this assignment you are going to enable the contact form that you created in assignment 1 and have it send you an 
actual email. You will do this by having your server send an HTTP POST request to an external API powered by 
[Mailgun](http://www.mailgun.com). 

You will have to create a free account at [Mailgun](https://signup.mailgun.com/new/signup) and check the documentation 
to determine how you can send a POST request to Mailgun in order to send an email. Here's the reference for the API and 
how to use it: [Mailgun API Referefence](https://documentation.mailgun.com/api-sending.html#sending).

**Note:** this must be implemented by using the [requests](http://docs.python-requests.org/en/master/) Python module that 
is already included in this project. You are not allowed to find another module that integrates Mailgun with Flask

**Note:** your integration with Mailgun needs to be externally configruable. This means that you cannot add your username,
password, nor recipient directly into the code. It is a security risk to check in passwords directly into code. You must use environment variables in order to achieve this result. 

### Here are the requirements for the contact form:

Your contact form should send an email to your own email with the following information:
1. Name
2. Subject
4. Message
5. Your contact form should still run the same JavaScript validations that you did in assignment 1. It should not send 
6 request the server unless all fields are filled out.
7. Your contact form should send a POST request to the server (not a GET request)
8. Your contact form should display the name of the person filling out the contact form on successful submission of the 
form. For example, after someone successfully submits the contact form named Kate, the message should say "Hi Kate, your 
message has been sent".

### Ensure that your CSS, JavaScript, and images are loading correctly

When moving HTML, CSS, and JavaScript to a web server, there may be issues with ensuring that all of those resources are 
being accessed properly

1. Ensure that your web page still looks the same as it did in assignment 1 and that your JavaScript is still functional

### Add a LEARNINGS.md file at the root of your repository answering the following questions:

 1. What is the function of the following technologies in your assignment:
    1. HTML
    2. CSS
    3. JavaScript
    4. Python
    5. Flask
    6. HTTP
    7. GET and POST requests
 2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?
 3. How does Python and Flask work together in the server for this assignment?
 4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

## Extra Credit
1. Add an email field to your contact form and add that information along with your name/subject/message
2. Add the current weather for Berkeley, CA to each of the five blog posts. You will need to use AJAX to accomplish this. You have freedom where this data can be placed
 1. **NOTE: This must be done using plain JavaScript. To recieve full credit you cannot include an external library**
 2. You will need to sign up for an account at [OpenWeatherMap](https://openweathermap.org) and [get an API key](http://openweathermap.org/appid)
 3. Next you will need to look at [the documentation](http://openweathermap.org/current) to get the weather for Berkeley, CA
 4. Modify your website to contact OpenWeatherMap to get the latest weather from Berkeley. This must be done on the front end/the browser, so you must use JavaScript that is being run on your browser (think ```<script src="js/script.js"></script>```)
 5. Display it on each of the five blog posts
 
