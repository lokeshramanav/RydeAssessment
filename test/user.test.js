const expect = require('chai').expect;
const faker = require("faker");
const UserRepository = require("../repository/user.repository")
var userRepository = new UserRepository()


describe('User Repository Test', () => {

    const stubValue = {
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        dob: faker.date.past(),
        description: faker.random.words()
    };

    var newUser = {}

    it('Create a user record with all parameters', async() => {
        newUser = await userRepository.createUser(stubValue)
        expect(newUser.name).to.equal(stubValue.name);
        done();
    });

    it('Find user by id', async() => {
        var searchUser = await userRepository.findUserById(newUser.id)
        expect(searchUser.name).to.equal(stubValue.name);
        done();
    });

    it('Find user by id and update', async() => {
        var newStubValueUser = {
            name: faker.name.findName(),
            address: faker.address.streetAddress(),
            dob: faker.date.past(),
            description: faker.random.words()
        }
        var updateUser = await userRepository.updateUserById(newUser.id , newStubValueUser) 
        expect(updateUser.name).to.equal(newStubValueUser.name);
        done();
    });


   });