//console.log('Hello!');

let emp = [
  { name: 'abc', age: 30 },
  { name: 'bbb', age: 50 },
  { name: 'ccc', age: 20 },
  { name: 'ddd', age: 28 },
  { name: 'eee', age: 24 },
];

//console.log(emp);
const ageBelow25 = emp.filter((employee) => employee.age < 25);
//console.log(ageBelow25);
var empDivIs = document.getElementById('empDiv');
ageBelow25.map(({ name, age }) => {
  const dataToShow = '<h4>' + name + ' and age is ' + age + '<h4>';
  //console.log(dataToShow);
  empDivIs.innerHTML =
    empDivIs.innerHTML + '<br/>' + name + ' and age is ' + age;
});

//empDivIs.innerHTML = JSON.stringify(ageBelow25);

// function EmpNames() {}
// EmpNames.prototype = {
//   names: [],
//   showNames: function () {
//     return this.names;
//   },
// };

// var e1 = new EmpNames();
// e1.names.push('foo');
// console.log(e1.showNames());

// var e2 = new EmpNames();
// e2.names.push('bar');
// console.log(e2.showNames());
