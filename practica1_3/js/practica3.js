const billTotals = [50, 150, 20, 500, 30, 75, 10, 200];
const tips = [];

for (let i = 0; i < billTotals.length; i++) {
    let tipPercentage;
    
    if (billTotals[i] > 75) {
        tipPercentage = 0.1;
    } else if (billTotals[i] >= 30 && billTotals[i] <= 75) {
        tipPercentage = 0.2;
    } else {
        tipPercentage = 0.3;
    }
    
    const tip = billTotals[i] * tipPercentage;
    tips.push(tip);
}

for (let i = 0; i < billTotals.length; i++) {
    console.log(`Total de la factura: $${billTotals[i]}, Propina: $${tips[i]}`);
}
