var hints = [{id: "VarCon17c-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "VarCon17c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5b=-15"], dependencies: ["VarCon17c-h1"], title: "Addition", text: "Add 4b to each side of the equation."}, {id: "VarCon17c-h3", type: "hint", dependencies: ["VarCon17c-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon17c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["b=-3"], dependencies: ["VarCon17c-h3"], title: "Division", text: "Divide 5 from each side."}, {id: "VarCon17c-h5", type: "hint", dependencies: ["VarCon17c-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon17c-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon17c-h5"], title: "Verification", text: "Check whether -3 equals $$-\\left(4\\right) \\left(-3\\right)-\\left(15\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};