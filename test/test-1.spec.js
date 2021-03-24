import { expect } from 'chai';

describe('Outer Describe', function () {
   it('Example Test 1', function () {
      expect(true, 'Truthy value found').to.be.true;
   });

   describe('Inner Describe', function () {
      it('Example Test 2', function () {
         expect([1, 2, 3], 'Arrays did not match').to.deep.equal([1, 2, 3]);
      });

      it('Example Test 3', function () {
         expect(null).to.be.null;
      });
   });
});

