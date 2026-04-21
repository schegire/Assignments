function checkLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): string {

    // 1. Credit Score Check
    if (creditScore > 750) {
        return `${customerName} is eligible for the loan (Auto Approved)`;
    }

    if (creditScore < 650) {
        return `${customerName} is NOT eligible for the loan (Low Credit Score)`;
    }

    // 2. Income Check (for 650–750)
    if (income < 50000) {
        return `${customerName} is NOT eligible (Income less than 50000)`;
    }

    // 3. Employment Check
    if (!isEmployed) {
        return `${customerName} is NOT eligible (Unemployed)`;
    }

    // 4. Debt-to-Income Ratio Check
    if (debtToIncomeRatio < 40) {
        return `${customerName} is eligible for the loan`;
    } else {
        return `${customerName} is NOT eligible (High DTI Ratio)`;
    }
}

// Data (Input values)
let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35;


//  Calling function with data
let result: string = checkLoanEligibility(
    customerName,
    creditScore,
    income,
    isEmployed,
    debtToIncomeRatio
);

//  Output
console.log(result);
