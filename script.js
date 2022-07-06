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


let marvelQuiz = [
    {
        'question': 'Welche Automarke wird prominent in „Iron Man“ gefahren?',
        'answer-1': 'Audi',
        'answer-2': 'Mercedes Benz',
        'answer-3': 'Volvo',
        'answer-4': 'Volkswagen',
        'right-answer': 1
    },
    {
        'question': 'Wie heißt der mutierte Widersacher von „Der unglaubliche Hulk“?',
        'answer-1': 'Abomination',
        'answer-2': 'Red Hulk',
        'answer-3': 'The Thing',
        'answer-4': 'Kraven',
        'right-answer': 1
    }, {
        'question': 'Welchen Alias verwendet Natasha Romanoff als Tony Starks Assistentin in „Iron Man 2“?',
        'answer-1': 'Black Mamba',
        'answer-2': 'Gwen Stacy',
        'answer-3': 'Evelyn Potts',
        'answer-4': 'Nathalie Rushman',
        'right-answer': 4
    },
    {
        'question': '„Thor“: In welchem US-Bundesstaat stranden Thor und sein Hammer Mjölnir?',
        'answer-1': 'Hawaii',
        'answer-2': 'Nebraska',
        'answer-3': 'New Mexico',
        'answer-4': 'Washington',
        'right-answer': 3
    },
    {
        'question': 'Wie lautet Buckys vollständiger Name, den wir in „Captain America: The First Avenger“ hören?',
        'answer-1': 'Ed Brubaker Barnes',
        'answer-2': 'James Buchanan Barnes',
        'answer-3': 'Stanley Barnes',
        'answer-4': 'Scott Wright Barnes',
        'right-answer': 2
    },
    {
        'question': '„Avengers“: An welchem Ort fand die Mission von Clint und Natasha statt, an die sie sich stets anders erinnern?',
        'answer-1': 'Budapest, Ungarn',
        'answer-2': 'Brüssel, Belgien',
        'answer-3': 'Prag, Tschechien',
        'answer-4': 'Helsinki, Finnland',
        'right-answer': 1
    },
    {
        'question': 'Wem erzählt Tony Stark die Handlung von „Iron Man 3“ in dessen Post-Credit-Szene?',
        'answer-1': 'Steve Rogers',
        'answer-2': 'Thor',
        'answer-3': 'Bruce Banner',
        'answer-4': 'Nick Fury',
        'right-answer': 3
    },
    {
        'question': 'Der Äther, den wir in „Thor 2: The Dark Kingdom“ erstmals gesehen haben, ist die flüssige Form welches Infinity-Steins?',
        'answer-1': 'Der Realitätsstein',
        'answer-2': 'Der Seelenstein',
        'answer-3': 'Der Machtstein',
        'answer-4': 'Der Gedankenstein',
        'right-answer': 1
    },
    {
        'question': '„The Return of the Winter Soldier“: Was erschien NICHT in Steve Rogers Liste von Dingen, über die er noch etwas lernen muss?',
        'answer-1': 'Thai Essen',
        'answer-2': 'Star Wars / Trek',
        'answer-3': 'Nirvana (Band)',
        'answer-4': '11. September 2001',
        'right-answer': 4
    },
    {
        'question': 'Welchen Spitznamen bekommt der Hulkbuster in „Avengers 2: Age of Ultron“?',
        'answer-1': 'Bannersmasher',
        'answer-2': 'Veronica',
        'answer-3': 'Science Brother',
        'answer-4': 'Mechanic Hulk',
        'right-answer': 2
    },
    {
        'question': 'Wie heißt Scott Langs Tochter in „Ant-Man“?',
        'answer-1': 'Barbara',
        'answer-2': 'Cassie',
        'answer-3': 'Morgan',
        'answer-4': 'Mary-Jane',
        'right-answer': 2
    },
    {
        'question': 'An welchem deutschen Flughafen bekämpfen sich die Avengers in „The First Avenger: Civil War“?',
        'answer-1': 'Köln/Bonn',
        'answer-2': 'Frankfurt am Main',
        'answer-3': 'Leipzig/Halle',
        'answer-4': 'Berlin Schönefeld',
        'right-answer': 3
    },
    {
        'question': 'Wie heißt die K.I. im Anzug von Spider-Man in „Spider-Man: Homecoming“?',
        'answer-1': 'Hallie',
        'answer-2': 'Sarah',
        'answer-3': 'Karen',
        'answer-4': 'May',
        'right-answer': 3
    },
];


let currentQuestion = 0;
let rightAnswers = 0;
let audioRightAnswer = new Audio('audio/success.wav');
let audioWrongAnswer = new Audio('audio/wrong.wav');


/* HTML-QUIZ FUNCTIONS */

function loadHTMLQuizStart() {
    let quizNotStarted = (currentQuestion == 0);
    let quiz = 'HTML';
    let length = HTMLQuiz.length;

    if (quizNotStarted) {
        resetQuizLinks();
        setHTMLLinkActive();
        document.getElementById('quiz-content').innerHTML = renderQuizStart(quiz, length);
    } else {
        // open reset alert
        document.getElementById('alert').classList.remove('d-none');
        document.getElementById('end-quiz').setAttribute('onclick', 'endHTMLQuiz()');
        document.getElementById('move-on').setAttribute('onclick', 'closeAlert()');
    }
    openOrCloseMenu();
}


function setHTMLLinkActive() {
    document.getElementById('html-quiz-link-box').classList.add('active');
    document.getElementById('html-quiz-link-box').classList.remove('inactive');
    document.getElementById('html-quiz-link').classList.remove('fw-light');
}


function startHTMLQuiz() {
    let quizString = 'HTMLQuiz';
    let quiz = HTMLQuiz;

    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('quiz-content').classList.remove('main-bg');
    loadQuestionAndAnswers(quizString, quiz);
}


function endHTMLQuiz() {
    currentQuestion = 0;
    rightAnswers = 0;
    openOrCloseMenu();
    loadHTMLQuizStart();
    document.getElementById('alert').classList.add('d-none');
    resetProgressBar();
}


/* MARVEL-QUIZ FUNCTIONS */

function loadMarvelQuizStart() {
    let quizNotStarted = (currentQuestion == 0);
    let quiz = 'Marvel';
    let length = marvelQuiz.length;

    if (quizNotStarted) {
        resetQuizLinks();
        setMarvelLinkActive();
        document.getElementById('quiz-content').innerHTML = renderQuizStart(quiz, length);
    } else {
        // open reset alert
        document.getElementById('alert').classList.remove('d-none');
        document.getElementById('end-quiz').setAttribute('onclick', 'endMarvelQuiz()');
        document.getElementById('move-on').setAttribute('onclick', 'closeAlert()');
    }
    openOrCloseMenu();
}


function setMarvelLinkActive() {
    document.getElementById('marvel-quiz-link-box').classList.add('active');
    document.getElementById('marvel-quiz-link-box').classList.remove('inactive');
    document.getElementById('marvel-quiz-link').classList.remove('fw-light');
}


function startMarvelQuiz() {
    let quizString = 'marvelQuiz';
    let quiz = marvelQuiz;

    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('quiz-content').classList.remove('main-bg');
    loadQuestionAndAnswers(quizString, quiz);
}


function endMarvelQuiz() {
    currentQuestion = 0;
    rightAnswers = 0;
    openOrCloseMenu();
    loadMarvelQuizStart();
    document.getElementById('alert').classList.add('d-none');
    resetProgressBar();
}

/* FUNCTIONS FOR ALL QUIZ */

function loadQuestionAndAnswers(quizString, quiz) {
    let progress = Math.round((currentQuestion / quiz.length) * 100);
    let quizdata = quiz[currentQuestion];

    if (currentQuestion >= quiz.length) {
        showEndScreen(quizString, quiz);
        updateProgressBar(progress);
    } else {
        loadNextQuestionAndAnswers(quizString, quizdata, quiz);
        updateProgressBar(progress);
    }
}


function answer(quizString, selection) {
    let question = quizString[currentQuestion];
    let selctedAnswerNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question['right-answer']}`;

    if (selctedAnswerNumber == question['right-answer']) {
        document.getElementById(selection).classList.add('bg-success');
        audioRightAnswer.play();
        rightAnswers++;
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        audioWrongAnswer.play();
    }
    disableAnswers();
    document.getElementById('next-question').disabled = false;
}


function disableAnswers() {
    document.getElementById('answer-1').classList.add('pe-none');
    document.getElementById('answer-2').classList.add('pe-none');
    document.getElementById('answer-3').classList.add('pe-none');
    document.getElementById('answer-4').classList.add('pe-none');
}


function nextQuestion(quizString) {
    currentQuestion++;
    let quiz = eval(quizString);
    loadQuestionAndAnswers(quizString, quiz);
}


function updateProgressBar(progress) {
    document.getElementById('progress-bar').innerHTML = `${progress}%`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}


function loadNextQuestionAndAnswers(quizString, quizdata, quiz) {
    document.getElementById('quiz-content').innerHTML = renderQuestionAndAnswers(quizString, quizdata);
    document.getElementById('max-amount-questions').innerHTML = quiz.length;
    document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
}


function showEndScreen(quizString, quiz) {
    document.getElementById('quiz-content').innerHTML = renderEndScoreScreen(quizString);
    document.getElementById('max-amount-questions-score').innerHTML = quiz.length;
    document.getElementById('right-answer-score').innerHTML = rightAnswers;
}


function resetProgressBar() {
    let progress = 0;
    document.getElementById('progress-bar').innerHTML = `${progress}%`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}


function closeAlert() {
    document.getElementById('alert').classList.add('d-none');
}


function restartQuiz(quizString) {
    currentQuestion = 0;
    rightAnswers = 0;
    resetProgressBar();
    let quiz = eval(quizString);
    loadQuestionAndAnswers(quizString, quiz);
}


function resetQuizLinks() {
    document.getElementById('html-quiz-link-box').classList.remove('active');
    document.getElementById('html-quiz-link-box').classList.add('inactive');
    document.getElementById('marvel-quiz-link-box').classList.remove('active');
    document.getElementById('marvel-quiz-link-box').classList.add('inactive');
}


function openOrCloseMenu() {
    let menu = document.getElementById('nav');

    if (matchMedia('(max-width: 767px)').matches) {
        if (menu.style.position === 'absolute') {
            menu.style.position = 'unset';
            menu.classList.remove('d-flex');
            menu.classList.remove('resp-menu');
        } else {
            menu.style.position = 'absolute';
            menu.classList.add('d-flex');
            menu.classList.add('resp-menu');
        }
    }
}


/* HTML Rendering */

function renderQuizStart(quiz, length) {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center mw-50">
            <h4 class="card-title text-center fw-bold pt-sans">Das ${quiz} Quiz</h4>
            <p class="card-text text-center pt-sans">Bist du bereit ${length} interessante Fragen?</p>
        </div>
        <div class="w-100 d-flex justify-content-end pb-5 pe-5">
            <button onclick="start${quiz}Quiz()" class="btn btn-primary ps-4 pe-3 d-flex align-items-center radius">
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
            <div class="d-flex justify-content-between align-items-center w-75 resp-next">
                <span><b id="current-question-number"></b> von <b id="max-amount-questions"></b> Fragen</span>
                <button id="next-question" onclick="nextQuestion('${quizString}')" class="btn btn-primary ps-3 pe-3 d-flex align-items-center radius" disabled>
                <span>Nächste Frage</span>
                </button>
            </div>
        </div>`;
}


function renderEndScoreScreen(quizString) {
    return /*html*/`
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <img src="img/brain-result.png" class="w-50 mb-5">
            <h4 class="card-title text-center fw-bold rubik w-50 mb-5">COMPLETE HTML QUIZ</h4>
            <p class="card-text fw-bold fs-5 rubik d-flex justify-content-between w-75">
                <span class="score-color fw-bold">DEIN SCORE </span>
                <span><b id="right-answer-score"></b>/<b id="max-amount-questions-score"></b></span>
            </p>
            <button id="next-question" onclick="restartQuiz('${quizString}')" class="btn btn-primary ps-3 pe-3 mb-4 d-flex align-items-center radius">
                <span>Erneut spielen</span>
            </button>
            <p class="card-text text-center rubik">Oder wähle links ein weiters Quiz aus.</p>
            <img id="tropy" class="position-absolute end-0 h-50" src="img/tropy.png">
        </div>`;
}