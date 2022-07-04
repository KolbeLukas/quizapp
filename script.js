let HTMLQuiz = [
    {
        'question': 'Wie sehen HTML-Tags aus?',
        'answer-1': '>p<>/p<',
        'answer-2': '&lt;p&gt;&lt;/p&gt;',
        'answer-3': '<&lt;p&gt;><&lt;/p&gt;>',
        'answer-4': '&lt;p Hallo mein Text/p&gt;',
        'right-answer': 2
    },
    {
        'question': 'Wofür steht HTML?',
        'answer-1': 'Hier Texten Mathematiker Leidenschaftlich',
        'answer-2': 'Heizung Thermal Mechaniker Language',
        'answer-3': 'Hunde Tiere Miezen Löwen',
        'answer-4': 'Hyper Text Markup Language',
        'right-answer': 4
    },
    {
        'question': 'Kann man Listen in HTML einfügen?',
        'answer-1': '<50>',
        'answer-2': 'Nein',
        'answer-3': 'Ja, mit <ul>',
        'answer-4': '<p>',
        'right-answer': 3
    },
    {
        'question': 'Wie fügt man Bilder ein?',
        'answer-1': '<img>link>text</img>',
        'answer-2': '<img> src="link" alt="text"</img>',
        'answer-3': '<img src="link" alt="text">',
        'answer-4': 'strg + V',
        'right-answer': 3
    },
    {
        'question': 'Wie fügt man einen Zeilenumbruch ein?',
        'answer-1': '<br>',
        'answer-2': '<->',
        'answer-3': '<brrrrrrrr>',
        'answer-4': '<>',
        'right-answer': 1
    },
    {
        'question': 'Was bewirkt <meta charset="utf-8">?',
        'answer-1': 'Der Titel der Webseite wird auf arabisch übersetzt',
        'answer-2': 'ä ö ü werden erkannt und lesbar angezeigt',
        'answer-3': 'Die Buchstaben der Tastatur werden vertauscht',
        'answer-4': 'Die Webseite bekommt einen coolen Touch',
        'right-answer': 2
    },
    {
        'question': 'Wie sieht die Struktur einer HTML-Seite aus?',
        'answer-1': '<head> <body> </head> </body>',
        'answer-2': '<html> <head></head> <body></body> </html>',
        'answer-3': '<html> <body></body> <head></head> </html>',
        'answer-4': '<body> <head></head> <main></main> </body>',
        'right-answer': 2
    },
    {
        'question': 'Wieviele Überschrift-arten gibt es?',
        'answer-1': 'h1 bis h6',
        'answer-2': 'h1 bis h3',
        'answer-3': 'h0 bis h5',
        'answer-4': 'h2 bis h8',
        'right-answer': 1
    },
    {
        'question': 'Wie bezeichnet man das: <div>?',
        'answer-1': 'Als Abend',
        'answer-2': 'Als Morgen',
        'answer-3': 'Als Nacht',
        'answer-4': 'Als Tag',
        'right-answer': 4
    },
    {
        'question': 'Mit welchem HTML-Element wird ein Text kursiv geschrieben?',
        'answer-1': '<i>',
        'answer-2': '<p>',
        'answer-3': '<u>',
        'answer-4': '<k>',
        'right-answer': 1
    }
];


let currentQuestion = 0;


function loadHTMLQuizStart() {
    document.getElementById('quiz-content').innerHTML = renderHTMLQuizStart();
    document.getElementById('html-quiz-link-box').classList.add('active');
    document.getElementById('html-quiz-link-box').classList.remove('inactive');
    document.getElementById('html-quiz-link').classList.remove('fw-light');
}


function startHTMLQuiz() {
    document.getElementById('quiz-content').classList.remove('main-bg');
    loadQuestionAndAnswers(currentQuestion);
}


function loadQuestionAndAnswers(currentQuestion) {
    let quiz = 'HTMLQuiz';
    let question = HTMLQuiz[currentQuestion];

    document.getElementById('quiz-content').innerHTML = renderQuestionAndAnswers(quiz, question);
    document.getElementById('max-amount-questions').innerHTML = HTMLQuiz.length;
}


function answer(quiz, selection) {
    eval(quiz);
    let question = quiz[currentQuestion]
    let selctedAnswerNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question['right-answer']}`;

    if (selctedAnswerNumber == question['right-answer']){
        console.log('Richtig')
        document.getElementById(selection).classList.add('bg-success');
    } else {
        console.log('Falsch')
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }
    document.getElementById('next-question').disabled = false;
}


/* HTML Rendering */

function renderHTMLQuizStart() {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center mw-50">
            <h4 class="card-title text-center fw-bold pt-sans">Das HTML Quiz</h4>
            <p class="card-text pt-sans">Bist du bereit 10 interessante Fragen?</p>
        </div>
        <div class="w-100 d-flex justify-content-end pb-5 pe-5">
            <button onclick="startHTMLQuiz()" class="btn btn-primary ps-4 pe-3 d-flex align-items-center radius-left radius-right">
                <span class="pe-3">LOS GEHT'S</span>
                <img src="img/next.png">
            </button>
        </div>`;
}


function renderQuestionAndAnswers(quiz, question) {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center w-100">
            <h4 class="card-title text-center fw-medium rubik mb-4">${question['question']}</h4>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 answer-hover" id="answer-1" onclick="answer(${quiz}, 'answer-1')">
                    <span class="badge bg-badge me-4">A</span>
                    <span class="rubik">${question['answer-1']}</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 answer-hover" id="answer-2" onclick="answer(${quiz}, 'answer-2')">
                    <span class="badge bg-badge me-4">B</span>
                    <span class="rubik">${question['answer-2']}</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 answer-hover" id="answer-3" onclick="answer(${quiz}, 'answer-3')">
                    <span class="badge bg-badge me-4">C</span>
                    <span class="rubik">${question['answer-3']}</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 answer-hover" id="answer-4" onclick="answer(${quiz}, 'answer-4')">
                    <span class="badge bg-badge me-4">D</span>
                    <span class="rubik">${question['answer-4']}</span>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center w-75">
                <span><b>1</b> von <b id="max-amount-questions"></b> Fragen</span>
                <button id="next-question" class="btn btn-primary ps-3 pe-3 d-flex align-items-center radius-left radius-right" disabled>
                <span>Nächste Frage</span>
                </button>
            </div>
        </div>`;
}