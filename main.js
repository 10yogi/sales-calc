var exp = require('./sales_tax_exempted_items.js');

const readline = require('readline');
const fs1 = require('fs');

const rl = readline.createInterface({
  input: fs1.createReadStream('sample.txt'),
  crlfDelay: Infinity
});

var total_cost = 0.0;
var total_tax = 0.0;
const  basic_sales_tax_rate = 10;
const  import_salse_tax_rate = 5;


rl.on('line', (line) => {
	line.trim();

	var item = line.split(' ');
	var quantity = parseInt(item[0]);
	var price = parseFloat(item[item.length-1]);

	var is_imported  = false;
	var is_exempted_from_salse_tax = false;

	var product_name = "";
	for(var i = 1;i<item.length-2;++i){
		if(item[i]=='imported'){
			is_imported = true;
		}else{
			if(exp.exempted_from_tax.has(item[i]))
				is_exempted_from_salse_tax = true;
			product_name+=" "+item[i];
		}
	}
	var tax = 0;
	var statement = quantity;
	if(is_imported){
		tax += price*import_salse_tax_rate/100;
		statement+=" imported";
	}
	if(is_exempted_from_salse_tax==false){
		tax+= price*basic_sales_tax_rate/100;
	}
	total_tax  += tax;
	total_cost += price+tax;
	statement+=product_name+": "+(price+tax).toFixed(2);
	
	console.log(statement);

}).on('close',()=>{
console.log("Salse Taxes: "+total_tax.toFixed(2));
console.log("Total: "+total_cost.toFixed(2));
process.exit(0);});
