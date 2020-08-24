var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var userInfo = {
    firstName: 'Ranjith',
    lastName: '',
    email: 'ranjith@appknit.io',
    address: {
        street: '35 A',
        city: 'Bangalore'
    },
    qualification: ['as', 'asas']
};
var printUserInfo = function (_a) {
    // console.log(user.firstName, user.lastName, user.email); legacy way;
    var Fname = _a.firstName, _b = _a.lastName, lastName = _b === void 0 ? 'Default Value' : _b, email = _a.email, _c = _a.address, street = _c.street, address = __rest(_c, ["street"]), user = __rest(_a, ["firstName", "lastName", "email", "address"]);
    console.log(Fname, lastName, email, __assign({}, user), __assign({}, address)); // Ranjith, Prabhu, ranjit@appknit.io
    console.log(street); // 35A
};
printUserInfo(userInfo);
var objectA = { a: 1, b: 2 };
var objectB = { c: 5, d: 9 };
var objectC = __assign(__assign({ a: 15 }, objectA), objectB); // { a:15, b: 2, c: 5: d: 9}
setTimeout(function () {
    document.getElementById('content').innerHTML = "Hey I have added something";
}, 1000);
// const calculate = (a, b) => (a + b) => (c * 2);
// const usingArrow = () => {
//     let a = 5;
//     let b = 3;
//     return a + b;
// }
// calculate(5 , 2)
// 1. 5 + 2 -> 7
// 2. 7 * 2 -> 14
