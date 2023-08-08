
const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            disableOptions(this.name);
        });
    });

function disableOptions(question){
    let options = document.querySelectorAll(`input[name="${question}"]`);
    let hasSelected = false;
    for(let i = 0; i < options.length; i++){
        if(options[i].checked){
            hasSelected = true;
            break;
        }
    }
    if(hasSelected){
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = true;
        }
    }
}


const submitBtn = document.querySelector('#submitBtn');
if(submitBtn){
    submitBtn.addEventListener('click',()=>{
        calculateScore();
    });
}

function calculateScore() {
    const correctAnswers = {
        q1: 'Geographic Atrophy',
        q2: '1024',
        q3: 'Restart it',
        q4: '1959 to 1965',
        q5: 'All',
        q6: 'Principles',
        q7: 'Watts S. Humphrey',
        q8: 'both',
        q9: 'All',
        q10: 'Tim'
    };

    let total = 10;
    let attempted = 0;
    let correct = 0;

    for (const question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            attempted += 1;
            if (selectedOption.value === correctAnswers[question]) {
                correct += 1;
            }
        }
    }
    output(total,attempted,correct);
}

function output(total, attempted, correct){
    let notattempted = total - attempted;
    let wrong = attempted - correct;
    let marks = correct - wrong;
    if(marks > total/2){
        alert('Success!! You have Passed the exam');
    }
    else{
        alert('Oops!! You have Failed. Better Luck Next Time');
    }
    document.querySelector('#output-div').classList.remove('d-none');
    document.getElementById('attempted').innerText = attempted;
    document.getElementById('notAttempted').innerText = notattempted;
    document.getElementById('correct').innerText = correct;
    document.getElementById('wrong').innerText = wrong;
    document.getElementById('score').innerText = marks;
    
}