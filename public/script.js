const result = document.querySelector('#result');
result.innerHTML = '<h2>My Span</h2>';
result.style.color = 'blue';

//get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
   console.log("Page has loaded");
   //do other javascript stuff here
}

// if a record looks like.
let record = {
    id: 1,
    name: "bob's"
    brewery_type: "fire",
    website_url:"https://bobs.com"
 } 
 
 //*note the use of backticks
 //using string interpolation
 //a row in the table would look like;
 
 let row = `<tr> 
     <td>${record.id}</td>
     <td>${record.name}</td>
     <td>${record.brewery_type}</td>
     <td>${recoard.website_url}</td>    
 </tr>`;


 
 