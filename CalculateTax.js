var exp = require('./sales_tax_exempted_items.js');

exports.calculate_tax = function(item,product){
  for(var i = 1;i<item.length-2;++i){
    if(item[i]=='imported')
      product.imported = true;
    else{
      if(exp.exempted_from_tax.has(item[i]))
        product.exempted_from_tax = true;
      product.name+=" "+item[i];
    }
  }
  if(product.imported)
    product.tax += product.price*exp.import_salse_tax_rate/100;
  if(product.exempted_from_tax==false)
    product.tax += product.price*exp.basic_sales_tax_rate/100;
  product.price_with_tax = product.price+product.tax;
}
