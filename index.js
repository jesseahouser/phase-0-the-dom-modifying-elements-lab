document.getElementById('main').remove(); // Removes element with id `main`

const newHeader = document.createElement("h1"); // Creates new element `h1`
newHeader.id = "victory"; // Sets id of `h1` element tp `victory'
newHeader.textContent = "YOUR-NAME is the champion" // Sets text content of `h1`
/* ALTERNATE METHOD OF ADDING TEXT
const newHeaderText = document.createTextNode("YOUR-NAME is the champion"); // Creates text node
newHeader.appendChild(newHeaderText); // Places text node within `h1`
*/
document.body.appendChild(newHeader); // Paces `h1` within body