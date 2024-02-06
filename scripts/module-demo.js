// main.js

// Importing add and multiply functions from mathOperations module
import { add, multiply } from './math.js';

// Using the imported functions
console.log(add(5, 3)); // Output: 8
console.log(multiply(2, 4)); // Output: 8


//we need to load the HTML and JS from same source or else we will get a CORS error when using module type with HTML
//if i dont use Live server, ill get this error.
//we can create a server and bundle them together. Live server automatically does this