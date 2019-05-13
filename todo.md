# Before you read
* Understand the difference between a _field_ and a _planting_, you can find the difference by reading through the [documentation](https://developer.awhere.com/api/reference/fields-plantings)
* Understand how to get an Oauth Token to make API calls
* Make an API call via [Postman](https://www.getpostman.com/downloads/) to retrieve __all__ fields a farmer currently has. You can do this by following the instructions in the [Field & Plantings API](https://developer.awhere.com/api/reference/fields/get-fields)
* I am just going to use the pronoun "he, his" so excuse me for not being PC


## Where we are so far
* A farmer is able to view all his fields via `index.html`
* Via `index.html`, he is then able to add a field, which will take him to `addField.html`
* Via `addField.html` upon filling out all the information required, he will see his new field on the homescreen (`index.html`)
* If he selects any of his fields, he will be taken to `field.html?fieldId=<field-that-he-selected>`
* After arriving at `field.html`, he will see the planting associated with that field, and weather that pertains to that field. He is currently able to add a crop to the field, via the add crop button. This will take him to `addCrop.html?fieldId=<field-that-he-is-currently-viewing>`

## What needs to be done
* Styling, all over
* __Christian:__ 
   `agronomic.html?fieldId=<field=the-he-is-currently-viewing` is visited from a button in `field.html`
   Use Postman to make a GET request to view _Agronomic Norms_ or _Agronomic Values and Accumulations for Current Year_, your decision, I do not know what the difference is. [Documentation](https://developer.awhere.com/api/reference/agronomics)
   Once you receive a valid request, (it'll be obvious), copy the request into a local variable (which is what I have been doing in `config.js`) so you can practice parsing the request object. Look at the commented out js code in `index.html`
   After you can successfully parse the request, throw the code into the ajax request at the `success`, line 22 in `agronomic.html`
   Again, look at the code in `index.html` for creating an element and appending it to the `<div id="agro-data>` tag
* __Sadeem__:
    Populate `milestone3.md` with the required embedded imgs, __do not just link the imgs, they must be embedded__
* __Brandon__:
   Work on styling, on your own branch please, just get as much done as possible tonight
