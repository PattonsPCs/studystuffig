export interface QuizQuestion {
  q: string
  options: string[]
  ans: number
  exp: string
}

export interface Quiz {
  title: string
  questions: QuizQuestion[]
}

export const quizData: Record<string, Quiz> = {
  'q1': {
    title: 'Mod 1 Quiz',
    questions: [
      { q: "Proj of <1,2,3> onto <0,0,1>?", options: ["<0,0,1>", "<0,0,3>", "3"], ans: 1, exp: "Scalar is 3, Vector is <0,0,3>" },
      { q: "u x v = 0 means:", options: ["Orthogonal", "Parallel", "Equal"], ans: 1, exp: "Area is 0." },
      { q: "Cylindrical (2, pi/2, 3) to Rect?", options: ["(0,2,3)", "(2,0,3)", "(0,3,2)"], ans: 0, exp: "x=0, y=2, z=3" },
      { q: "Sphere shifted up z?", options: ["rho=2sin(phi)", "rho=2cos(phi)", "rho=2"], ans: 1, exp: "rho^2 = 2z" },
      { q: "u.(v x u)?", options: ["1", "0", "|u|"], ans: 1, exp: "Triple product with duplicate vector is 0" }
    ]
  },
  'q2': {
    title: 'Mod 2 Quiz',
    questions: [
      { q: "Dist (1,1,1) to x+y+z=0?", options: ["1", "sqrt(3)", "3"], ans: 1, exp: "|3|/sqrt(3)=sqrt(3)" },
      { q: "z = x^2 - y^2 is:", options: ["Ellipsoid", "Saddle", "Cup"], ans: 1, exp: "Hyperbolic Paraboloid" },
      { q: "Lines <1,0,0> and <0,1,0>:", options: ["Parallel", "Skew/Intersect", "Equal"], ans: 1, exp: "Different directions" },
      { q: "Trace of x^2+y^2-z^2=1 at z=0?", options: ["Hyperbola", "Circle", "Line"], ans: 1, exp: "Circle" },
      { q: "Normal to 3x-2y=5?", options: ["<3,-2,0>", "<3,-2,5>", "<-3,2,0>"], ans: 0, exp: "Coeffs of x,y,z" }
    ]
  },
  'q3': {
    title: 'Mod 3 Quiz',
    questions: [
      { q: "Speed constant => a, v are:", options: ["Parallel", "Orthogonal", "Skew"], ans: 1, exp: "Tangential accel is 0" },
      { q: "Max curvature y=x^2?", options: ["(0,0)", "(1,1)", "(2,4)"], ans: 0, exp: "Vertex" },
      { q: "Int r'(t) dt?", options: ["Arc Length", "Displacement", "Speed"], ans: 1, exp: "FTC" },
      { q: "T(t) length?", options: ["1", "0", "Variable"], ans: 0, exp: "Unit vector" },
      { q: "B = ?", options: ["T x N", "N x T", "T . N"], ans: 0, exp: "Definition" }
    ]
  },
  'q4': {
    title: 'Mod 4 Quiz',
    questions: [
      { q: "Limit xy/(x^2+y^2)?", options: ["0", "1/2", "DNE"], ans: 2, exp: "Paths differ" },
      { q: "Grad f points:", options: ["Max Decrease", "Max Increase", "Level"], ans: 1, exp: "Steepest ascent" },
      { q: "D>0, fxx<0?", options: ["Min", "Max", "Saddle"], ans: 1, exp: "Concave down" },
      { q: "Lagrange condition?", options: ["Grad f || Grad g", "Grad f perp Grad g", "Equal"], ans: 0, exp: "Parallel gradients" },
      { q: "fx of x^y?", options: ["yx^(y-1)", "x^y ln x", "0"], ans: 0, exp: "Power rule" }
    ]
  },
  'q5': {
    title: 'Mod 5 Quiz',
    questions: [
      { q: "Polar Jacobian?", options: ["1", "r", "r^2"], ans: 1, exp: "dA = r dr dth" },
      { q: "Int 1 dV?", options: ["Mass", "Volume", "Area"], ans: 1, exp: "Volume of region" },
      { q: "Coords for circle?", options: ["Rect", "Polar", "Spherical"], ans: 1, exp: "Polar is best" },
      { q: "Switch dx dy to dy dx?", options: ["Same bounds", "New bounds", "Invert"], ans: 1, exp: "Must re-eval bounds" },
      { q: "Spherical dV?", options: ["rho^2 sin(phi)", "rho^2", "r"], ans: 0, exp: "Scaling factor" }
    ]
  },
  'q6': {
    title: 'Mod 6/7 Quiz',
    questions: [
      { q: "Conservative => Curl?", options: ["0", "1", "Undef"], ans: 0, exp: "Irrotational" },
      { q: "Green's applies to?", options: ["Solids", "Closed 2D Curves", "Lines"], ans: 1, exp: "Boundary of D" },
      { q: "Flux through closed surface?", options: ["Div Thm", "Stokes", "Greens"], ans: 0, exp: "Integral of Div" },
      { q: "Work conservative closed path?", options: ["Area", "0", "Mass"], ans: 1, exp: "Path independent" },
      { q: "Stokes relates Line to:", options: ["Surface Curl", "Volume Div", "Area"], ans: 0, exp: "Circulation = Flux of Curl" }
    ]
  },
  'q7': {
    title: 'Review Quiz',
    questions: [
      { q: "Tangent plane eq?", options: ["z-z0=fx..", "z=fx+fy", "Normal=0"], ans: 0, exp: "Linearization" },
      { q: "Arc length?", options: ["Int |r'|", "Int r'", "r(b)-r(a)"], ans: 0, exp: "Speed integral" },
      { q: "Center of Mass X?", options: ["Myz/m", "Mxz/m", "m/Myz"], ans: 0, exp: "Moment/Mass" },
      { q: "Surface Area?", options: ["|ru x rv|", "ru.rv", "ru x rv"], ans: 0, exp: "Mag of cross prod" },
      { q: "Fund Thm Line Int?", options: ["Conservative", "Closed", "Simple"], ans: 0, exp: "Gradient field" }
    ]
  }
}

