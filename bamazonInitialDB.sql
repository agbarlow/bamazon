CREATE database Bamazon_db;

use Bamazon_db;

create table products_db(
item_id integer(5) auto_increment NOT NULL,
product_name varchar(25),
dept_name varchar(25),
price numeric(6,2),
stock_quantity integer(5),
primary key (item_id)
);


insert into products_db (product_name, dept_name, price, stock_quantity)
value ("OC Home Jersey", "Apparel", 120.00, 25);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("OC Away Jersey", "Apparel", 115.00, 15);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Team Tshirt", "Apparel", 20.00, 30);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Lion Tshirt", "Apparel", 25.00, 45);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("OC Sweatshirt", "Apparel", 45.75, 11);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Lion Adjustable", "Hat", 20.00, 18);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("OC Flexfit", "Hat", 17.50, 5);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("OC Snapback", "Hat", 120.00, 25);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Lion Bucket", "Hat", 10.00, 15);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Kids Tshirt", "Kids", 12.50, 8);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Kids Jersey", "Kids", 65.00, 10);

insert into products_db (product_name, dept_name, price, stock_quantity)
value ("Kids Hat", "Kids", 10.00, 12);