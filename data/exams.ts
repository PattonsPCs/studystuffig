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
    title: 'Midterm 1',
    time: 60,
    desc: 'Vectors, Curves, Geometry.',
    questions: [
      { q: "Area of Tri (1,0,0),(0,2,0),(0,0,3)?", options: ["3.5", "7", "3.5rt2"], ans: 0 },
      { q: "Proj <2,-1,4> on <-3,0,1>?", options: ["<-0.6,0,0.2>", "-2/rt10", "None"], ans: 0 },
      { q: "Dist skew lines?", options: ["3/rt14", "0", "1"], ans: 0 },
      { q: "Osculating plane t,t^2,t^3 at 0?", options: ["Find B", "z=0", "x=y"], ans: 0 },
      { q: "Angle if |uxv|=u.v?", options: ["45", "30", "60"], ans: 0 },
      { q: "Surface 4x^2-y^2+z^2=0?", options: ["Hyperboloid 1", "Cone", "Hyperboloid 2"], ans: 1 },
      { q: "Unit Tangent <cos t, sin t, t> at 0?", options: ["<0,1,0>", "<0,1/rt2,1/rt2>", "<1,0,0>"], ans: 1 },
      { q: "Curvature is 0 implies?", options: ["Line", "Circle", "Plane"], ans: 0 },
      { q: "Domain <ln(t+1), sqrt(1-t), 1/t>?", options: ["(-1,1) excluding 0", "(-1,1]", "t>-1"], ans: 0 },
      { q: "Plane through (1,1,1) norm <1,2,3>?", options: ["x+2y+3z=6", "x+y+z=3", "x+2y+3z=0"], ans: 0 }
    ]
  },
  {
    id: 'midterm2',
    title: 'Midterm 2',
    time: 60,
    desc: 'Partials, Opt, Integrals.',
    questions: [
      { q: "Linearize x^3y^4 at (1,1)?", options: ["3x+4y-6", "7x-7", "x+y"], ans: 0 },
      { q: "Max x+y+z on x^2+y^2+z^2=3?", options: ["3", "1", "rt3"], ans: 0 },
      { q: "Jacobian x=2u+v, y=u-v?", options: ["-3", "3", "1"], ans: 0 },
      { q: "Vol under z=xy [0,1]x[0,1]?", options: ["1/4", "1", "1/2"], ans: 0 },
      { q: "Switch int(0,1)int(x,1)?", options: ["int(0,1)int(0,y)", "int(0,1)int(y,1)", "Same"], ans: 0 },
      { q: "Directional Deriv max value?", options: ["|Grad f|", "0", "Grad f . u"], ans: 0 },
      { q: "D=0 in 2nd Partial Test?", options: ["Inconclusive", "Saddle", "Max"], ans: 0 },
      { q: "Area of circle r=2?", options: ["4pi", "2pi", "pi"], ans: 0 },
      { q: "Limit x^2/(x^2+y^2)?", options: ["DNE", "0", "1"], ans: 0 },
      { q: "Volume bounded by z=1-x^2-y^2?", options: ["pi/2", "pi", "2pi"], ans: 0 }
    ]
  },
  {
    id: 'final',
    title: 'Final Exam',
    time: 120,
    desc: 'Comprehensive.',
    questions: [
      { q: "Flux <x,y,z> sphere rad 1?", options: ["4pi", "4/3pi", "0"], ans: 0 },
      { q: "Green's Area Formula?", options: ["Int x dy", "Int y dx", "Int x dx"], ans: 0 },
      { q: "Work <y,-x> unit circle?", options: ["-2pi", "2pi", "0"], ans: 0 },
      { q: "Stokes evaluates?", options: ["Circulation", "Flux", "Mass"], ans: 0 },
      { q: "Div Thm relates flux to?", options: ["Vol Int Div", "Surf Int", "Line"], ans: 0 },
      { q: "Surface Area of sphere rad R?", options: ["4pi R^2", "4/3 pi R^3", "pi R^2"], ans: 0 },
      { q: "Integral F.dr path independent if?", options: ["Curl F = 0", "Div F = 0", "Closed"], ans: 0 },
      { q: "Mass of wire density k?", options: ["k * ArcLength", "k * Area", "0"], ans: 0 },
      { q: "Curl of Gradient?", options: ["0", "1", "Grad f"], ans: 0 },
      { q: "Div of Curl?", options: ["0", "1", "Curl F"], ans: 0 }
    ]
  }
]

