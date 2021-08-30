var hints = [{id: "spe7a-h1", type: "hint", dependencies: [], title: "Subtraction Binomial Square Formula", text: "We compare our expression to the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2-\\left(2\\right) a b+b^2$$.", variabilization: {}}, {id: "spe7a-h2", type: "hint", dependencies: ["spe7a-h1"], title: "Compare the Binomial", text: "$${\\left(a-b\\right)}^2$$ $${\\left(b-\\left(7\\right)\\right)}^2$$", variabilization: {}}, {id: "spe7a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["b"], dependencies: ["spe7a-h2"], title: "Identify a", text: "What is a in the expression?", variabilization: {}}, {id: "spe7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["spe7a-h3"], title: "Identify b", text: "What is b in the expression?", variabilization: {}}, {id: "spe7a-h5", type: "hint", dependencies: ["spe7a-h3", "spe7a-h4"], title: "Plug in the Terms", text: "Substitute $$a=b$$ and $$b=7$$ into the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2+\\left(2\\right) a b+b^2$$ $${\\left(b-\\left(7\\right)\\right)}^2=b^2-\\left(2\\right) b \\left(7\\right)+{\\left(7\\right)}^2$$", variabilization: {}}, {id: "spe7a-h6", type: "hint", dependencies: ["spe7a-h5"], title: "Simplify", text: "$$b^2-\\left(14\\right) y+\\left(49\\right)$$", variabilization: {}}, ]; export {hints};