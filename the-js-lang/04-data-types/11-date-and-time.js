"use strict";

// // To create a new Date object call new Date()
// // new Date() Without arguments – create a Date object for the current date and time
// let now = new Date();
// console.log(now); // shows current date/time

// // new Date(milliseconds) Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
// // 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// // now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);

// // Dates before 01.01.1970 have negative timestamps
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969);

// // new Date(datestring) If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse uses
// let date = new Date("2017-01-26");
// console.log(date);

// // new Date(year, month, date, hours, minutes, seconds, ms)
// // Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
// // The year should have 4 digits, The month count starts with 0, The date parameter is actually the day of month, if absent then 1
// // If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
// new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
// new Date(2011, 0, 1); // the same, hours etc are 0 by default

// let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
// console.log(date2); // 1.01.2011, 02:03:04.567

// // getFullYear() Get the year (4 digits)
// // getMonth() Get the month, from 0 to 11.
// // getDate() Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// // getHours(), getMinutes(), getSeconds(), getMilliseconds() Get the corresponding time components.
// // getDay() Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday
// // There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0:
// // getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get"

// // the hour in your current time zone
// console.log(now.getHours());

// // the hour in UTC+0 time zone (London time without daylight savings)
// console.log(now.getUTCHours());

// // getTime() Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
// // getTimezoneOffset() Returns the difference between UTC and the local time zone, in minutes:
// console.log(new Date().getTimezoneOffset());

// // Setting date components
// // The following methods allow to set date/time components:
// // setFullYear(year, [month], [date])
// // setMonth(month, [date])
// // setDate(date)
// // setHours(hour, [min], [sec], [ms])
// // setMinutes(min, [sec], [ms])
// // setSeconds(sec, [ms])
// // setMilliseconds(ms)
// // setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
// // Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

// let today = new Date();

// today.setHours(0);
// console.log(today); // still today, but the hour is changed to 0

// today.setHours(0, 0, 0, 0);
// console.log(today); // still today, now 00:00:00 sharp.

// // Autocorrection
// let date3 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// console.log(date3); // ...is 1st Feb 2013!

// let date4 = new Date();
// date4.setSeconds(date4.getSeconds() + 70);

// console.log(date4); // shows the correct date

// let date5 = new Date(2016, 0, 2); // 2 Jan 2016

// date5.setDate(1); // set day 1 of month
// console.log(date5);

// date5.setDate(0); // min day is 1, so the last day of the previous month is assumed
// console.log(date5); // 31 Dec 2015

// // Date to number, date diff
// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// console.log(`The loop took ${end - start} ms`);

// // There’s a special method Date.now() that returns the current timestamp.
// let startNow = Date.now(); // milliseconds count from 1 Jan 1970

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let endNow = Date.now(); // done

// console.log(`The loop took ${endNow - startNow} ms`); // subtract numbers, not dates

// // Benchmarking
// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// // once
// console.log("Time of diffSubtract: " + bench(diffSubtract) + "ms");
// console.log("Time of diffGetTime: " + bench(diffGetTime) + "ms");

// // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// console.log("Total time for diffSubtract: " + time1);
// console.log("Total time for diffGetTime: " + time2);

// // Date.parse from a string The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ.
// let ms = Date.parse("2012-01-26T13:51:50.417-07:00");

// console.log(ms); // 1327611110417  (timestamp)
// let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));

// console.log(date);

// // assignments
// let d1 = new Date(2012, 1, 20, 3, 12);
// console.log(d1);
// let d2 = new Date("2012-02-20T03:12");
// console.log(d2);

// let dateT2 = new Date(2012, 0, 1); // 3 Jan 2012
// console.log(getWeekDay(dateT2)); // should output "TU"

// function getWeekDay(date) {
//   const dayNum = date.getDay();
//   console.log(dayNum);

//   let day = "";

//   switch (dayNum) {
//     case 0:
//       day = "SU";
//       break;
//     case 1:
//       day = "MO";
//       break;
//     case 2:
//       day = "TU";
//       break;
//     case 3:
//       day = "WE";
//       break;
//     case 4:
//       day = "TH";
//       break;
//     case 5:
//       day = "FR";
//       break;
//     case 6:
//       day = "SA";
//       break;
//     default:
//       break;
//   }

//   return day;
// }

// console.log(getLocalDay(dateT2)); // should output "TU"

// function getLocalDay(date) {
//   return date.getDay() !== 0 ? date.getDay() : 7;
// }

// let date3 = new Date(2015, 0, 2);

// console.log(getDateAgo(date3, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date3, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date3, 365)); // 2, (2 Jan 2014)

// function getDateAgo(date, daysAgo) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - daysAgo);
//   return dateCopy.getDate();
// }

// getLastDayOfMonth(2012, 1);

// function getLastDayOfMonth(year, month) {
//   const date = new Date(year, month).setDate(
//     new Date(year, month).getDate() - 1
//   );
//   console.log(new Date(date).getDate());
// }

// getSecondsToday() == 36000; // (3600 * 10)

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return hrs + ":" + mins + ":" + secs + "ago";
}

// function getSecondsToday() {
//   const start = new Date().setHours(0, 0, 0, 0);
//   const now = new Date();
//   console.log((now - start) / 1000);
// }

// function getSecondsToday() {
//   const end = new Date().setHours(24, 0, 0, 0);
//   const now = new Date();
//   console.log(msToTime(end - now));
// }

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let diff = new Date() - date; // the difference in milliseconds

  if (diff < 1000) {
    // less than 1 second
    return "right now";
  }

  let sec = Math.floor(diff / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + " sec. ago";
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + " min. ago";
  }

  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}
