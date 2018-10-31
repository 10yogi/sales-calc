var interface = require('./CreateInterface.js');
var calc =require('./CalculateTax.js');
var total_cost = 0.0,total_tax = 0.0;
interface.rl.on('line', (line) => {
  line.trim();
  var item = line.split(' ');
  var product = {
    name:"",
    price:parseFloat(item[item.length-1]),tax: 0.0,
    price_with_tax: 0.0,
    imported: false,exempted_from_tax:false,
  };
  calc.calculate_tax(item,product);
  total_tax  += product.tax;
  total_cost += product.price_with_tax;
  console.log(item[0]+(product.imported?" imported":"")+" "+product.name+": "+(product.price_with_tax).toFixed(2));
}).on('close',()=>{
  console.log("Salse Taxes: "+total_tax.toFixed(2));
  console.log("Total: "+total_cost.toFixed(2));
  process.exit(0);
});
