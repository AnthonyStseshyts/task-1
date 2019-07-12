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

// Sample of the task 2

function B() {
  this.counter = 0;
}

function inherit(parentFunc, data) {
  let newObj = Object.create(parentFunc);

  let childFunc = function() {
    parentFunc.apply(this);
  };

  childFunc.prototype = Object.create(parentFunc);
  for (let key in data) {
    childFunc.prototype[key] = data[key];
  }

  return childFunc;
}

const F = inherit(B, {
  construcor: function F() {
    this.name = "foo";
  },
  getCounter: function() {
    return this.counter;
  }
});

const f = new F();
console.log(f.getCounter()); // 0;
