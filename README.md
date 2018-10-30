# SalesTaxCalculator : calculator which can generate the receipt of bill after including all taxes 

@1. input.txt : in this files input is to be placed.
Each seprate line should contain details of single product in format:
<quantity> <imported/blank> < product name > <at> <price>
eg. 1 imported chocolate at 45.66

@2. sales_tax_exempted_item.js:
this file contains a set of product which should exempted from tax;
to add a product in exempted from tax list following line should 
be appended at end of file: exports.exempted_from_tax.add('product_name')

@3.run main.js file and get output on console (on terminal : node main.js)
