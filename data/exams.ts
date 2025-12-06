export interface ExamQuestion {
  q: string
  options: string[]
  ans: number
}

export interface Exam {
  id: string
  title: string
  time: number
  desc: string
  questions: ExamQuestion[]
}

export const exams: Exam[] = [
  {
    id: 'midterm1',
    title: 'Midterm 1: Vectors & Curves',
    time: 60,
    desc: 'Vectors, Lines, Planes, Curves, Motion. (Hard)',
    questions: [
      { q: "Find the scalar projection of b=<1,1,2> onto a=<-2,3,1>.", options: ["3/sqrt(14)", "3/sqrt(6)", "1/2", "0"], ans: 0 },
      { q: "Area of parallelogram spanned by u=<1,0,1> and v=<0,2,1>?", options: ["3", "sqrt(5)", "sqrt(9)", "sqrt(14)"], ans: 0 },
      { q: "Parametric eq of line through (1,2,3) perp to plane 2x-y+z=10?", options: ["x=1+2t, y=2-t, z=3+t", "x=1+2t, y=2+t, z=3+t", "x=2t, y=-t, z=t", "x=1-2t, y=2+t, z=3-t"], ans: 0 },
      { q: "Dist from point (1,1,1) to line x=t, y=t, z=t?", options: ["0", "sqrt(2)", "1", "sqrt(3)"], ans: 0 },
      { q: "Angle between diagonal of cube and one of its edges?", options: ["cos^-1(1/sqrt(3))", "45 deg", "30 deg", "60 deg"], ans: 0 },
      { q: "Curvature of r(t)=<t, t^2, 0> at origin?", options: ["2", "1", "0", "0.5"], ans: 0 },
      { q: "Arc length r(t)=<e^t cos t, e^t sin t> from 0 to ln(2)?", options: ["sqrt(2)", "sqrt(2)(1)", "e", "2"], ans: 0 },
      { q: "Particle pos r(t)=<3cos t, 3sin t, 4t>. Total distance 0 to 10?", options: ["50", "30", "40", "10"], ans: 0 },
      { q: "Osculating plane of helix <cos t, sin t, t> at t=0?", options: ["y-z=0", "x=1", "z=0", "y+z=0"], ans: 0 },
      { q: "Normal component of accel for r(t)=<t, t^2> at t=0?", options: ["2", "0", "1", "4"], ans: 0 }
    ]
  },
  {
    id: 'midterm2',
    title: 'Midterm 2: Partials & Integrals',
    time: 60,
    desc: 'Partial Derivs, Optimization, Multiple Integrals. (Hard)',
    questions: [
      { q: "Tangent plane to x^2+y^2+z^2=3 at (1,1,1)?", options: ["x+y+z=3", "x+y+z=1", "2x+2y+2z=6", "x-y+z=1"], ans: 0 },
      { q: "Linear approx of f(x,y)=x^3 y^4 at (1,1)?", options: ["3x+4y-6", "L(x,y)=1", "7x+7y", "3x+4y"], ans: 0 },
      { q: "Min value of x^2+y^2 on line x+y=1?", options: ["1/2", "1", "0", "2"], ans: 0 },
      { q: "Integral of x dA over triangle (0,0)-(1,0)-(1,1)?", options: ["1/3", "1/2", "1/6", "1"], ans: 0 },
      { q: "Volume under z=xy over unit square?", options: ["1/4", "1", "1/2", "1/8"], ans: 0 },
      { q: "Evaluate Int(0 to 1) Int(y to 1) e^(x^2) dx dy.", options: ["(e-1)/2", "e-1", "e/2", "1"], ans: 0 },
      { q: "Spherical coord integral of 1 over unit ball?", options: ["4pi/3", "pi", "2pi", "4pi"], ans: 0 },
      { q: "Jacobian of transformation x=2u, y=3v?", options: ["6", "5", "1", "2/3"], ans: 0 },
      { q: "COM of lamina D={(x,y): x^2+y^2<=1, y>=0}, density 1?", options: ["(0, 4/(3pi))", "(0, 0.5)", "(0, 1)", "(0, 4/3)"], ans: 0 },
      { q: "Max directional deriv of f=x^2-y^2 at (1,2)?", options: ["2sqrt(5)", "sqrt(5)", "5", "0"], ans: 0 }
    ]
  },
  {
    id: 'final',
    title: 'Final Exam: Comprehensive',
    time: 120,
    desc: 'All topics including Vector Calculus. (Very Hard)',
    questions: [
      { q: "Flux of F=<x,y,z> through surface of cube [-1,1]^3?", options: ["24", "8", "6", "12"], ans: 0 },
      { q: "Work of F=<y, -x> around circle x^2+y^2=4 CCW?", options: ["-8pi", "8pi", "0", "4pi"], ans: 0 },
      { q: "Surface area of part of z=xy inside cylinder x^2+y^2=1?", options: ["2pi(sqrt(8)-1)/3", "pi", "2pi", "4pi/3"], ans: 0 },
      { q: "Divergence of Curl of F?", options: ["0", "1", "undefined", "F"], ans: 0 },
      { q: "Is F=<y^2, 2xy+e^z, ye^z> conservative?", options: ["Yes", "No", "Almost", "Depends"], ans: 0 },
      { q: "Stokes Thm value for F=<y,z,x> on unit disk in xy-plane (normal k)?", options: ["-pi", "pi", "0", "2pi"], ans: 0 },
      { q: "Limits: lim (x,y)->(0,0) (x^2-y^2)/(x^2+y^2)?", options: ["DNE", "0", "1", "-1"], ans: 0 },
      { q: "Distance between skew lines L1:<t,t,t> L2:<t+1, 2t, 3t>?", options: ["sqrt(6)/6", "0", "1", "sqrt(2)"], ans: 0 },
      { q: "Volume of tetrahedron cut by plane x/a + y/b + z/c = 1?", options: ["abc/6", "abc/3", "abc", "abc/2"], ans: 0 },
      { q: "Line integral F=<x,y> along y=x^2 from (0,0) to (1,1)?", options: ["1", "0", "1/2", "2"], ans: 0 }
    ]
  }
]
