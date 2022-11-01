const Employee = require('../lib/Employee');
const employee = new Employee('Jamie', "899974", "jmolly@gmail.com")

test('test if we can get the consructor values for the employee object', () => {
    expect(employee.name).toBe('Jamie');
    expect(employee.id).toBe('899974');
    expect(employee.email).toBe('jmolly@gmail.com');
});

test('test if we can get the name from the getName()', () => {
    expect(employee.getName()).toBe('Jamie');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('899974')
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getEmail()).toBe('jmolly@gmail.com')
});