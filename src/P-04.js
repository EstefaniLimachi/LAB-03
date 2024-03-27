// Funcion para ordenar frutas
const sortFruits = (fruits) => fruits.sort();

// Funcion para obtener el elemento en el medio de una lista
const getElementInTheMiddle = (list) => list[Math.floor(list.length / 2)];

// Funcion para verificar el inicio de sesion de un usuario administrativo
const adminLogin = (user) => (user === "ADMIN" || user === "DEV") ? true : false;