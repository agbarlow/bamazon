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


var viewProducts = function () {
connection.query("SELECT * FROM products_DB", function(err, res) {
	console.log("-----------------------------------");
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + "   $" + res[i].price + "      quantity: " + res[i].stock_quantity);
  }
   console.log("-----------------------------------");
process.exit ();
}
)}






var viewLow = function () {
connection.query("SELECT * FROM products_DB", function(err, res) {
	console.log("-----------------------------------");
  for (var i = 0; i < res.length; i++) {
  	if (res[i].stock_quantity <= 5) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
  }
  }
   console.log("-----------------------------------");
process.exit ();
}
)}



var addInventory = function () {
connection.query("SELECT * FROM products_DB", function(err, res) {
	console.log("-----------------------------------");
	 console.log("Id #  - Product Name -  Current Inventory");
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + "          " + res[i].stock_quantity);
  }
   console.log("-----------------------------------");
  




  inquirer.prompt([
  {
  	type: 'input',
	name: 'itemId',
	message: 'Which Item ID would you like to add Inventory? \n',
	validate: function (data) {
            if ((isNaN(data) === false) && (data <= res.length))  {
              return true;
                }
            }
    },
   {
     type: 'input',
     name: 'amount',
     message: 'How many would you like to increase? \n',
     validate: function(data) {
     		if (isNaN(data) === false) {
                    return true;
                }
     
     }
    }		
    
    ]).then(function(data) {
    
	
	var newQuantity = parseInt(res[data.itemId-1].stock_quantity) + parseInt(data.amount);
	//console.log(newQuantity);
	console.log("the New Quantity is: " + newQuantity);
	
	connection.query("UPDATE products_DB SET ? WHERE ?", [{
            stock_quantity: newQuantity,   
           },
           {
           item_id: data.itemId,
           }], function(err, res) {});
	process.exit ();
	})
	})
	}
	


var addNewProd = function () {

  inquirer.prompt([{
    name: "prodName",
    type: "input",
    message: "What is the Product Name?"
  }, {
    name: "deptName",
    type: "input",
    message: "What department does this go in?"
  }, {
    name: "price",
    type: "input",
    message: "What is the price?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
    },{
    name: "quantity",
    type: "input",
    message: "How many to put in inventory?",
    validate:function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
	}
	}    
  ]).then(function(data) {
    // when finished prompting, insert a new item into the db with that info
    connection.query("INSERT INTO products_DB SET ?", {
      product_name: data.prodName,
      dept_name: data.deptName,
      price: data.price,
      stock_quantity: data.quantity
    }, function(err) {
      if (err) throw err;
      console.log("Item Added!");
      process.exit ();
      
    });
  });
  
};







var theMan = function() {
inquirer.prompt({
type: 'list',
name: 'bossman',
message: 'Choose the action below:',
choices: ['View Products for Sale','View Low Inventory','Add to Inventory','Add New Products'],

}).then(function(response) {
{ switch (response.bossman) 
  {
  case 'View Products for Sale':
  //console.log('View Stuff');  
  viewProducts();
  break;
  
  case 'View Low Inventory':
  //console.log("view stuff");
  viewLow ();  
  break;
 
  case 'Add to Inventory':
  //console.log('add mo stuff');
  addInventory ();
  break;
  
  case 'Add New Products':
  //console.log('add new stuff');
  addNewProd();
  break;
   
}
}
})
}

theMan ()