document.querySelector(".js-go").addEventListener("click", function () {
  var userInput = getUserInput();
    console.log(userInput);
    searchGiphy(userInput);
});
document.querySelector(".js-userinput").addEventListener("keyup", function (event) {
    if (event.which === 13)
    {
        var userInput = getUserInput();
        console.log(userInput);
        searchGiphy(userInput);
      }
  
});

function getUserInput() {
  var inputValue = document.querySelector(".js-userinput").value;
  return inputValue;
}

function pushToDOM(response) {
  
  // Turn response into real JavaScript object
  response = JSON.parse(response);
    
  // Drill down to the data array
  var images = response.data;
  
  // Find the container to hold the response in DOM
  var container = document.querySelector(".js-container");
    
  // Clear the old content since this function 
  // will be used on every search that we want
  // to reset the div
  container.innerHTML = "";
  
  // Loop through data array and add IMG html
  images.forEach(function (image) {
  
    // Find image src
    var src = image.images.fixed_height.url;
    
  
    // Concatenate a new IMG tag
    container.innerHTML += "<img src='" 
      + src + "' class='container-image' height=160 width=150 />";
   
    
  });
}

function searchGiphy(searchQuery) {
  
    var url="https://api.giphy.com/v1/gifs/search?api_key=RqCOq7j2tm1K4XZmwzq8MHQ3XlOIwano&q="
            + searchQuery;
      
  
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", url);
  GiphyAJAXCall.send();
  
  GiphyAJAXCall.addEventListener("load", function (data) {
    var actualData = data.target.response;
    pushToDOM(actualData);
    console.log(actualData);
      
  });
}
