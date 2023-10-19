// CommonJS, every file is a module by default
// Modules - Encapsulated Code (only share minimum)

const names = require("./4_names"); // ./ is required for same directory .. for one higher and so on
console.log(names);

const sayHello = require("./5_sayHi"); // importing the function
console.log(sayHello);

const alt = require("./6_alternativeSyntax");
console.log(alt);

require("./7_mindGrenade");

// sayHello("susan");
// sayHello(names.prince);
// sayHello(names.gupta);
// sayHello(alt.items[0]);
// sayHello(alt.items[1]);
// sayHello(alt.singlePerson.name);
