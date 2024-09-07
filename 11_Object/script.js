const tender = new Object();

const tenderuser = {};

tenderuser.id = "acb123";
tenderuser.name = "vicky";
tenderuser.isLockedIn = false;
// console.log(tenderuser);

// nested object

const regularuser = {
  fullName: "vickey dash",
  emailid: "vickey@gmail.com",
  username: {
    regularname: "barun parida",
    short: "hero",
  },
};
// console.log(regularuser.username);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

const obj3 = Object.assign(obj1, obj2, obj4);
// console.log(obj3);

let user = {
  id: "amar",
  class: "6th",
  another: {
    id: "amar",
    class: "6th",
  },
};
// user[1].id
console.log(Object.keys(tenderuser));
console.log(Object.values(tenderuser));
console.log(Object.entries(tenderuser));

