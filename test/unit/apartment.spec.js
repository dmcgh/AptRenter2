/* eslint-disable no-unused-expressions  */

const expect = require('chai').expect;
const Apartment = require('../../dst/models/apartment');
const Renter = require('../../dst/models/renter');

describe('apartment', () => {
  describe('#lease', () => {
    it('should lease an apartment', (done) => {
      const apartment = new Apartment();
      const renter = new Renter();
      apartment.lease(renter);
      done();
    });
  });
  describe('constructor', () => {
    it('should create an apartment object', (done) => {
      const apartment = new Apartment();
      apartment.validate(err => {
        expect(err).to.be.undefined;
        done();
      });
    });
    it('should NOT create an apartment object, SQFT < 500', (done) => {
      const apartment = new Apartment({ name: 'apt1', sqft: 499 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, SQFT > 2500', (done) => {
      const apartment = new Apartment({ name: 'apt1', sqft: 2501 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, bdrm < 1', (done) => {
      const apartment = new Apartment({ bdrm: 0 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, bdrm > 4', (done) => {
      const apartment = new Apartment({ bdrm: 5 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, rent < 1000', (done) => {
      const apartment = new Apartment({ rent: 999 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, deposit < 50', (done) => {
      const apartment = new Apartment({ deposit: 49 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, collectedRent < 0', (done) => {
      const apartment = new Apartment({ collectedRent: -1 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, dueDate < 1', (done) => {
      const apartment = new Apartment({ dueDate: 0 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, dueDate > 31', (done) => {
      const apartment = new Apartment({ dueDate: 32 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create an apartment object, lateFee < 10', (done) => {
      const apartment = new Apartment({ lateFee: 9 });
      apartment.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
  });
});
