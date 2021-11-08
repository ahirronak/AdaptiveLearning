var hints = [{id: "SubAdd2a-h1", type: "hint", dependencies: [], title: "Substitution", text: "Substitute the number in for the variable in the equation.", variabilization: {}}, {id: "SubAdd2a-h2", type: "hint", dependencies: ["SubAdd2a-h1"], title: "Substitution", text: "After substituting $$y=\\frac{4}{3}$$ into the equation, we get $$\\left(9\\right) \\frac{4}{3}+\\left(2\\right)=\\left(6\\right) \\frac{4}{3}+\\left(3\\right)$$.", variabilization: {}}, {id: "SubAdd2a-h3", type: "hint", dependencies: ["SubAdd2a-h2"], title: "Simplification", text: "Simplify the expressions on both sides of the equation.", variabilization: {}}, {id: "SubAdd2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(12\\right)+\\left(2\\right)$$"], dependencies: ["SubAdd2a-h3"], title: "Simplification", text: "Simplify the left side of the equation.", variabilization: {}}, {id: "SubAdd2a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(8\\right)+\\left(3\\right)$$"], dependencies: ["SubAdd2a-h4"], title: "Simplification", text: "Simplify the right side of the equation.", variabilization: {}}, {id: "SubAdd2a-h6", type: "hint", dependencies: ["SubAdd2a-h5"], title: "Comparison", text: "Determine whether the resulting equation is true.", variabilization: {}}, {id: "SubAdd2a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["FALSE"], dependencies: ["SubAdd2a-h6"], title: "Comparison", text: "Determine whether $$\\left(12\\right)+\\left(2\\right)$$ equals $$\\left(8\\right)+\\left(3\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};