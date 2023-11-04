'use strict'

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    },
    reset() {
        this.step = 0;
        return this;
    },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.reset();

ladder.up().up().down().showStep();

ladder  .reset()
        .down()
        .down()
        .down()
        .down()
        .down()
        .up()
        .up()
        .down()
        .up()
        .showStep();





