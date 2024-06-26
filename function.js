//Write a program that takes input of someone's basic salary and benefits, 
//adds them to find the gross salary then uses  the gross salary to find the NHIF. 
//To find the Kenya NHIF Rate using THIS LINK: 
let basic = Number(prompt("Enter salary"))
let benefits = Number(prompt("Enter benefits"))
function gross_salary(a, b) {
    let result = a + b
    return result
}
let gross = gross_salary(basic, benefits)
document.getElementById('gross').innerHTML = `Gross salary is Ksh. ${gross}`

//nhif
function nhif(a) {
    if (a >= 0 && a < 6000) {
        let result = 150
    }
    else if (a >= 6000 && a < 8000) {
        result = 300
    }
    else if (a >= 8000 && a < 12000) {
        result = 400
    }
    else if (a >= 12000 && a < 15000) {
        result = 500
    }
    else if (a >= 15000 && a < 20000) {
        result = 600
    }
    else if (a >= 20000 && a < 25000) {
        result = 750
    }
    else if (a >= 25000 && a < 30000) {
        result = 850
    }
    else if (a >= 30000 && a < 35000) {
        result = 900
    }
    else if (a >= 35000 && a < 40000) {
        result = 950
    }
    else if (a >= 40000 && a < 45000) {
        result = 1000
    }
    else if (a >= 45000 && a < 50000) {
        result = 1100
    }
    else if (a >= 50000 && a < 60000) {
        result = 1200
    }
    else if (a >= 60000 && a < 70000) {
        result = 1300
    }
    else if (a >= 70000 && a < 80000) {
        result = 1400
    }
    else if (a >= 80000 && a < 90000) {
        result = 1500
    }
    else if (a >= 90000 && a < 10000) {
        result = 1600
    }
    else {
        result = 1700
    }
    return result
}
let nh = nhif(gross)
document.getElementById('nhif').innerHTML = `NHIF is Ksh.${nh}`

//Continue with the program above, then use  the gross salary to find the NSSF. 
// To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MAXIMUM 
// OF 18,000 Gross Salary CAN BE USED IN NSSF. 

function my_nssf(x, y = 0.06) {
    if (x <= 18000) {
        let result = x * y
    }
    else {
        result = 18000 * 0.06
    }
    return result
}
let nssf = my_nssf(gross)
document.getElementById('nssf').innerHTML = `NSSF is Ksh. ${nssf}`

// Continue with the same program and calculate an individual’s NHDF using:
// i.e NHDF = gross_salary *  0.015
function my_nhdf(x, y = 0.015) {
    let result = x * y
    return result
}
let nhdf = my_nhdf(gross)
document.getElementById('nhdf').innerHTML = `NHDF is Ksh. ${nhdf}`

// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF) 
function taxable_income(a, b, c) {
    let result = a - (b + c)
    return result
}
let taxable = taxable_income(gross, nssf, nhdf)
document.getElementById('taxable').innerHTML = `Taxable income is Ksh. ${taxable}`

// Continue with the same program and find the person's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK
function my_payee(inc) {
    let relief = 2400
    if (inc >= 0 && inc <= 24000) {
        let result = 0
    }
    else if (inc > 24000 && inc <= 32333) {
        result = ((inc - 24000) * 0.25) + (0.1 * 24000) - relief

    }
    else if (inc > 32333 && inc <= 500000) {
        result = (8333 * 0.25) + (0.1 * 24000) + ((inc - 32333) * 0.3) - relief
    }
    else if (inc > 500000 && inc <= 800000) {
        result = (8333 * 0.25) + (0.1 * 24000) + (467667 * 0.3) - ((inc - 500000) * 0.325) - relief
    }
    else {
        result = (8333 * 0.25) + (0.1 * 24000) + (8333 * 0.3) - (467667 * 0.325) + (300000 * 0.325) + ((inc - 800000) * 0.35) - relief
    }
    return result
}
let payee = my_payee(taxable)
document.getElementById('payee').innerHTML = `Payee is ${payee}`

// Continue with the same program and calculate an individual’s Net Salary using:
// net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
function net_salary(a, b, c, d, e) {
    let result = a - (b + c + d + e)
    return result
}
let net = net_salary(gross, nh, nhdf, nssf, payee)
document.getElementById('net').innerHTML = `Net pay is KES.${net}`