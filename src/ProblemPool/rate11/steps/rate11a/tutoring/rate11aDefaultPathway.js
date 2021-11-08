var hints = [{id: "rate11a-h1", type: "hint", dependencies: [], title: "The difference $$y_2-y_1$$", text: "We should first calculate the difference of the function evaluated at the two endpoints.", variabilization: {}}, {id: "rate11a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(4\\right) b^2-\\left(4\\right)$$"], dependencies: ["rate11a-h1"], title: "The difference $$y_2-y_1$$", text: "What is the difference between f(b) and f(1)?", choices: ["$$\\left(4\\right) b^2-\\left(10\\right)$$", "$$\\left(4\\right) b^2-\\left(3\\right)$$", "$$\\left(4\\right) b^2-\\left(4\\right)$$"], variabilization: {}}, {id: "rate11a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(4\\right) \\left(b+\\left(1\\right)\\right) \\left(b-\\left(1\\right)\\right)$$"], dependencies: ["rate11a-h2"], title: "Rearrangement", text: "How can we rearrange the above expression?", choices: ["$$\\left(4\\right) {\\left(b+\\left(1\\right)\\right)}^2$$", "$$\\left(4\\right) {\\left(b-\\left(1\\right)\\right)}^2$$", "$$\\left(4\\right) \\left(b+\\left(1\\right)\\right) \\left(b-\\left(1\\right)\\right)$$"], variabilization: {}}, {id: "rate11a-h4", type: "hint", dependencies: ["rate11a-h3"], title: "The difference $$x_2-x_1$$", text: "We should then calculate the difference of the two endpoints x values.", variabilization: {}}, {id: "rate11a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["b-1"], dependencies: ["rate11a-h4"], title: "The difference $$x_2-x_1$$", text: "What is the difference between b and 1?", variabilization: {}}, {id: "rate11a-h6", type: "hint", dependencies: ["rate11a-h5"], title: "The ratio", text: "We should last find the ratio of the difference in y and the difference in x.", variabilization: {}}, {id: "rate11a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(4\\right) \\left(b+\\left(1\\right)\\right)$$"], dependencies: ["rate11a-h6"], title: "The ratio", text: "What is the ratio of the difference in y and the difference in x?", choices: ["$$\\left(4\\right) \\left(b-\\left(3\\right)\\right)$$", "$$\\left(4\\right) \\left(b-\\left(1\\right)\\right)$$", "$$\\left(4\\right) \\left(b+\\left(1\\right)\\right)$$"], variabilization: {}}, ]; export {hints};