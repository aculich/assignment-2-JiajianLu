"""
webserver.py

File that is the central location of code for your webserver.
"""
import os
from flask import Flask, render_template, request
import requests
# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/index')
def hello_index():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("Homepage.html") # Render the template located in "templates/index.html"

@app.route('/about')
def hello_about():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("AboutUs.html") # Render the template located in "templates/index.html"


@app.route('/contact', methods = ['GET'])
def show_contact():
    notification = []
    return render_template("ContactUs.html", notification = [])

@app.route('/contact', methods = ['GET','POST'])
def contact():
    notification = ""
    name = request.form.get('name')
    subject = request.form.get('subject')
    message = request.form.get('message')
    email = request.form.get('email')
    if email[-1] == "o":
    	email = email[0:-1]
    else:
    	email = ""
    if name != "" and subject != "" and message !="" and email !="":
        #print("in")
        #print(name)
        #print(subject)
        #print(message)
        data = {
            'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
            'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
            #"from": os.environ["mailgun@sandbox6bd3a032323f42febb57b17ed5711bf7.mailgun.org"],
            #"to": ["jiajian_lu@berkeley.edu", "sandbox6bd3a032323f42febb57b17ed5711bf7.mailgun.org"],
            'subject': subject,
            'text': message +" from "+name+" "+ email
        }
        auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

        # key = "key-426407552242dad8184f4eaf6a37c0f8"
        # request_url = ""
        r = requests.post(
        'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
        auth=auth,
        data=data)
        if r.status_code == requests.codes.ok:
            notification="Hi, "+name+". Your email was sent!"
        else:
            notification="Hi, "+name+". Your email was not sent. Please try again later."
        #print(notification)

    return render_template("ContactUs.html", notif=notification)

@app.route('/blog/8-experiments-in-motivation')
def hello_8():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("8-experimentsinMotivation.html") # Render the template located in "templates/index.html"

@app.route('/blog/a-mindful-shift-of-focus')
def hello_a():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("AMindfulShiftofFocus.html") # Render the template located in "templates/index.html"

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def hello_how():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("HowtoDevelopanAwesomeSenseofDirection.html") # Render the template located in "templates/index.html"

@app.route('/blog/training-to-be-a-good-writer')
def hello_training():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("TrainingtoBeaGoodWriter.html") # Render the template located in "templates/index.html"

@app.route('/blog/what-productivity-systems-wont-solve')
def hello_what():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    #return 'Hello, World!'
    return render_template("WhatProductiveSystemsWon'tSolve.html") # Render the template located in "templates/index.html"
