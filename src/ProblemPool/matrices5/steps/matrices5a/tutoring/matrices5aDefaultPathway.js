var hints = [{id: "matrices5a-h1", type: "hint", dependencies: [], title: "Scalar Multiplication", text: "Scalar multiplication involves finding the product of a constant by each entry in the matrix. Given $$A=\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}$$, the scalar multiple \\n $$c A$$ is $$c A=c*\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}=\\begin{bmatrix} c a_{11} & c a_{12} \\\\ c a_{21} & c a_{22} \\end{bmatrix}$$", variabilization: {}}, {id: "matrices5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["matrices5a-h1"], title: "Scalar Multiplication", text: "Multiply each entry in C by scalar $$\\frac{1}{2}$$. What is the top left entry, $$c_{11}$$?", variabilization: {}}, {id: "matrices5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["45"], dependencies: ["matrices5a-h2"], title: "Scalar Multiplication", text: "What is the bottom left entry, $$c_{21}$$, after multiplying by $$\\frac{1}{2}$$?", variabilization: {}}, {id: "matrices5a-h4", type: "hint", dependencies: ["matrices5a-h3"], title: "Scalar Multiplication", text: "Repeat the same process for each corresponding entries.", variabilization: {}}, ]; export {hints};