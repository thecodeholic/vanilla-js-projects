/*
You should make request on the following URL: 
https://next.json-generator.com/api/json/get/VkBw8XP2d 
Get the JSON data and perform some operations on the data.
You must use high order functions such as: filter, map, reduce, forEach, etc…
*/
fetch(`https://next.json-generator.com/api/json/get/VkBw8XP2d`)
    .then(response => response.json())
    .then(result => {
        main(result);
    })

    function main(employees) {
        // 1. Find and print average salary of all employees who works in Georgia, Amazon company.
        let filteredSalaries = employees
            .filter(e => e.country === 'Georgia' && e.company === 'Amazon')
            .map(e => e.salary);
        const sum = filteredSalaries.reduce((accum, next) => next + accum, 0);
        console.log("1: "+Math.round(sum/filteredSalaries.length));

        // 2. Find and print list of the employees which work in Facebook IT department.
        const list2 = employees
            .filter(e => e.company === 'FaceBook' && e.department === 'IT')
        console.log("2: ", list2);

        // 3. Find and print boolean value if there exists employees which work in India HR department and whose salary is above 500 000
        const result3 = employees.some(e => e.country === 'India' && e.department === 'HR' && e.salary > 500000)
        console.log("3 ", result3);
        
        // 4. Get and print a list of employees with only email, firstname and dob of the employees which work in Google UK Sales department.
        const result4 = employees
            .filter(e => e.company === 'Google' && e.country === 'UK' && e.department === 'Sales')
            .map(e => ({firstname: e.name.first, email: e.email, dob: e.dob}))
        console.log("4 ", result4);

        // 5. Find and print an employee which has highest salary among those employees which work in either Google or Apple and are born after 1980.
        const result5 = employees
            .filter(e => (e.company === 'Google' || e.company === 'Apple') && new Date(e.dob).getFullYear() > 1980)
            .sort((a, b) => b.salary - a.salary)[0]

        console.log("5: ", result5);

        // 6. Find an average age of all employees and compare it to average age of Google employees. Print "1" if average age of all employees is smaller, otherwise print "2".
        const age1 = employees
            .map(e => 2021 - new Date(e.dob).getFullYear())
            .reduce((accum, next) => next + accum, 0) / employees.length;

        const googleEmployees = employees.filter(e => e.company === 'Google');
        const age2 = googleEmployees
            .map(e => 2021 - new Date(e.dob).getFullYear())
            .reduce((accum, next) => next + accum, 0) / googleEmployees.length;

        if (age1 < age2) {
            console.log("6: 1");
        } else {
            console.log("6: 2");
        }

        // 7. Sort and print employees in alphabetical order by firstname
        const result7 = employees.sort((a, b) => {
            if (a.name.first < b.name.first) return -1;
            if (a.name.first === b.name.first) return 0;
            return 1;
        })
        console.log("7: ", result7);

        // 8. Check if there exists and employee in Google which has salary over 600 000 and is born after 1990.
        const result8 = employees
            .some(e => e.company === 'Google' && e.salary > 600000 && new Date(e.dob).getFullYear() > 1990)

        console.log("8: ", result8);

        // 9. Find and print sum of salaries of the users which work in USA Apple.
        const result9 = employees
            .filter(e => e.company === 'Apple' && e.country === 'USA')
            .map(e => e.salary)
            .reduce((accum, next) => next + accum)

        console.log("9: ", result9);

        // 10. Find and print list of all employees, which has birth hours in between 00:00AM and 12:00PM
        const result10 = employees
            .filter(e => new Date(e.dob).getUTCHours() < 12);

        console.log("10: ", result10);
    }