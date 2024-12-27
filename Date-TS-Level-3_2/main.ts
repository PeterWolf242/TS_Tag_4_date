import { differenceInHours, differenceInSeconds, differenceInYears } from "date-fns";

console.log("test");


const past = "01.01.1970";
const date = new Date();

const time = date.toLocaleTimeString();

const resultYears = differenceInYears(date, past);
const resultHours = differenceInHours(date, past);
const resultSeconds = differenceInSeconds(date, past);

console.log(resultYears);
console.log(resultHours);
console.log(resultSeconds);

const myBirthday = "04.28.1976";

const myResult = differenceInYears("04.07.2007", myBirthday);
console.log(myResult);

const myResult2 = differenceInYears(date, myBirthday);
console.log(myResult2);

console.log(`28.04.1976 ${time}`);
