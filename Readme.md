# Giphy_Engine
A GIF search engine which generates GIF's based on the user input keyword.
Basic workflow of the website:-

Step 1: Getting the input from user and processing the request (done using DOM manipulation and EventListeners).

Step 2: Using the Giphy Search Point API URL, the requested keyword is sent to the GIPHY Server which sends back the GIFS related to this keyword in the form of an array having various lables.

Step 3: Without refreshing the page, the data given by the Giphy API URL can be retrieved by using an AJAX request to load the data.

Step 4: Finally a function processes the response sent by the Giphy Server and converts it into JSON object, url of the images are accessed from this object and displayed on the same page inside a container. 

# Screenshots of website :- 

![Alt text](/Gargi's_Giphy/assets/image1.png?raw=true "Giphy_Engine")

![Alt text](/Gargi's_Giphy/assets/image2.png?raw=true "Giphy_Engine")


Technologies used :- HTML, CSS, JavaScript.

# Future Scope :- 

1.Make a separate page for trending GIFS.

2.Make a separate page for generating random GIFS.
