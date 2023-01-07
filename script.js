/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  const map1 = arr.map((person) => {
    if (person.profession === "developer") console.log(person);
  });
}

function PrintDeveloperbyForEach() {
  const foreach = arr.forEach((person) => {
    if (person.profession === "developer") console.log(person);
  });
}

function addData() {
  let arr2 = [{ id: 4, name: "susan", age: "20", profession: "intern" }];
  arr.push(arr2);
  console.log(arr);
}

function removeAdmin() {
  const remove = arr.filter((arr) => arr.profession !== "admin");
  console.log(remove);
}

function concatenateArray() {
  let newArr = [
    { id: 1, name: "Rock", age: "23", profession: "software engineer" },
    { id: 2, name: "Broke", age: "28", profession: "senior developer" },
    { id: 3, name: "Miz", age: "25", profession: "software engineer" },
  ];

  let allList = arr.concat(newArr);
  console.log(allList);
}
