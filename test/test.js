const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


//Instance of web3
const understanding_mocha = () => {

    const web3 = new Web3(ganache.provider());

    class Car {
        park() {
            return 'Stop';
        }
        start() {
            return 'Vroom';
        }

    }

    let car;
    beforeEach(() => {
        car = new Car();
    })
    describe("Car", () => {

        it('park should stop the car', () => {

            assert.equal(car.park(), 'Stop');
        })
        it('Car is Vrooming', () => {

            assert.equal(car.start(), 'Vroom');
        })
    })
}