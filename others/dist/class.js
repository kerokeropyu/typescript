class Point {
    // 引数がない場合の初期値を設定
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    moveX(n) {
        this.x += n;
    }
    moveY(n) {
        this.y += n;
    }
}
const point = new Point();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        // 継承元のコンスｔラクトを呼び出す
        super(x, y);
        this.z = z;
    }
    moveZ(n) {
        this.z += n;
    }
}
const point3D = new Point3D();
point3D.moveX(10);
point3D.moveY(20);
point3D.moveZ(20);
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);
//# sourceMappingURL=class.js.map