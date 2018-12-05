const user = require('../src/commands/user')

test('User api status', () => {
    if('should load data about user', async () => {
        const data = await user.user('Bekowy')
        expect(data).toBeDefined()
        expect(data.name).toEqual('Bekowy')
    });
});