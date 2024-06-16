// import { 
//     getAllLastNameASC, 
//     getAllLastNameDESC
// } from "./js/module/customers.js";

// import { getAll, 
//     getAllLastName, 
//     getAllFullNameJob, 
//     getAllJobTitle 
// } from "./js/module/employees.js";


// console.log(await getAllLastNameDESC());


import { getAllProductsStock, getAllProductsAmountStock } from "./js/module/product.js";
import { getEmployeesSpecificOffice, getAllEmployeesWithBoss } from "./js/module/employees.js";
import { getSpecificCustomer, getAllCustomerSpecificCity } from "./js/module/customers.js";
import { getAllPaymentsSpecificCustomer } from "./js/module/payments.js";
import { getAllOrdersShipped } from "./js/module/orders.js";
import { getAllOfficesSpecificCountry } from "./js/module/offices.js";




console.log(await getAllProductsStock());  //Consulta 1
console.log(await getEmployeesSpecificOffice({office:1}));  //Consulta 2
console.log(await getSpecificCustomer({customerNumber: 496}))  //Consulta 3
console.log(await getAllPaymentsSpecificCustomer({payment: 496}));  //Consulta 4
console.log(await getAllOrdersShipped()); //Consulta 5
console.log(await getAllProductsAmountStock());  //Consulta 6
console.log(await getAllEmployeesWithBoss());  //Consulta 7
console.log(await getAllOfficesSpecificCountry());  //Consulta 8
console.log(await getAllCustomerSpecificCity({city: 'Madrid'}));  //Consulta 9
