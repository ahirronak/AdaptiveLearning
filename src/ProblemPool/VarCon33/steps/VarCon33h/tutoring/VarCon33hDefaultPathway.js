var hints = [{id: "VarCon33h-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon33h-h2", type: "hint", dependencies: ["VarCon33h-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon33h-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m-7=-13"], dependencies: ["VarCon33h-h2"], title: "Subtraction", text: "Subtract $$\\frac{3}{4} m$$ from each side."}, {id: "VarCon33h-h4", type: "hint", dependencies: ["VarCon33h-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon33h-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m=-6"], dependencies: ["VarCon33h-h4"], title: "Addition", text: "Add 7 to each side of the equation."}, {id: "VarCon33h-h6", type: "hint", dependencies: ["VarCon33h-h5"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon33h-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33h-h6"], title: "Verification", text: "Check whether $$\\frac{7}{4} \\left(-6\\right)-\\left(7\\right)$$ equals $$\\frac{3}{4} \\left(-6\\right)-\\left(13\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};