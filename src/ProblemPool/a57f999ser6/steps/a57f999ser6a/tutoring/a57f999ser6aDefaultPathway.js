var hints = [{id: "a57f999ser6a-h1", type: "hint", dependencies: [], title: "Find $$a_1$$", text: "To find $$a_1$$, substitute $$k=1$$ into the given explicit formula: $$a_k=\\left(3\\right) k-\\left(8\\right)$$", variabilization: {}}, {id: "a57f999ser6a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["a57f999ser6a-h1"], title: "Solve for $$a_1$$", text: "What is $$a_1=\\left(3\\right) \\left(1\\right)-\\left(8\\right)$$?", variabilization: {}}, {id: "a57f999ser6a-h3", type: "hint", dependencies: ["a57f999ser6a-h2"], title: "Find $$a_k$$", text: "We are given that $$n=12$$. To find $$a_{12}$$, substitute $$k=12$$ into the given explicit formula: $$a_k=\\left(3\\right) k-\\left(8\\right)$$", variabilization: {}}, {id: "a57f999ser6a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["28"], dependencies: ["a57f999ser6a-h3"], title: "Solve for $$a_{12}$$", text: "What is $$a_{12}=\\left(3\\right) \\left(12\\right)-\\left(8\\right)$$?", variabilization: {}}, {id: "a57f999ser6a-h5", type: "hint", dependencies: ["a57f999ser6a-h2", "a57f999ser6a-h4"], title: "Formula for Sum of the first n terms of Arithmetic Series", text: "Substitute values for $$a_1$$, $$a_n$$ , and n into the formula: $$S_n=\\frac{n \\left(a_1+a_n\\right)}{2}$$.", variabilization: {}}, {id: "a57f999ser6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["138"], dependencies: ["a57f999ser6a-h5"], title: "Formula for Sum of the first 12 terms of Arithmetic Series", text: "What is $$S_{12}=\\frac{\\left(12\\right) \\left(-\\left(5\\right)+\\left(28\\right)\\right)}{2}$$?", variabilization: {}}, {id: "a57f999ser6a-h7", type: "hint", dependencies: ["a57f999ser6a-h6"], title: "Sum of the first 12 terms of Arithmetic Series", text: "The Sum of the first 12 terms of Arithmetic Series is 138.", variabilization: {}}, ]; export {hints};