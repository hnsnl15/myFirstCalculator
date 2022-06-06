// Button Selectors
let buttonCollections = Array.from(document.querySelectorAll('.btn'));
// DOM
let display = document.getElementById('screen');
let historyArea = document.getElementById('answer-area');
let historyLog = document.querySelector('.history');
let historyStorage = [];

// Functions
buttonCollections.map(buttonCollection => {
    // Event Listner for my Calculator
    buttonCollection.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                historyArea.innerText = '';
                break;
            case 'CLEAR':
                display.innerText = '';
                historyArea.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                historyArea.innerText = historyArea.innerText.slice(0, -1);;
                break;
            case '=':
                try {
                    historyArea.innerText = eval(display.innerText);
                }
                catch {
                    historyArea.innerText = 'Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
                buttonCollections[18].innerText = '←';
                buttonCollections[0].style.visibility = 'visible';
                break;
            }

            if(display.innerText == '+') {
                function add() {
                    
                }
            }

            // Script for History Logs
            let resultLog = (`${display.innerText} = ${eval(historyArea.innerText)}`)

            if (e.target.innerText == '←' && e.target.innerText != '=') {
                resultLog.includes(undefined);
            }
            else if (
            resultLog.includes(undefined) == false 
            && e.target.innerText == '=' 
            && eval(historyArea.innerText)
            ) {
                historyStorage.push(resultLog);
                historyStorage.splice((historyStorage.length - 2), 2, resultLog);
                
                for(let logs of historyStorage) {
                    let createNewList = document.createElement('li');
                        createNewList.textContent = logs;
                    let logHistoryLists = document.querySelector('#history-logs');
    
                    logHistoryLists.appendChild(createNewList);
                }
            }
        })
    })

    let historyBtn = document.querySelector('.window-btn-history');
    let exitBtn = document.querySelector('.exitBtn');

    const showHistoryArea = () => {
        historyBtn.addEventListener('click', function() {
            exitBtn.style.visibility = 'visible';
            historyBtn.style.visibility = 'hidden';
            displayHistory();
        })
    }
    const hideHistoryArea = () => {
        exitBtn.style.visibility = 'hidden';
        historyBtn.style.visibility = 'visible';
            showHistoryArea();
            hideHistory();
    }
    const displayHistory = () => {
        historyLog.classList.toggle('display-history');
    }
    const hideHistory = () => {
        historyLog.classList.remove('display-history');
    }