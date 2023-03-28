let shapes = {
  circle: {
    name: "circle",
    title: "Circle",
    textToDisplay: "2. Enter Radius",
    tableContents: {
      RADIUS: "r",
      AREA: "πr²",
      PERIMETER: "2*π*r",
    },
    calcArea: (radius) => {
      return Math.PI * radius * radius;
    },
    calcPerimeter: (radius) => {
      return 2 * Math.PI * radius;
    },
  },
  square: {
    name: "square",
    title: "Square",
    textToDisplay: "2. Enter Side",
    tableContents: {
      SIDE: "s",
      AREA: "s * s",
      PERIMETER: "4 * s",
    },
    calcArea: (side) => {
      return side * side;
    },
    calcPerimeter: (side) => {
      return 4 * side;
    },
  },
  triangle: {
    name: "triangle",
    title: "Equilateral Triangle",
    textToDisplay: "2. Enter Side (Base & Height)",
    tableContents: {
      SIDE: "s",
      AREA: "0.433 * s * s",
      PERIMETER: "3 * s",
    },
    calcArea: (side) => {
      return 0.433 * side * side;
    },
    calcPerimeter: (side) => {
      return 3 * side;
    },
  },
};
