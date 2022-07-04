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
        'answer-3': 'Ja, mit &lt;ul&gt;',
        'answer-4': '&lt;p&gt;',
        'right-answer': 3
    },
    {
        'question': 'Wie fügt man Bilder ein?',
        'answer-1': '&lt;img&gt;link>text&lt;/img&gt;',
        'answer-2': '&lt;img&gt; src="link" alt="text"&lt;/img&gt;',
        'answer-3': '&lt;img src="link" alt="text"&gt;',
        'answer-4': 'strg + V',
        'right-answer': 3
    },
    {
        'question': 'Wie fügt man einen Zeilenumbruch ein?',
        'answer-1': '&lt;br&gt;',
        'answer-2': '<->',
        'answer-3': '&lt;brrrrrrrr&gt;',
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
        'answer-1': '&lt;head&gt; &lt;body&gt; &lt;/head&gt; &lt;/body&gt;',
        'answer-2': '&lt;html&gt; &lt;head&gt;&lt;/head&gt; &lt;body&gt;&lt;/body&gt; &lt;/html&gt;',
        'answer-3': '&lt;html&gt; &lt;body&gt;&lt;/body&gt; &lt;head&gt;&lt;/head&gt; &lt;/html&gt;',
        'answer-4': '&lt;body&gt; &lt;head&gt;&lt;/head&gt; &lt;main&gt;&lt;/main&gt; &lt;/body&gt;',
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
        'answer-1': '&lt;i&gt;',
        'answer-2': '&lt;p&gt;',
        'answer-3': '&lt;u&gt;',
        'answer-4': '&lt;k&gt;',
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
    let quizString = 'HTMLQuiz';
    let quiz = HTMLQuiz;

    document.getElementById('quiz-content').classList.remove('main-bg');
    loadQuestionAndAnswers(quizString, quiz);
}


function loadQuestionAndAnswers(quizString, quiz) {
    if (currentQuestion >= HTMLQuiz.length) {
        document.getElementById('quiz-content').innerHTML = renderScoreWindow();
    } else {
        let quizdata = quiz[currentQuestion];
        document.getElementById('quiz-content').innerHTML = renderQuestionAndAnswers(quizString, quizdata);
        document.getElementById('max-amount-questions').innerHTML = HTMLQuiz.length;
        document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
    }
}


function answer(quizString, selection) {
    let question = quizString[currentQuestion];
    let selctedAnswerNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question['right-answer']}`;

    if (selctedAnswerNumber == question['right-answer']) {
        document.getElementById(selection).classList.add('bg-success');
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }
    document.getElementById('next-question').disabled = false;
}


function nextQuestion(quizString) {
    currentQuestion++;
    let quiz = eval(quizString);
    loadQuestionAndAnswers(quizString, quiz);
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


function renderQuestionAndAnswers(quizString, question) {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center w-100">
            <h4 class="card-title text-center fw-medium rubik mb-4">${question['question']}</h4>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 d-flex align-items-center answer-hover" id="answer-1" onclick="answer(${quizString}, 'answer-1')">
                    <span class="badge bg-badge me-4">A</span>
                    <span class="rubik">${question['answer-1']}</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 d-flex align-items-center answer-hover" id="answer-2" onclick="answer(${quizString}, 'answer-2')">
                    <span class="badge bg-badge me-4">B</span>
                    <span class="rubik">${question['answer-2']}</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 d-flex align-items-center answer-hover" id="answer-3" onclick="answer(${quizString}, 'answer-3')">
                    <span class="badge bg-badge me-4">C</span>
                    <span class="rubik">${question['answer-3']}</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2 d-flex align-items-center answer-hover" id="answer-4" onclick="answer(${quizString}, 'answer-4')">
                    <span class="badge bg-badge me-4">D</span>
                    <span class="rubik">${question['answer-4']}</span>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center w-75">
                <span><b id="current-question-number"></b> von <b id="max-amount-questions"></b> Fragen</span>
                <button id="next-question" onclick="nextQuestion('${quizString}')" class="btn btn-primary ps-3 pe-3 d-flex align-items-center radius-left radius-right" disabled>
                <span>Nächste Frage</span>
                </button>
            </div>
        </div>`;
}


function renderScoreWindow() {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <img src="img/brain-result.png" class="w-50 mb-4">
            <h4 class="card-title text-center fw-bold rubik w-50 mb-4">COMPLETE HTML QUIZ</h4>
            <p class="card-text fw-bold fs-5 rubik d-flex justify-content-between w-75">
                <span class="score-color">DEIN SCORE </span>
                <span>10/10</span>
            </p>
            <p class="card-text rubik">Wähle links ein weiters Quiz aus.</p>
        </div>`;
}