class Point {
  x: number;
  y: number;

  // 引数がない場合の初期値を設定
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  moveX(n: number): void {
    this.x += n;
  }

  moveY(n: number): void {
    this.y += n;
  }
}

const point: Point = new Point();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);


class Point3D extends Point {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0){
    // 継承元のコンスｔラクトを呼び出す
    super(x, y);
    this.z = z;
  }
  moveZ(n: number) :void {
    this.z += n;
  }
}

const point3D: Point3D = new Point3D();
point3D.moveX(10);
point3D.moveY(20);
point3D.moveZ(20);

console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);