"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const target1 = document.getElementById('username');
target1.addEventListener('input', (e) => {
    console.log(e);
    if (e.target instanceof HTMLInputElement) {
        console.log(e.target.value);
    }
    else {
    }
});
const target2 = document.getElementById('username');
target2.addEventListener('input', (e) => {
    console.log(e.target.value);
});
//# sourceMappingURL=event.js.map