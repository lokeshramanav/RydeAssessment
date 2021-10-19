const expect = require('chai').expect;
const faker = require("faker");
const UserRepository = require("../repository/user.repository")
var userRepository = new UserRepository()


describe('Creating an user', () => {

    const stubValue = {
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        dob: faker.date.past(),
        description: faker.random.words()
    };
    console.log("stubValue" , stubValue)

    it('Create a user record with all parameters', async() => {
        var newUser = await userRepository.createUser(stubValue)
        expect(newUser.name).to.equal(stubValue.name);
        done();
    });


   });