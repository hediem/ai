import React from "react";
import { triangle } from "./Triangle";

function nodeValidate(lines, points, player) {
  let i = 0;
  for (let j = 0; j < points.length; j++) {
    if (deg(lines, points[j], player) == 1) i += 1;
    if (deg(lines, points[j], player) > 1) i += 6;
    if (deg(lines, points[j], player) == 1) i -= 1;
    if (deg(lines, points[j], player) > 1) i -= 4;
  }
  if (triangle(lines, 1)) i = Number.POSITIVE_INFINITY;
  if (triangle(lines, 2)) i = Number.NEGATIVE_INFINITY;
  return i;
}

function deg(lines, point, player) {
  lines.reduce((degree, line) => {
    if (
      line.type == player &&
      (line.id.p1 == point.id || line.id.p2 == point.id)
    )
      return degree + 1;
    return degree;
  }, 0);
}

export { nodeValidate };
