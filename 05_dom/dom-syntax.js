// Selecting Elements
const elementById = document.getElementById("id"); // Selects element by ID
const elementsByClassName = document.getElementsByClassName("class"); // Returns HTMLCollection
const elementsByTagName = document.getElementsByTagName("tagName"); // Returns HTMLCollection
const elementsBySelector = document.querySelectorAll("selector"); // Returns NodeList
const elementBySelector = document.querySelector("selector"); // Returns first match

// Creating and Modifying Elements
const newElement = document.createElement("div"); // Creates new element
newElement.textContent = "Hello World"; // Set text content
newElement.innerHTML = "<strong>Hello World</strong>"; // Set HTML content (be cautious with XSS)

// Adding/Removing/Replacing Elements
element.appendChild(newElement); // Adds newElement as last child of element
element.insertBefore(newElement, referenceElement); // Inserts newElement before referenceElement
element.removeChild(childElement); // Removes childElement from element
element.replaceChild(newElement, oldElement); // Replaces oldElement with newElement

// Element Properties
element.id = "newId"; // Changes or sets ID
element.className = "newClass"; // Changes or sets className
element.classList.add("class"); // Adds class
element.classList.remove("class"); // Removes class
element.classList.toggle("class"); // Toggles class
element.style.color = "red"; // Changes inline style
element.style.cssText = "color: red; background-color: yellow;"; // Sets multiple styles

// Attributes
element.setAttribute('attribute', 'value'); // Sets attribute
element.getAttribute('attribute'); // Gets attribute value
element.hasAttribute('attribute'); // Checks if attribute exists
element.removeAttribute('attribute'); // Removes attribute

// Event Handling
element.addEventListener("click", function () {
  console.log("Element clicked");
});
// or
element.onclick = function () {
  console.log("Element clicked");
};

//DOM Traversal
element.parentNode; // Parent of element
element.childNodes; // List of child nodes, includes text nodes
element.children; // HTMLCollection of child elements only
element.firstChild; // First child node
element.lastChild; // Last child node
element.nextSibling; // Next node at same level
element.previousSibling; // Previous node at same level

// Node Information
element.nodeType; // Type of node (1 for Element, 3 for Text, etc.)
element.nodeName; // Name of node (e.g., 'DIV', '#text')

// Modifying Text Nodes
const textNode = document.createTextNode("Text here"); // Creates text node
element.appendChild(textNode); // Adds text node to element

// Document Information and Manipulation
document.title = "New Page Title"; // Changes document title
document.body; // Reference to <body> element
document.head; // Reference to <head> element

// Position and Dimensions
element.offsetWidth; // Width of element including padding
element.offsetHeight; // Height of element including padding
element.offsetLeft; // Left offset of element relative to offsetParent
element.offsetTop; // Top offset of element relative to offsetParent
