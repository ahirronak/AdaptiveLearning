var hints = [{id: "ab303f8factoring13a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3y^2$$"], dependencies: [], title: "Common Factor", text: "What is the common factor of the polynomial?", variabilization: {}}, {id: "ab303f8factoring13a-h2", type: "hint", dependencies: ["ab303f8factoring13a-h1"], title: "Factoring", text: "Factor out the GCF.", variabilization: {}}, {id: "ab303f8factoring13a-h3", type: "hint", dependencies: ["ab303f8factoring13a-h2"], title: "Goal", text: "Determine if the trinomial is a perfect square.", variabilization: {}}, {id: "ab303f8factoring13a-h4", type: "hint", dependencies: ["ab303f8factoring13a-h3"], title: "Standard form of a trinomial", text: "Check if the trinomial follow the pattern of $$a^2-b^2$$", variabilization: {}}, {id: "ab303f8factoring13a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4x^2$$"], dependencies: ["ab303f8factoring13a-h4"], title: "Square Roots", text: "What is the square root of $$64y^2$$?", variabilization: {}}, {id: "ab303f8factoring13a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["ab303f8factoring13a-h5"], title: "Square Roots", text: "What is the square root of 9?", variabilization: {}}, {id: "ab303f8factoring13a-h7", type: "hint", dependencies: ["ab303f8factoring13a-h6"], title: "Manipulate", text: "Organize the term into $$3y^{2\\left(4x^2-9\\right)} \\left(4x^2+9\\right)$$", variabilization: {}}, ]; export {hints};