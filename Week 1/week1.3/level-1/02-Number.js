function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
//parseInt => it is a global function which basically means i can simply call it in javascript anywhere 
//it will parse from a string into an integer
//it will convert a string into an integer
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
//it will convert a string into a float number 
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
