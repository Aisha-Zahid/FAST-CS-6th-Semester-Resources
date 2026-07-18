const monthAbbreviations = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const userMonthInput = prompt("Enter the abbreviation of a month (e.g., jan, feb, etc.):").toLowerCase();
const monthIndex = monthAbbreviations.indexOf(userMonthInput);

if (monthIndex === -1) {
    alert("Invalid month abbreviation.");
} else {
    let daysInMonth = daysInMonths[monthIndex];
    if (userMonthInput === "feb" && isLeapYear()) {
        daysInMonth = 29;
    }
    alert(`The number of days in ${userMonthInput} is: ${daysInMonth}`);
}

function isLeapYear() {
    const currentYear = new Date().getFullYear();
    return (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0));
}
