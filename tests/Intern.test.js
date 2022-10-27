const Intern = require('../lib/intern.js');
const intern = new Intern('Jamie', '899974', 'jmolly@gmail.com', 'Los Angeles');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Jamie');
    expect(intern.id).toBe('899974');
    expect(intern.email).toBe('jmolly@gmail.com');
    expect(intern.school).toBe('Los Angeles');

});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jamie');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('899974');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jmolly@gmail.com');
});

test('test if we can get the school  from the getName() method', () => {
    expect(intern.getSchool()).toBe('Los Angeles');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jamie');
});
