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

//ticket 1C  Use `getElementsByTagName()` to select all `<li>` elements on the page.
//   - Log the selected elements to the console.
// - **Expected Outcome**:
//   - The console should display a collection of five `<li>` elements with the content "🍎 Apple", "🍌 Banana", "🍒 Cherry", "🍇 Date", and "🍈 Fig", respectively.

console.log(document.getElementsByTagName("li"));

// ticket 1d
// Use `querySelector()` to select the first element with the class "highlight".
//   - Log the selected element to the console.
// - **Expected Outcome**:
//   - The console should display a single `<p>` element with the content 
// "This is another paragraph with the class 'content' and 'highlight'."

console.log(document.querySelector(".highlight"));

// ticket 1e   Use `querySelectorAll()` to select all elements with the class "highlight".
// - Log the selected elements to the console.
// - **Expected Outcome**:
// - The console should display a collection of three elements: a `<p>` element 
// with the content "This is another paragraph with the class 'content' and 'highlight'" 
// and two `<li>` elements with the content "🍒 Cherry" and "🍈 Fig".

console.log(document.querySelectorAll(".highlight"));


// Ticket 2a  Select the first `<li>` element inside the `<ul>` 
// with the id of "itemList".
// - Use the `parentNode` property to access its parent.
// - Log the parent element to the console.
// - **Expected Outcome**:
// - The console should display the entire `<ul>` element with the 
// `id` of "itemList" and all of its `<li>` children.

console.log(document.querySelector("#itemList > li").parentNode);