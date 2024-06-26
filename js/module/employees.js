import { connection } from "../../helpers/conexion.js";


// export const getAllLastName = async()=>{
//     const [result] = await connection.query(`SELECT lastName FROM employees`);
//     return result;
// }

// export const getAllFullNameJob = async()=>{
//     const [result] = await connection.query(`SELECT CONCAT(firstName," ", lastName) as 'fullName', jobTitle FROM employees`);
//     return result;
// }

// export const getAll = async()=>{
//     const [result] = await connection.query(`SELECT lastName, firstName, extension, email, officeCode, reportsTo, jobTitle FROM employees`);
//     return result;
// }

// export const getAllJobTitle = async({cargo} = {cargo: "Sales Rep"})=>{
//     const [result] = await connection.execute(`SELECT CONCAT(firstName," ", lastName) as 'fullName' FROM employees where jobTitle = ?`, [cargo] );
//     result["count"] = result.length;
//     return result;
// }






//2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**
export const getEmployeesSpecificOffice = async({office} = {office:1}) =>{
    const[result] = await connection.execute(`select firstName, lastName from employees where officeCode = ?;`, [office]);
    return result;
}


// 7. **Lista de todos los empleados con su jefe (si tienen):**

export const getAllEmployeesWithBoss = async()=>{
    const [result]= await connection.query(`select distinct e.employeeNumber as numeroEmpleado, e.lastName as apellidoEmpleado, e.firstName as nombreEmpleado, e.reportsTo as numeroJefe, j.firstName as nombreJefe, j.lastName as apellidoJefe, j.jobTitle as puestoDelJefe from employees e inner join employees j on e.reportsTO = j.employeeNumber;`);
    return result;
}


// 2. 2. **Listar todos los empleados junto con la oficina en la que trabajan:**

export const getAllEmployeesWithOffice = async()=>{
    const[result]= await connection.query(`select e.employeeNumber, e.firstName, e.lastName, e.officeCode, o.city, o.phone, o.country from employees e inner join offices o on o.officeCode = e.officeCode;`);
    return result;
}