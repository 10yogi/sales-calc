# SalesTaxCalculator : calculator which can generate the receipt of bill after including all taxes 
Working : 
@1. input.txt : in this files input is to be placed.
Each seprate line should contain details of single product in format:
<quantity> <imported/blank> < product name > <at> <price>
eg. 1 imported chocolate at 45.66

@2.run main.js file and get output on console (on terminal : node main.js)

Modifications:
@3. sales_tax_exempted_item.js:
this module contains a set of product which should exempted from tax;
to add a product in exempted from tax list following line should 
be appended at end of file: exports.exempted_from_tax.add('product_name')

the tax rates can also be modified in this module by modifying following variables
1. imported_sales_tax_rate
2. basic_sales_tax_rate

@4. CreateInterface.js module :
this module can be use to create inteface for input files output files

@5. CalculateTax.js module :
this module contanin function calculate_tax(item,product) which accept product object
and product input details in item array and update products objects properties accordingly

