const {describe, it} = require('mocha');
const {expect} = require('chai');
const AsyncMirror = require('../dist/index.cjs');

describe('AsyncMirror', function () {
   it('pending', function () {
        expect(AsyncMirror.pending()).to.deep.equal({
            isPending: true,
            isFulfilled: false,
            isRejected: false,
            value: undefined,
            reason: undefined
        });
   });

    it('resolve', function() {
        expect(AsyncMirror.resolve(1)).to.deep.equal({
            isPending: false,
            isFulfilled: true,
            isRejected: false,
            value: 1,
            reason: undefined
        });
    });

    it('reject', function() {
        const error = new Error('some error');
        expect(AsyncMirror.reject(error)).to.deep.equal({
            isPending: false,
            isFulfilled: false,
            isRejected: true,
            value: undefined,
            reason: error
        });
    });
});

