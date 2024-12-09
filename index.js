/*
Use getElementById() to select the element with the id of "title".
Log the selected element to the console.

Expected Outcome:

The console should display the <h1> element with the content "Intro to the DOM".
*/

console.log("linked");
console.log(document.getElementById("title"));

/*
Use getElementsByClassName() to select elements with the class of "content".
Log the selected elements to the console.

Expected Outcome:

The console should display a collection of two <p> elements. The first with the content "This is a paragraph with the class 'content'." and the second with "This is another paragraph with the class 'content' and 'highlight'."
*/

console.log(document.getElementsByClassName("content"));
