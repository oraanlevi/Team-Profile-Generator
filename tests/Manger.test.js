const Manager = requre('../lib/Manager');
const manager = new Manager('Jamie', '899974', 'jmolly@gmail.com', '333');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Jamie');
    expect(manager.id).toBe('899974');
    expect(manager.email).toBe('jmolly@gmail.com');
    expect(manager.officeNumber).toBe('333');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Jamie')
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('899974')
});
test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jmolly@gmail.com')
});

test('test if we can get the offcie number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('333')
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager')
});