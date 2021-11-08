var hints = [{id: "LinIneq8a-h1", type: "hint", dependencies: [], title: "Break Down the Compound Inequality", text: "We can simplify the compound inequality by writing it as two separte inequalities: $$\\left(3\\right)+x>\\left(7\\right) x-\\left(2\\right)$$, $$\\left(7\\right) x-\\left(2\\right)>\\left(5\\right) x-\\left(10\\right)$$. The solution would be their intersection.", variabilization: {}}, {id: "LinIneq8a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{5}{6}>x$$"], dependencies: ["LinIneq8a-h1"], title: "Solving Simple Inequality", text: "What does solving $$\\left(3\\right)+x>\\left(7\\right) x-\\left(1\\right)$$ give us?", choices: ["$$\\frac{5}{6}>x$$", "$$\\frac{5}{6}<x$$", "$$\\frac{5}{8}>x$$", "$$\\frac{5}{8}<x$$"], subHints: [{id: "LinIneq8a-h2-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$3>\\left(6\\right) x-\\left(2\\right)$$"], dependencies: [], title: "Combine Variable Terms", text: "What inequality do we get after combining the vairable terms?", choices: ["$$3>\\left(8\\right) x-\\left(2\\right)$$", "$$3>\\left(6\\right) x-\\left(2\\right)$$"], variabilization: {}}, {id: "LinIneq8a-h2-s2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$5>\\left(6\\right) x$$"], dependencies: ["LinIneq8a-h2-s1"], title: "Isolate Variable Term", text: "What inequality do we get after isolating the vairable terms?", choices: ["$$5>\\left(6\\right) x$$", "$$1>\\left(6\\right) x$$"], variabilization: {}}, {id: "LinIneq8a-h2-s3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{5}{6}>x$$"], dependencies: ["LinIneq8a-h2-s2"], title: "Eliminate Coefficient", text: "What inequality do we get after eliminating the coeffienct of x?", choices: ["$$\\frac{5}{6}>x$$", "$$\\frac{5}{6}<x$$"], variabilization: {}}], variabilization: {}}, {id: "LinIneq8a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x>-\\left(4\\right)$$"], dependencies: ["LinIneq8a-h1"], title: "Solving Simple Inequality", text: "What does solving $$\\left(7\\right) x-\\left(2\\right)>\\left(5\\right) x-\\left(10\\right)$$ give us?", choices: ["$$x>-\\left(6\\right)$$", "$$x<-\\left(6\\right)$$", "$$x>-\\left(4\\right)$$", "$$x<-\\left(4\\right)$$"], subHints: [{id: "LinIneq8a-h3-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) x-\\left(2\\right)>-\\left(10\\right)$$"], dependencies: [], title: "Combine Variable Terms", text: "What inequality do we get after combining the vairable terms?", choices: ["$$\\left(2\\right) x-\\left(2\\right)>-\\left(10\\right)$$", "$$\\left(2\\right) x-\\left(2\\right)<-\\left(10\\right)$$"], variabilization: {}}, {id: "LinIneq8a-h3-s2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) x>-\\left(8\\right)$$"], dependencies: ["LinIneq8a-h3-s1"], title: "Isolate Variable Term", text: "What inequality do we get after isolating the vairable terms?", choices: ["$$\\left(2\\right) x>-\\left(8\\right)$$", "$$\\left(2\\right) x>-\\left(12\\right)$$"], variabilization: {}}, {id: "LinIneq8a-h3-s3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x>-\\left(4\\right)$$"], dependencies: ["LinIneq8a-h3-s2"], title: "Eliminate Coefficient", text: "What inequality do we get after eliminating the coeffienct of x?", choices: ["$$x>-\\left(4\\right)$$", "$$x<-\\left(4\\right)$$"], variabilization: {}}], variabilization: {}}, {id: "LinIneq8a-h4", type: "hint", dependencies: ["LinIneq8a-h2", "LinIneq8a-h3"], title: "Intersection of the Two Simple Inequalities", text: "The intersection of the two simple inequalities is $$-\\left(4\\right)<x<\\frac{5}{6}$$.", variabilization: {}}, ]; export {hints};