const costumer = {
    name: "Cristofer Cuevas Pérez",
    salary: 35000,
    paymentFrecuency: "Mensual",
    startDate: new Date("2022/05/01"),
    finalDate: new Date("2022/10/01"),
    foreWarned: true,
    unemployment: true,
    vacation: true,
    christmas: true,
};
const Day = 1000 * 60 * 60 * 24;
const timeWorkingInMiliSeconds = costumer.finalDate.getTime() - costumer.startDate.getTime();
const timeWorkingInDays = timeWorkingInMiliSeconds / Day;
const timeWorkingInMonths = Math.floor(timeWorkingInDays / 30.47);
// console.log(timeWorkingInMiliSeconds);
// console.log(timeWorkingInDays);
console.log(timeWorkingInMonths);
const calculateBenefits = () => {
    const dailySalary = Number((costumer.salary / 23.83).toFixed(2));
    let foreWarnedPay = 0;
    let unemploymentPay = 0;
    let vacationPay = 0;
    let christmasPay = 0;
    let benefits = 0;
    if (!costumer.foreWarned) {
        if (timeWorkingInMonths >= 3 && timeWorkingInMonths <= 6) {
            foreWarnedPay = dailySalary * 7;
        }
        else if (timeWorkingInMonths >= 6 && timeWorkingInMonths <= 12) {
            foreWarnedPay = dailySalary * 14;
        }
        else if (timeWorkingInMonths > 12) {
            foreWarnedPay = dailySalary * 28;
        }
        benefits = benefits + foreWarnedPay;
        console.log(`foreWarnedPay ${foreWarnedPay}`);
    }
    if (costumer.unemployment) {
        if (timeWorkingInMonths >= 3 && timeWorkingInMonths <= 6) {
            unemploymentPay = dailySalary * 6;
        }
        else if (timeWorkingInMonths >= 6 && timeWorkingInMonths <= 12) {
            unemploymentPay = dailySalary * 13;
        }
        else if (timeWorkingInMonths >= 60) {
            unemploymentPay = dailySalary * 23;
        }
        benefits = benefits + unemploymentPay;
        console.log(`unemployment ${unemploymentPay}`);
    }
    if (!costumer.vacation) {
        if (timeWorkingInMonths >= 12 && timeWorkingInMonths <= 60) {
            vacationPay = dailySalary * 14;
        }
        else if (timeWorkingInMonths >= 60) {
            vacationPay = dailySalary * 18;
        }
        benefits = benefits + vacationPay;
        console.log(`vacation ${vacationPay}`);
    }
    if (costumer.christmas) {
        if (timeWorkingInMonths >= 12) {
            christmasPay = (12 * costumer.salary) / 12;
        }
        else {
            christmasPay = (timeWorkingInMonths * costumer.salary) / 12;
        }
        benefits = benefits + christmasPay;
        console.log(`christmas ${christmasPay}`);
    }
    const decimals = benefits.toString().split(".")[1]?.slice(0, 2) || 0;
    return Math.floor(benefits).toString() + "." + decimals;
};
console.log(calculateBenefits());
