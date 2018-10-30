# SalesTaxCalculator
calculator which can generate the receipt of bill after including all taxes 

@1. input.txt : in this files input is to be placed each line should contain deatail of single item
in format:
1 imported chocolates at 233.44
<quantity> <imported/blank> < product name > <at> <price>

@2. sales_tax_exempted_item.js:
this file contains a set exempted_from_tax to exempted an product name from tax  should be added to set
using=> exempted_from_tax.add('product_name')

@3.run main.js file and get output on console (using=> node main.js)
