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
}