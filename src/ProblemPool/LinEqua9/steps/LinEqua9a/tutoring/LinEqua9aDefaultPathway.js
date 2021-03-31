var hints = [{id: "LinEqua9a-h1", type: "hint", dependencies: [], title: "Factoring the denominator", text: "The three denominators in factored form are x, $$10=\\left(2\\right) \\left(5\\right)$$, and $$4x=\\left(2\\right) \\left(2\\right) x$$."}, {id: "LinEqua9a-h2", type: "hint", dependencies: ["LinEqua9a-h1"], title: "Find LCD", text: "The LCD is the smallest expression that is divisible by each one of the denominators."}, {id: "LinEqua9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20x"], dependencies: ["LinEqua9a-h2"], title: "LCD", text: "What is the LCD of this equation?"}, {id: "LinEqua9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["20=2x-15"], dependencies: ["LinEqua9a-h3"], title: "Eliminating", text: "Simplify $$\\left(20\\right) x \\frac{1}{x}=\\left(20\\right) x \\left(\\frac{1}{10}-\\frac{3}{4} x\\right)$$"}, {id: "LinEqua9a-h5", type: "hint", dependencies: ["LinEqua9a-h4"], title: "Solve equation", text: "Then we should solve the linear equation obtained."}, {id: "LinEqua9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=35/2"], dependencies: ["LinEqua9a-h5"], title: "Linear equation", text: "Solve the linear equation $$20=2x-15$$."}, ]; export {hints};