import { assert, assertEquals, assertFalse } from "https://deno.land/std/testing/asserts.ts";
import { GridPoint } from "./gridpoint.ts"

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