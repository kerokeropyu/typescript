interface Point {
  x: number;
  y: number;
}

function printPoint(point: Point): void {
  console.log(`x座標は${point.x}です。`);
  console.log(`y座標は${point.y}です。`);
  console.log(`y座標は${point.z}です。`);
}

interface Point {
 z: number;  
}

// printPoint({x: 100, y: 200, z: 300});
