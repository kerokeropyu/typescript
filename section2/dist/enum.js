"use strict";
var EnumSize;
(function (EnumSize) {
    EnumSize[EnumSize["Small"] = 0] = "Small";
    EnumSize[EnumSize["Medium"] = 1] = "Medium";
    EnumSize[EnumSize["Large"] = 2] = "Large";
})(EnumSize || (EnumSize = {}));
console.log(EnumSize.Large);
console.log(EnumSize[0]);
// エラーが出ない。
console.log(EnumSize[5]);
//# sourceMappingURL=enum.js.map