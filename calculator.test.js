/**
 * Created by liudmilak on 8/4/18.
 */
const {sum} = require ("./script.js");

function sumMY(a,b) {
    return a+b;
};


test("Should sum works", () => {
    expect(sum(2,3)).toBe(5);
});