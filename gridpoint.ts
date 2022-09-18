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
    readonly p: GridPoint[];
    constructor(...p: GridPoint[]) {
        if(p.length < 2 || 3 < p.length)
        {
            throw Error("Unsupported number of points.");
        }
        if(p[0].hasSameCoordinatesWith(p[1])) {
            throw Error("Same GridPoint exists.");
        }
        this.p= p;
    }
    containsPoint(cmp: GridPoint): boolean {
        return this.p.some((p) => { 
            return p.hasSameCoordinatesWith(cmp);
        });
    }
    isConnected(): boolean {
        if(this.p.length == 2) {
            return this.p[0].isNeighborOf(this.p[1]);
        }
        else {
            return (this.p[0].isNeighborOf(this.p[1]) && this.p[1].isNeighborOf(this.p[2]))
                || (this.p[1].isNeighborOf(this.p[2]) && this.p[2].isNeighborOf(this.p[0]))
                || (this.p[2].isNeighborOf(this.p[0]) && this.p[0].isNeighborOf(this.p[1]));
        }
    }
    count(): number {
        return this.p.length;
    }
}