var hints = [{id: "a20771equad28a-h1", type: "hint", dependencies: [], title: "Factoring", text: "Look for two numbers whose product equals -21 and whose sum equals -4.", variabilization: {}}, {id: "a20771equad28a-h2", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["-7, 3"], dependencies: ["a20771equad28a-h1"], title: "Factoring", text: "Look at the possible factors of -21. Which pair of factors is equal -4?", variabilization: {}}, {id: "a20771equad28a-h3", type: "hint", dependencies: ["a20771equad28a-h2"], title: "Factoring", text: "The factors will be $$\\left(x-\\left(7\\right)\\right) \\left(x+\\left(3\\right)\\right)=0$$. Solve the equation.", variabilization: {}}, {id: "a20771equad28a-h4", type: "hint", dependencies: ["a20771equad28a-h3"], title: "Zero-Product Property", text: "Use the zero-product property. Set each factor equal to zero and solve.", variabilization: {}}, {id: "a20771equad28a-h5", type: "hint", dependencies: ["a20771equad28a-h4"], title: "Zero-Product Property", text: "Solve $$(x-7)=0$$.", variabilization: {}}, {id: "a20771equad28a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["a20771equad28a-h5"], title: "Solving Equations", text: "What is x equal to?", variabilization: {}}, {id: "a20771equad28a-h7", type: "hint", dependencies: ["a20771equad28a-h4"], title: "Zero-Product Property", text: "Solve $$x+\\left(3\\right)=0$$.", variabilization: {}}, {id: "a20771equad28a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["a20771equad28a-h7"], title: "Solving Equations", text: "What is x equal to?", variabilization: {}}, {id: "a20771equad28a-h9", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["3, -3"], dependencies: ["a20771equad28a-h6", "a20771equad28a-h8"], title: "X-Intercepts", text: "What are the solutions?", variabilization: {}}, ]; export {hints};