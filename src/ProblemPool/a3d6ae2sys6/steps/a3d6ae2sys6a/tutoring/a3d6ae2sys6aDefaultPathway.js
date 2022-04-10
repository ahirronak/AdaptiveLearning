var hints = [{id: "a3d6ae2sys6a-h1", type: "hint", dependencies: [], title: "Substitute", text: "We substitue $$x=\\frac{8}{7}$$ and $$y=\\frac{6}{7}$$ into both equations.", variabilization: {}}, {id: "a3d6ae2sys6a-h2", type: "hint", dependencies: ["a3d6ae2sys6a-h1"], title: "Substitute into First Equation", text: "$$x+y=2$$ \\n $$\\frac{8}{7}+\\frac{6}{7}=2$$ \\n $$\\frac{14}{7}=2$$ \\n $$2=2$$", variabilization: {}}, {id: "a3d6ae2sys6a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a3d6ae2sys6a-h2"], title: "Substitute into First Equation", text: "Is the equation above true?", choices: ["TRUE", "FALSE"], variabilization: {}}, {id: "a3d6ae2sys6a-h4", type: "hint", dependencies: ["a3d6ae2sys6a-h3"], title: "Solution to First Equation", text: "Therefore, $$\\frac{\\frac{8}{76}}{7}$$ satisfies the first equation, but it must also safisfy the second equation.", variabilization: {}}, {id: "a3d6ae2sys6a-h5", type: "hint", dependencies: ["a3d6ae2sys6a-h4"], title: "Substitute into Second Equation", text: "$$y=\\frac{3}{4} x$$ \\n $$\\frac{6}{7}=\\frac{8\\frac{3}{4}}{7}$$ \\n $$\\frac{6}{7}=\\frac{6}{7}$$", variabilization: {}}, {id: "a3d6ae2sys6a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a3d6ae2sys6a-h5"], title: "Substitute into Second Equation", text: "Is the equation above true?", choices: ["TRUE", "FALSE"], variabilization: {}}, {id: "a3d6ae2sys6a-h7", type: "hint", dependencies: ["a3d6ae2sys6a-h6"], title: "Solution to Second Equation", text: "Therefore, $$\\frac{\\frac{8}{76}}{7}$$ does satisfies the second equation.", variabilization: {}}, {id: "a3d6ae2sys6a-h8", type: "hint", dependencies: ["a3d6ae2sys6a-h7"], title: "Solutions of a System of Equations", text: "$$\\frac{\\frac{8}{76}}{7}$$ does make both equations true. $$\\frac{\\frac{8}{76}}{7}$$ is a solution.", variabilization: {}}, ]; export {hints};