const TIP_PERCENTAGE = 0.1;

const billTotal = prompt("Ingrese el total de la factura:");
const billAmount = Number(billTotal);
const tipAmount = billAmount * TIP_PERCENTAGE;

console.log(`Total de la factura: $${billAmount}, Propina: $${tipAmount}`);
