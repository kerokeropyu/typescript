var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// enum Directionを参照
let direction = Direction.Left;
// 2という数字が出力されます。
console.log(direction);
//# sourceMappingURL=enum.js.map