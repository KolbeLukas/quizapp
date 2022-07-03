let questionsHTML = [
    {
        'question': 'Wie sehen HTML-Tags aus?',
        'answer_1': '>p<>/p<',
        'answer_2': '<p></p>',
        'answer_3': '<<p>><</p>>',
        'answer_4': '<p Hallo mein Text/p>',
        'right_answer': 2
    },
    {
        'question': 'Wofür steht HTML?',
        'answer_1': 'Hier Texten Mathematiker Leidenschaftlich',
        'answer_2': 'Heizung Thermal Mechaniker Language',
        'answer_3': 'Hunde Tiere Miezen Löwen',
        'answer_4': 'Hyper Text Markup Language',
        'right_answer': 4
    },
    {
        'question': 'Kann man Listen in HTML einfügen?',
        'answer_1': '<50>',
        'answer_2': 'Nein',
        'answer_3': 'Ja, mit <ul>',
        'answer_4': '<p>',
        'right_answer': 3
    },
    {
        'question': 'Wie fügt man Bilder ein?',
        'answer_1': '<img>link>text</img>',
        'answer_2': '<img> src="link" alt="text"</img>',
        'answer_3': '<img src="link" alt="text">',
        'answer_4': 'strg + V',
        'right_answer': 3
    },
    {
        'question': 'Wie fügt man einen Zeilenumbruch ein?',
        'answer_1': '<br>',
        'answer_2': '<->',
        'answer_3': '<brrrrrrrr>',
        'answer_4': '<>',
        'right_answer': 1
    },
    {
        'question': 'Was bewirkt <meta charset="utf-8">?',
        'answer_1': 'Der Titel der Webseite wird auf arabisch übersetzt',
        'answer_2': 'ä ö ü werden erkannt und lesbar angezeigt',
        'answer_3': 'Die Buchstaben der Tastatur werden vertauscht',
        'answer_4': 'Die Webseite bekommt einen coolen Touch',
        'right_answer': 2
    },
    {
        'question': 'Wie sieht die Struktur einer HTML-Seite aus?',
        'answer_1': '<head> <body> </head> </body>',
        'answer_2': '<html> <head></head> <body></body> </html>',
        'answer_3': '<html> <body></body> <head></head> </html>',
        'answer_4': '<body> <head></head> <main></main> </body>',
        'right_answer': 2
    },
    {
        'question': 'Wieviele Überschrift-arten gibt es?',
        'answer_1': 'h1 bis h6',
        'answer_2': 'h1 bis h3',
        'answer_3': 'h0 bis h5',
        'answer_4': 'h2 bis h8',
        'right_answer': 1
    },
    {
        'question': 'Wie bezeichnet man das: <div>?',
        'answer_1': 'Als Abend',
        'answer_2': 'Als Morgen',
        'answer_3': 'Als Nacht',
        'answer_4': 'Als Tag',
        'right_answer': 4
    },
    {
        'question': 'Mit welchem HTML-Element wird ein Text kursiv geschrieben?',
        'answer_1': '<i>',
        'answer_2': '<p>',
        'answer_3': '<u>',
        'answer_4': '<k>',
        'right_answer': 1
    }
];


function loadHTMLQuiz() {
    document.getElementById('quiz-content').innerHTML = renderHTMLQuizStart();
    document.getElementById('html-quiz-link-box').classList.add('active');
    document.getElementById('html-quiz-link-box').classList.remove('inactive');
    document.getElementById('html-quiz-link').classList.remove('fw-light');
}


function loadQuestions() {
    document.getElementById('quiz-content').classList.remove('main-bg');
    document.getElementById('quiz-content').innerHTML = renderHTMLQuizQuestions();
}


/* HTML Rendering */

function renderHTMLQuizStart() {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center mw-50">
            <h4 class="card-title text-center fw-bold pt-sans">Das HTML Quiz</h4>
            <p class="card-text pt-sans">Bist du bereit 10 interessante Fragen?</p>
        </div>
        <div class="w-100 d-flex justify-content-end pb-5 pe-5">
            <button onclick="loadQuestions()" class="btn btn-primary ps-4 pe-3 d-flex align-items-center radius-left radius-right">
                <span class="pe-3">LOS GEHT'S</span>
                <img src="img/next.png">
            </button>
        </div>`;
}


function renderHTMLQuizQuestions() {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center w-100">
            <h4 class="card-title text-center fw-medium rubik mb-4">Frage?</h4>
            <div class="card mb-3 w-75">
                <div class="card-body p-2">
                    <span class="badge bg-badge me-4">A</span>
                    <span class="rubik">Antwort 1</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2">
                    <span class="badge bg-badge me-4">B</span>
                    <span class="rubik">Antwort 2</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2">
                    <span class="badge bg-badge me-4">C</span>
                    <span class="rubik">Antwort 3</span>
                </div>
            </div>
            <div class="card mb-3 w-75">
                <div class="card-body p-2">
                    <span class="badge bg-badge me-4">D</span>
                    <span class="rubik">Antwort 4</span>
                </div>
            </div>
        </div>`;
}