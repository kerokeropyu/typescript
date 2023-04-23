"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const target = document.getElementById('username');
target.addEventListener('input', (e) => {
    console.log(e);
    if (e.target instanceof HTMLInputElement) {
        console.log(e.target.value);
    }
    else {
    }
});
const target = document.getElementById('username');
target.addEventListener('input', (e) => {
    console.log(e.target.value);
});
const test1234 = '';
//# sourceMappingURL=event2.js.map