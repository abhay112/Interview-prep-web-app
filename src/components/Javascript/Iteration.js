// Company object structure
let company = {
  name: "TechCorp",
  location: {
    city: "San Francisco",
    country: "USA",
  },
  departments: [
    {
      name: "Engineering",
      employees: [
        { name: "Alice", role: "Frontend Developer", skills: ["React", "JavaScript"] },
        { name: "Bob", role: "Backend Developer", skills: ["Node.js", "Express"] }
      ]
    },
    {
      name: "HR",
      employees: [
        { name: "Charlie", role: "HR Manager", skills: ["Recruitment", "Payroll"] }
      ]
    }
  ],
  isHiring: true
};

// 1. Object.keys() demonstration
let test = Object.keys(company);
console.log("1. Object.keys() result:");
console.log(test);
/* Output:
["name", "location", "departments", "isHiring"]
*/

// 2. Iterating through object keys
console.log("\n2. Key iteration:");
Object.keys(company).forEach((key, idx) => {
  console.log(idx, key, company[key]);
});
/* Output:
0 'name' 'TechCorp'
1 'location' { city: 'San Francisco', country: 'USA' }
2 'departments' [ (Engineering department), (HR department) ]
3 'isHiring' true
*/

// 3. Object.entries() demonstration
let test2 = Object.entries(company);
console.log("\n3. Object.entries() result:");
console.log(test2);
/* Output:
[
  ['name', 'TechCorp'],
  ['location', { city: '...', country: '...' }],
  ['departments', [ (departments array) ]],
  ['isHiring', true]
]
*/

// 4. Mapping object entries to new format
let test3 = Object.entries(company).map(([key, val], idx) => (
  console.log(idx, key, val),
  { index: idx, key, value: val }
));
console.log("\n4. Mapped entries result:");
console.log(test3);
/* Output:
[
  { index: 0, key: 'name', value: 'TechCorp' },
  { index: 1, key: 'location', value: { ... } },
  { index: 2, key: 'departments', value: [...] },
  { index: 3, key: 'isHiring', value: true }
]
*/

// 5. User data transformations
const users = [ /* original user data */ ];

// Adding seniority classification (Note: Age threshold should be >=30)
let test4 = users.map((val, idx) => ({
  ...val,
  seniority: val.age >= 30 ? "Senior" : "Junior"
}));
console.log("\n5. Users with seniority:");
console.log(test4);
/* Output:
All users except David (35) marked as Junior
David's entry: { ..., seniority: "Senior" }
*/

// 6. Salary modification chain
console.log("\n6. Salary modification results:");
let test9 = users
  ?.filter(val => val?.salary > 50000)
  ?.map(val => ({ ...val, salary: val?.salary * 2 }))
  ?.forEach(val => console.log(val));


console.log(test9)

/* Output:
Bob: { salary: 120000 }
David: { salary: 160000 }
Eve: { salary: 140000 }
*/

// 7. Array reduction example
let arr = [1, 2, 3, 4, 5];
let test10 = arr.reduce((acc, init) => ({ total: acc?.total + init }), { total: 0 });
console.log("\n7. Reduction result:");
console.log(test10); // Output: { total: 15 }
