const allquestions = {
    oops: [
        {
            question: "Which feature of OOP indicates code reusability?",
            answer: [
                { text: "Inheritance", Correct: true },
                { text: "Encapsulation", Correct: false },
                { text: "Polymorphism", Correct: false },
                { text: "Abstraction", Correct: false }
            ]
        },
        {
            question: "Which of the following is not a principle of OOP?",
            answer: [
                { text: "Encapsulation", Correct: false },
                { text: "Polymorphism", Correct: false },
                { text: "Compilation", Correct: true },
                { text: "Inheritance", Correct: false }
            ]
        },
        {
            question: "What is the process of hiding the internal details of an object called?",
            answer: [
                { text: "Inheritance", Correct: false },
                { text: "Abstraction", Correct: false },
                { text: "Encapsulation", Correct: true },
                { text: "Polymorphism", Correct: false }
            ]
        },
        {
            question: "Which of the following allows objects to take on multiple forms?",
            answer: [
                { text: "Encapsulation", Correct: false },
                { text: "Polymorphism", Correct: true },
                { text: "Inheritance", Correct: false },
                { text: "Abstraction", Correct: false }
            ]
        },
        {
            question: "What is the term for a blueprint or template for creating objects in OOP?",
            answer: [
                { text: "Class", Correct: true },
                { text: "Object", Correct: false },
                { text: "Method", Correct: false },
                { text: "Function", Correct: false }
            ]
        },
        {
            question: "Which of the following is a way to achieve polymorphism in OOP?",
            answer: [
                { text: "Method Overloading", Correct: true },
                { text: "Data Hiding", Correct: false },
                { text: "Inheritance", Correct: false },
                { text: "Encapsulation", Correct: false }
            ]
        },
    ],
    dbms: [
        {
            question: "What is the full form of DBMS?",
            answer: [
                { text: "Database Management System", Correct: true },
                { text: "Data Backup Management System", Correct: false },
                { text: "Database Monitoring System", Correct: false },
                { text: "Data Business Management System", Correct: false }
            ]
        },
        {
            question: "Which key is used to uniquely identify a record in a table?",
            answer: [
                { text: "Primary Key", Correct: true },
                { text: "Foreign Key", Correct: false },
                { text: "Super Key", Correct: false },
                { text: "Candidate Key", Correct: false }
            ]
        },
        {
            question: "Which language is used to retrieve data from a database?",
            answer: [
                { text: "DML", Correct: true },
                { text: "DDL", Correct: false },
                { text: "DCL", Correct: false },
                { text: "VCL", Correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a type of database model?",
            answer: [
                { text: "Hierarchical", Correct: false },
                { text: "Network", Correct: false },
                { text: "Relational", Correct: false },
                { text: "Linear", Correct: true }
            ]
        },
        {
            question: "What does SQL stand for?",
            answer: [
                { text: "Structured Query Language", Correct: true },
                { text: "Simple Query Language", Correct: false },
                { text: "Sequential Query Language", Correct: false },
                { text: "System Query Language", Correct: false }
            ]
        },
        {
            question: "What is normalization in DBMS?",
            answer: [
                { text: "Organizing data to reduce redundancy", Correct: true },
                { text: "Removing NULL values", Correct: false },
                { text: "Backing up data", Correct: false },
                { text: "Encrypting database", Correct: false }
            ]
        }
    ],
    java: [
        {
            question: "Which method is the entry point of a Java program?",
            answer: [
                { text: "main()", Correct: true },
                { text: "start()", Correct: false },
                { text: "run()", Correct: false },
                { text: "init()", Correct: false }
            ]
        },
        {
            question: "Which keyword is used to inherit a class in Java?",
            answer: [
                { text: "extends", Correct: true },
                { text: "inherits", Correct: false },
                { text: "super", Correct: false },
                { text: "this", Correct: false }
            ]
        },
        {
            question: "What is the default value of an int variable in Java?",
            answer: [
                { text: "0", Correct: true },
                { text: "null", Correct: false },
                { text: "undefined", Correct: false },
                { text: "1", Correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a Java access modifier?",
            answer: [
                { text: "private", Correct: false },
                { text: "protected", Correct: false },
                { text: "public", Correct: false },
                { text: "sealed", Correct: true }
            ]
        },
        {
            question: "Which collection class stores data in key-value pairs?",
            answer: [
                { text: "HashMap", Correct: true },
                { text: "ArrayList", Correct: false },
                { text: "LinkedList", Correct: false },
                { text: "Vector", Correct: false }
            ]
        },
        {
            question: "Which exception is thrown when dividing by zero in Java?",
            answer: [
                { text: "ArithmeticException", Correct: true },
                { text: "NullPointerException", Correct: false },
                { text: "IOException", Correct: false },
                { text: "ArrayIndexOutOfBoundsException", Correct: false }
            ]
        }
    ],
    python: [
        {
            question: "Which keyword is used to define a function in Python?",
            answer: [
                { text: "def", Correct: true },
                { text: "function", Correct: false },
                { text: "func", Correct: false },
                { text: "define", Correct: false }
            ]
        },
        {
            question: "What is the output of: type([])?",
            answer: [
                { text: "<class 'list'>", Correct: true },
                { text: "<class 'dict'>", Correct: false },
                { text: "<class 'tuple'>", Correct: false },
                { text: "<class 'set'>", Correct: false }
            ]
        },
        {
            question: "Which of the following is not a valid Python data type?",
            answer: [
                { text: "float", Correct: false },
                { text: "real", Correct: true },
                { text: "int", Correct: false },
                { text: "str", Correct: false }
            ]
        },
        {
            question: "What is the result of 3 * 'Hello'?",
            answer: [
                { text: "HelloHelloHello", Correct: true },
                { text: "Error", Correct: false },
                { text: "3Hello", Correct: false },
                { text: "Hello3", Correct: false }
            ]
        },
        {
            question: "How do you insert comments in Python?",
            answer: [
                { text: "# This is a comment", Correct: true },
                { text: "// This is a comment", Correct: false },
                { text: "/* This is a comment */", Correct: false },
                { text: "-- This is a comment", Correct: false }
            ]
        },
        {
            question: "What will `len('Python')` return?",
            answer: [
                { text: "6", Correct: true },
                { text: "5", Correct: false },
                { text: "7", Correct: false },
                { text: "Error", Correct: false }
            ]
        }
    ],
    javascript: [
        {
            question: "Which company developed JavaScript?",
            answer: [
                { text: "Netscape", Correct: true },
                { text: "Microsoft", Correct: false },
                { text: "Google", Correct: false },
                { text: "Oracle", Correct: false }
            ]
        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            answer: [
                { text: "var", Correct: true },
                { text: "let", Correct: false },
                { text: "int", Correct: false },
                { text: "String", Correct: false }
            ]
        },
        {
            question: "What is the output of `typeof null` in JavaScript?",
            answer: [
                { text: "'object'", Correct: true },
                { text: "'null'", Correct: false },
                { text: "'undefined'", Correct: false },
                { text: "'number'", Correct: false }
            ]
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            answer: [
                { text: "//", Correct: true },
                { text: "#", Correct: false },
                { text: "/*", Correct: false },
                { text: "<!--", Correct: false }
            ]
        },
        {
            question: "Which method adds a new element at the end of an array?",
            answer: [
                { text: "push()", Correct: true },
                { text: "pop()", Correct: false },
                { text: "shift()", Correct: false },
                { text: "unshift()", Correct: false }
            ]
        },
        {
            question: "What does `isNaN()` function do?",
            answer: [
                { text: "Checks if a value is NaN", Correct: true },
                { text: "Converts value to number", Correct: false },
                { text: "Checks if a variable is null", Correct: false },
                { text: "Checks for undefined", Correct: false }
            ]
        }
    ],

};