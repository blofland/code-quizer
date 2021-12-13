import Question from "../utility/question"
const questions = [
    Question('Inside which HTML element do we put the JavaScript?', 
        '<script>', 
        '<js>',
        '<javascript>', 
        '<scripting>'
    ),
    Question('What is the correct syntax for referring to an external script called "xxx.js"?',
        '<script src="xxx.js">', 
        '<script name="xxx.js">',
        '<script href="xxx.js">',
        '<script body="xxx.js">'
    ),
    Question('How do you write "Hello World" in an alert box?',
        'alert("hello World")',
        'msgBox("hello World")',
        'msg("hello World")',
        'alertBox("hello World")',
    ),
    Question('How do you call a function named "myFunction"?', 
        'myFunction()',
        'call myFunction()',
        'call function myFunction()',
        '(myFunction)'
    ),
    Question('How can you add a comment in a JavaScript?',
        "//",
        '<!--',
        '"*',
        '$!'
    )
]
export default questions
