describe('createCopy ', () => {
  it('should create copy object', () => {
      let superCar2 = {
        HorsePower: 320,
        Brand: 'Honda',
        Model: 'Civic',
        Year : 2018,
      }
      expect(createCopy(superCar2, superCar)).to.not.equal(superCar, superCar2);
  })
});

describe('strSum ', () => {
  it('should return sum string', () => {
      let res = 2;
      expect(strSum(superCar)).to.equal(2);
  })
});