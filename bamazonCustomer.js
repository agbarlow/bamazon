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


            
var order = function() {
connection.connect(function(err) {
  if (err) throw err;
});


connection.query("SELECT * FROM products_DB", function(err, res) {
	console.log("-----------------------------------");
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + "   $" + res[i].price);
  }
   console.log("-----------------------------------");

 
  inquirer.prompt([
  {
  	type: 'input',
	name: 'itemId',
	message: 'Which Item ID would you like to purchase? \n',
	validate: function (data) {
            if ((isNaN(data) === false) && (data <= res.length))  {
              return true;
                }
            }
    },
   {
     type: 'input',
     name: 'amount',
     message: 'How many of would you like to buy? \n',
     validate: function(data) {
     		if (isNaN(data) === false) {
                    return true;
                }
     
     }
    }		
    
    ]).then(function(data) {
    // check to see if we have the quanity
	
	if (res[data.itemId-1].stock_quantity < data.amount) {
	console.log("I'm sorry, we don't have that amount.");
	process.exit ();
	} else {
	var grandTotal = data.amount * res[data.itemId-1].price;
	var newQuantity = res[data.itemId-1].stock_quantity - data.amount
	//console.log(newQuantity);
	console.log("Total Cost: $" + grandTotal);
	
	connection.query("UPDATE products_DB SET ? WHERE ?", [{
            stock_quantity: newQuantity,   
           },
           {
           item_id: data.itemId,
           }], function(err, res) {});
	process.exit ();
	}



  });
})  
};            
            
            
            
order ()
   