# 4square
COGS 121 Project


### Farm2Fresh
--

### Team Members & Contributions
---

#### Richard Pena
* Wrote the structure of the application, including functionality and API calls. I wrote the NodeJS + Express server that would handle all internal and external AJAX requests. Any call written to the aWhere API that we used was written by me. I generated the template to be used with Chart.js that Christian took advantage of. 
* Additionally, I created all forms that were used to interact with the API. I demonstrated to my team how to use POSTMAN with our API so they could develop locally, and allowed user selected data to be passed around the app via query string or in the body of every request.
	

#### Sadeem Khan

* Was responsible for creating each of the md files for the milestones. Contributed to brainstorming 
* Created functionality for parts of the each page including the navbar and team logo
	
#### Christian Lay-Geng

* Led brainstorming session, emailed farmers for needfinding
* Understood agronomics and formatted the charts on field.html

#### Brandon Lien

* Did most of the styling of the app. Selected and formatted the backgrounds we use as well as kept everything centered. Chose images to use in
* the early stages of the app and made sure there were no watermarks.


### List of Source Code Files
---

list of all source code files in your GitHub project repository that your team members wrote, along with a brief description of what functionality is implemented in each file. This should include all HTML, CSS, JavaScript, and other relevant code files that you wrote.

Each source code file has a brief paragraph written in comments at the top of the file describing what functionality is implemented in that file. You should also write brief comments to describe non-trivial functionality elsewhere throughout your source code files so that your TA can get a high-level sense of what each part of your code does. (You don't need to comment every function or block of code in great detail; general high-level comments are fine.)

* addCrop.html 
    The purpose of this page is to allow the user to add a crop to their field. The field is automatically populated and read-only 
    because thisd page is only visitable from field.html. Upon submitting the form, the Express server will make an API POST request to the 
    aWhere API so the information can be added to the app.
* addField.html 
    The purpose of this page is to allow the user to add a field eto the aWhere API. 
    This page is accessible from any part of the app because a field is the root of all information. 
    The form can either generate coordinates from your current location or a provided address, additionally,
    all fields are required. On form submit, the server makes a POST request to the API due to the security
    browsers impose amongst Cross Origin Requests
* field.html
    The purpose of this page is to allow the user to see pertinent information regarding the field a user has.
    If a crop does not exist on the field, a navigation item titled "Add a Crop" will appear in order to 
    give the user the ability to add the crop. 2 graphs are generated once a user has a crop associated with his or her
    field, revealing information regarding the rain forecast for the next 7 days and whether the farmer shoudld consider
    watering his or her crops for a particular day. 
    
* index.html
    The purpose of this page is to display all the fields a user has with our app. If no fields are displayed, he or she may choose to "Add a Field"
    If a field is no longer needed by the user, he or she has the decision to delete the field by selecting the delete button. We have a small paragraph describing the 
    functionality of our app. 
    
* server.js 
Main driver of the application, server.js provides the backend server that serves requests to various URIs. We elected to omit the file extension for our files to be more in line with industry practice. The server will serve POST request on various URIs because browsers have some limitations due to Cross-Origin Requests



### Link to Single-slide Presentation
---

https://docs.google.com/presentation/d/1if3NyegbzW7-P_4PsNwX8lw-0_O_n9rXdrs2ZeCIrY0/edit#slide=id.p


### Link to Demo Video
---

https://www.youtube.com/watch?v=ZPJOUBXX5zE&feature=youtu.be
