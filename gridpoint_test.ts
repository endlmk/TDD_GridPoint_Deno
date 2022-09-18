import { assert, assertEquals, assertFalse, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { GridPoint, GridPoints } from "./gridpoint.ts"

Deno.test("格子点を生成し、座標と文字列表記を得る", () => {
    const p4_7 = new GridPoint(4, 7);
    assertEquals(p4_7.getX(), 4);
    assertEquals(p4_7.getY(), 7);
    assertEquals(p4_7.getNotation(), "(4, 7)");
});

Deno.test("同じ座標を持つか判定できる", () => {
    const p4_7 = new GridPoint(4, 7);
    assert(p4_7.hasSameCoordinatesWith(new GridPoint(4, 7)));
    assertFalse(p4_7.hasSameCoordinatesWith(new GridPoint(3, 8)));
});

Deno.test("隣り合う格子を判定できる", () => {
    const p4_7 = new GridPoint(4, 7);
    assert(p4_7.isNeighborOf(new GridPoint(3, 7)));
    assert(p4_7.isNeighborOf(new GridPoint(5, 7)));
    assert(p4_7.isNeighborOf(new GridPoint(4, 6)));
    assert(p4_7.isNeighborOf(new GridPoint(4, 8)));
    assertFalse(p4_7.isNeighborOf(new GridPoint(3, 8)));
    assertFalse(p4_7.isNeighborOf(new GridPoint(4, 7)));
});

Deno.test("格子点集合が指定した格子点を含むか判定できる", () => {
    const points = new GridPoints(new GridPoint(4, 7), new GridPoint(5, 8));
    assert(points.containsPoint(new GridPoint(4, 7)));
    assertFalse(points.containsPoint(new GridPoint(5, 7)));
});

Deno.test("格子点集合が連結しているか判定できる", () => {
    const points1 = new GridPoints(new GridPoint(4, 7), new GridPoint(5, 7));
    assert(points1.isConnected());
    const points2 = new GridPoints(new GridPoint(4, 7), new GridPoint(5, 8));
    assertFalse(points2.isConnected());    
});

Deno.test("同じ格子点で格子点集合を作れない", () => {
    assertThrows(
        () => {
            new GridPoints(new GridPoint(4, 7), new GridPoint(4, 7));
        },
        Error,
        "Same GridPoint exists."
    )
});

Deno.test("3つの格子点で格子点集合を作れる", () => {
    const points = new GridPoints(
        new GridPoint(4, 7),
        new GridPoint(5, 7),
        new GridPoint(6, 7)
    );
    assert(points.containsPoint(new GridPoint(6, 7)));
});

Deno.test("3つの格子点が連結しているか判定できる", () => {
    {
        const points = new GridPoints(
            new GridPoint(4, 7),
            new GridPoint(5, 7),
            new GridPoint(6, 7)
        );
        assert(points.isConnected());
    }
    {
        const points = new GridPoints(
            new GridPoint(5, 7),
            new GridPoint(4, 7),
            new GridPoint(5, 6)
        );
        assert(points.isConnected());
    }
    {
        const points = new GridPoints(
            new GridPoint(6, 6),
            new GridPoint(4, 6),
            new GridPoint(5, 6)
        );
        assert(points.isConnected());
    }
    {
        const points = new GridPoints(
            new GridPoint(3, 7),
            new GridPoint(5, 7),
            new GridPoint(5, 6)
        );
        assertFalse(points.isConnected());
    }
    {
        const points = new GridPoints(
            new GridPoint(4, 7),
            new GridPoint(5, 7),
            new GridPoint(6, 6)
        );
        assertFalse(points.isConnected());
    }
    {
        const points = new GridPoints(
            new GridPoint(4, 7),
            new GridPoint(2, 7),
            new GridPoint(4, 6)
        );
        assertFalse(points.isConnected());
    }
});

Deno.test("格子点集合から格子点の数を取得できる", () => {
    const points1 = new GridPoints(
        new GridPoint(4, 7),
        new GridPoint(5, 7));
    assertEquals(points1.count(), 2);

    const points2 = new GridPoints(
        new GridPoint(4, 7),
        new GridPoint(2, 7),
        new GridPoint(4, 6)
    );
    assertEquals(points2.count(), 3);
});