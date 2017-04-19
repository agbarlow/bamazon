var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "JoeBendik1",
  database: "Bamazon_db"
});

// connect to the mysql server and sql database



            
var order = function() {
connection.connect(function(err) {
  if (err) throw err;
});

connection.query("SELECT * FROM products_DB", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + res[i].price);
  }
  console.log("-----------------------------------");
});
  
  inquirer.prompt({
  	type: 'input',
	name: 'itemId',
	message: 'Which Item ID would you like to purchase?',
	validate: function (value) {
            if (isNaN(value) === false) {
                return true;
                }
            }
	}).then(function(answer) {
    // based on their answer, either call the bid or the post functions
console.log("yes");

  });
};            
            
            
            
            /*
            
            
// function uses inquirer to prompt the user for what action they should take
// based on their answer, either call the bidAction or the postAuction functions
var start = function() {
inquirer.prompt([
{	
	type: 'input',
	name: 'itemName',
	message: 'Which Item ID would you like to purchase?',
	validate
}
  ]).then(function(user) 
  { switch (user.prompt) 
  {
  case 'Post':
  postAuction ()
  break;
  
  case 'Bid':
  bidAuction()
  break;
 }
 }) 
  
  
};



var postAuction = function() {
       inquirer.prompt([{
           type: "input",
           message: "Please enter the item name:\n",
           name: "itemName"
       }, {
           type: "input",
           message: "Please enter the category:\n",
           name: "itemCategory"
       }, {
           type: "input",
           message: "Please enter the starting bid:\n",
           name: "itemStartingBid"
       }]).then(function(data) {
           console.log(data.itemName);
           console.log(data.itemCategory);
           console.log(data.itemStartingBid);
           connection.query("INSERT INTO items SET ?", {
               itemName: data.itemName,
               itemCategory: data.itemCategory,
               itemStartingBid: data.itemStartingBid
           }, function(err, res) {});
           console.log("success?");
           inquirer.prompt([{
               type: "list",
               message: "Would you like to post again?",
               choices: ["YES", "NO"],
               name: "choice"
           }]).then(function(data) {
               if (data.choice === "YES") {
                   postAuction();
               } else {
                   start();
               }
           });

       });
   }
   
   
   */
   
   order ()
   