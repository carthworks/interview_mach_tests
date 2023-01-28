//console.log('Hello!');
// In JavaScript, create a list of data that is less than 25 years old and add a click event to each line.
let emp = [
  { name: 'abc', age: 30 },
  { name: 'bbb', age: 50 },
  { name: 'ccc', age: 20 },
  { name: 'ddd', age: 28 },
  { name: 'eee', age: 24 },
  { name: 'fff', age: 20 },
  { name: 'ggg', age: 22 },
  { name: 'hhh', age: 24 },
];

const ageBelow25 = emp.filter((employee) => employee.age < 25);
const empDivIs = document.getElementById('empDiv');
const fragment = document.createDocumentFragment();
ageBelow25.forEach(({ name, age }) => {
  const li = document.createElement('li');
  li.innerText = ` ${name} er and age is ${age}`;
  li.addEventListener('click', function () {
    console.log('clicked ', name);
  });
  fragment.appendChild(li);
});
empDivIs.appendChild(fragment);

// var headDiv = document.getElementById('header');
// headDiv.addEventListener('click', () => {
//   console.log('i am clicked!!');
// });

// var empDivIs = document.getElementById('empDiv');
// ageBelow25.map(({ name, age }) => {
//   const dataToShow = `<li> ${name}  and age is ${age} </li>`;
//   empDivIs.innerHTML = empDivIs.innerHTML + dataToShow;
// });

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
