const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jamie', '899974', 'jmolly@gmail.com', 'Los Angeles');



test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Jamie');
});
