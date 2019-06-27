const {describe, it} = require('mocha');
const {expect} = require('chai');
const { promiseState } = require('../dist/index.cjs');

describe('creation', function () {
   before(function () {
       this.target = promiseState(0);
   });

   it('should return default result', function () {
        expect(this.target.result()).to.equal(0);
   });

    it('should return empty error', function () {
        expect(this.target.error()).to.equal(undefined);
    });
});

describe('pending', function () {
    before(function () {
        this.target = promiseState(0);
    });

    it('should`t been in pending state by default', function () {
        expect(this.target.pending()).to.equal(false);
    });

    it('should return current pending state if first arg is not of boolean type', function () {
        expect(this.target.pending(2)).to.equal(false);
    });

    it('should activate pending state', function () {
        this.target = this.target.pending(true);

        expect(this.target.pending()).to.equal(true);
    });

    it('should deactivate pending state', function () {
        this.target = this.target.pending(false);

        expect(this.target.pending()).to.equal(false);
    });

    it('should`t mutate current instance', function () {
        this.target.pending(true);

        expect(this.target.pending()).to.equal(false);
    });
});

describe('resolved', function () {
    before(function () {
        this.target = promiseState(0);
    });

    it('should`t been in resolved state by default', function () {
        expect(this.target.resolved()).to.equal(false);
    });

    it('should return current resolved state if first arg is not of boolean type', function () {
        expect(this.target.resolved(2)).to.equal(false);
    });

    it('should activate resolve state and update result', function () {
        this.target = this.target.resolved(true, 1);

        expect(this.target.resolved()).to.equal(true);
        expect(this.target.result()).to.equal(1);
    });

    it('should deactivate resolve state and update result', function () {
        this.target = this.target.resolved(false, 2);

        expect(this.target.resolved()).to.equal(false);
        expect(this.target.result()).to.equal(2);
    });

    it('should`t mutate current instance', function () {
        this.target.resolved(true, 2);

        expect(this.target.resolved()).to.equal(false);
        expect(this.target.result()).to.equal(2);
    });
});

describe('rejected', function () {
    before(function () {
        this.target = promiseState(0);
    });

    it('should`t been in rejected state by default', function () {
        expect(this.target.rejected()).to.equal(false);
    });

    it('should return current rejected state if first arg is not of boolean type', function () {
        expect(this.target.rejected(2)).to.equal(false);
    });

    it('should activate rejected state and update error', function () {
        const error = new Error();
        this.target = this.target.rejected(true, error);

        expect(this.target.rejected()).to.equal(true);
        expect(this.target.error()).to.equal(error);
    });

    it('should deactivate rejected state and reset error', function () {
        this.target = this.target.rejected(false);

        expect(this.target.rejected()).to.equal(false);
        expect(this.target.error()).to.equal(undefined);
    });

    it('should`t mutate current instance', function () {
        this.target.rejected(true, 0);

        expect(this.target.rejected()).to.equal(false);
        expect(this.target.error()).to.equal(undefined);
    });
});

describe('reaction', function () {
    beforeEach(function () {
        this.target = promiseState(0);
    });

    it('should deactivate pending state after activating resolved state', function () {
        const next = this.target
            .pending(true)
            .resolved(true, 0);

        expect(next.pending()).to.equal(false);
    });

    it('should deactivate pending state after activating rejected state', function () {
        const next = this.target
            .pending(true)
            .rejected(true, 0);

        expect(next.pending()).to.equal(false);
    });

    it('should deactivate resolved state after activating pending state', function () {
        const next = this.target
            .resolved(true, 1)
            .pending(true);

        expect(next.resolved()).to.equal(false);
    });

    it('should save result after activating pending state', function () {
        const next = this.target
            .resolved(true, 2)
            .pending(true);

        expect(next.result()).to.equal(2);
    });

    it('should deactivate rejected state after activating pending state', function () {
        const next = this.target
            .rejected(true, 0)
            .pending(true);

        expect(next.rejected()).to.equal(false);
    });

    it('should reset error after activating pending state', function () {
        const next = this.target
            .rejected(true, new Error())
            .pending(true);

        expect(next.error()).to.equal(undefined);
    });

    it('should deactivate resolved state after activating rejected state', function () {
        const next = this.target
            .resolved(true, 1)
            .rejected(true);

        expect(next.resolved()).to.equal(false);
    });

    it('should save result after activating rejected state', function () {
        const next = this.target
            .resolved(true, 1)
            .rejected(true);

        expect(next.result()).to.equal(1);
    });

    it('should deactivate rejected state after activating resolved state', function () {
        const next = this.target
            .rejected(true, new Error())
            .resolved(true, 2);

        expect(next.rejected()).to.equal(false);
    });

    it('should reset error after activating resolved state', function () {
        const next = this.target
            .rejected(true, new Error())
            .resolved(true, 2);

        expect(next.error()).to.equal(undefined);
    });
});

describe('replacing', function () {
    beforeEach(function () {
        this.target = promiseState(0);
    });

    it('should replace result and not modify prev instance', function () {
        const newInstance = this.target.replaceResult(1);

        expect(newInstance.result()).to.equal(1);
        expect(this.target.result()).to.equal(0);
    });

    it('should replace error and not modify prev instance', function () {
        const newInstance = this.target.replaceError(1);

        expect(newInstance.error()).to.equal(1);
        expect(this.target.error()).to.equal(undefined);
    });
});
