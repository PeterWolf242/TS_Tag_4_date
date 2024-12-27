console.log("test");

const date1 = new Date(new Date("September 2, 2019 09:00:00"));
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const DATE1 = document.querySelector(".date1") as HTMLParagraphElement;
const DATE2 = document.querySelector(".date2") as HTMLParagraphElement;
const DATE3 = document.querySelector(".date3") as HTMLParagraphElement;
const DATE4 = document.querySelector(".date4") as HTMLParagraphElement;

DATE1.innerHTML = `${date1}`;
DATE2.innerHTML = `${date2}`;
DATE3.innerHTML = `${date3}`;
DATE4.innerHTML = `${date4}`;