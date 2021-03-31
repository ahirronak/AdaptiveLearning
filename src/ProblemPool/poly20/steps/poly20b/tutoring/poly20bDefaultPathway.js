var hints = [{id: "poly20b-h1", type: "hint", dependencies: [], title: "Perfect Square Trinomial Formula", text: "When a binomial is squared, the result is a perfect square trinomial. Use the formula: $$x^2$$ + 2ax + $$a^2$$"}, {id: "poly20b-h2", type: "hint", dependencies: ["poly20b-h1"], title: "Perfect Square Trinomial Formula", text: "Square the first term of the binomial."}, {id: "poly20b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9y^2"], dependencies: ["poly20b-h2"], title: "Perfect Square Trinomial Formula", text: "What is the product?"}, {id: "poly20b-h4", type: "hint", dependencies: ["poly20b-h3"], title: "Perfect Square Trinomial Formula", text: "Square the last term of the binomial."}, {id: "poly20b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["49"], dependencies: ["poly20b-h4"], title: "Perfect Square Trinomial Formula", text: "What is the product?"}, {id: "poly20b-h6", type: "hint", dependencies: ["poly20b-h5"], title: "Perfect Square Trinomial Formula", text: "For the middle term of the trinomial, double the product of the two terms."}, {id: "poly20b-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-42"], dependencies: ["poly20b-h6"], title: "Perfect Square Trinomial Formula", text: "What is the product?"}, {id: "poly20b-h8", type: "hint", dependencies: ["poly20b-h7"], title: "Combine Like Terms", text: "Add and simplify."}, ]; export {hints};