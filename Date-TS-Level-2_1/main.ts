console.log("test");

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

console.log(date.toLocaleDateString("de-DE"));
console.log(date.toLocaleDateString("en-US"));
console.log(date.toLocaleDateString("en-GB"));

console.log(day);
console.log(month);
console.log(year);

const fullDateLocal = document.querySelector(".date-local") as HTMLParagraphElement;
const fullDateUtc = document.querySelector(".date-utc") as HTMLParagraphElement;

const fullTimeLocal = document.querySelector(".time-local") as HTMLParagraphElement;
const fullTimeUtc = document.querySelector(".time-utc") as HTMLParagraphElement;

fullDateLocal.innerHTML = date.toLocaleDateString("de-DE");
fullDateUtc.innerHTML = date.toLocaleDateString("en-US", { timeZone: "UTC" });

fullTimeLocal.innerHTML = date.toLocaleTimeString("de-DE") + " Uhr";
fullTimeUtc.innerHTML = date.toLocaleTimeString("de-DE", { timeZone: "UTC" }) + " Uhr";

