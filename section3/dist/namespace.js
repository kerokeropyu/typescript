var First;
(function (First) {
    First.testFunc = () => {
        console.log('First');
    };
})(First || (First = {}));
var Second;
(function (Second) {
    Second.testFunc = () => {
        console.log('Second');
    };
})(Second || (Second = {}));
First.testFunc();
Second.testFunc();
//# sourceMappingURL=namespace.js.map