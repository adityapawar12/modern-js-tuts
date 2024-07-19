"use strict";

// A simple example
let user = {
  name: "John",
};

// If the value of user is overwritten, the reference is lost and it will be garbage collected.
user = null;

// Two references
user = {
  name: "John",
};

let admin = user;

// No garbage collection since admin still references to the pointer of user object in memory.
user = null;

// Now it will get garbage collected.
admin = null;

// Interlinked objects
// Function marry “marries” two objects by giving them references to each other and returns a new object that contains them both.
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

// It’s not enough to delete only one of these two references, because all objects would still be reachable.
delete family.father;
// But if we delete both, then we can see that John has no incoming reference any more
// Outgoing references do not matter. Only incoming ones can make an object reachable
// So, John is now unreachable and will be removed from the memory with all its data that also became unaccessible.
delete family.mother.husband;

// Unreachable island. if we assigned null to the another family variable it will make those other objects unreachable and cause them to be garbage collected.
let anotherFamily = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);
anotherFamily = null;
