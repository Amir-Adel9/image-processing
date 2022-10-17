"use strict";
var myFunc = function (num) {
    return num * num;
};
it('expect myFunc(5) to equal 25', function () {
    expect(myFunc(5)).toEqual(25);
});
