/* eslint-disable no-unused-expressions  */

const expect = require('chai').expect;
const Renter = require('../../dst/models/renter');

describe('renter', () => {
  describe('constructor', () => {
    it('should create a renter object', (done) => {
      const renter = new Renter();
      renter.validate(err => {
        expect(err).to.be.undefined;
        done();
      });
    });
    it('should create a renter object with given values', (done) => {
      const renter = new Renter({ name: 'Sam', money: 1000, complaints: 0 });
      renter.validate(err => {
        expect(err).to.be.undefined;
        expect(renter).to.be.ok;
        expect(renter.name).to.equal('Sam');
        expect(renter.money).to.equal(1000);
        done();
      });
    });
    it('should not create a renter object - money too low', (done) => {
      const renter = new Renter({ name: 'Sam', money: 20, complaints: 0 });
      renter.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should not create a renter object - name too short', (done) => {
      const renter = new Renter({ name: 'S', money: 1000, complaints: 0 });
      renter.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should not create a renter object - invalid number of complaints(too high)', (done) => {
      const renter = new Renter({ name: 'Sam', money: 1000, complaints: 4 });
      renter.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should not create a renter object - invalid number of complaints(too low)', (done) => {
      const renter = new Renter({ name: 'Sam', money: 1000, complaints: -7 });
      renter.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
  });
});
