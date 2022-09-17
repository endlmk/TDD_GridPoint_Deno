export class GridPoint {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
    getNotation(): string {
        return "(" + this.x.toString() + ", " + this.y.toString() + ")";
    }
    hasSameCoordinatesWith(cmp: GridPoint): boolean {
        return this.x == cmp.getX() && this.y == cmp.getY();
    }
    isNeighborOf(cmp: GridPoint): boolean {
        return (Math.abs(this.x - cmp.getX()) == 1 && this.y == cmp.getY()) 
            || (Math.abs(this.y - cmp.getY()) == 1 && this.x == cmp.getX());
    }
}

export class GridPoints {
    readonly p1: GridPoint;
    readonly p2: GridPoint;
    constructor(p1: GridPoint, p2: GridPoint) {
        this.p1 = p1;
        this.p2 = p2;
    }
    containsPoint(cmp: GridPoint): boolean {
        return this.p1.hasSameCoordinatesWith(cmp) 
            || this.p2.hasSameCoordinatesWith(cmp);
    }
}