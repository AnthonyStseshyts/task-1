"use strict";

// Sample of the task 1

// function EventEm() {
//   this.events = {};
// }

// EventEm.prototype.on = function(eventName, fn) {
//   if (!this.events[eventName]) {
//     this.events[eventName] = [];
//   }
//   this.events[eventName].push(fn);

//   return () =>
//     (this.events[eventName] = this.events[eventName].filter(
//       functionEl => fn !== functionEl
//     ));
// };

// EventEm.prototype.emit = function(eventName, ...args) {
//   const event = this.events[eventName];
//   if (event) {
//     event.forEach(fn => {
//       fn(...args);
//     });
//   }
// };

// const ee = new EventEm();
// const unsubscribe = ee.on("hi", (name, surname) =>
//   console.log(`Hi, ${name} ${surname}`)
// );
// ee.emit("hi", "Anton", "Stseshyts");
// unsubscribe();

