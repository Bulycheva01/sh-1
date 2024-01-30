let btn = document.querySelector('#btn');
let answers = document.querySelector('#right_answers');

btn.addEventListener('click', () => {
    let fio = document.querySelector('#fio').value;
    let group = document.querySelector('#group').value;
    let count = 0;
    if (document.getElementById('1.2').checked) {
        count++;
    }

    if (document.getElementById('2.3').checked) {
        count++;
    }

    if (document.getElementById('3.2').checked) {
        count++;
    }

    if (document.getElementById('4.3').checked) {
        count++;
    }

    if (document.getElementById('5.1').checked) {
        count++;
    }

    if (document.getElementById('6.3').checked) {
        count++;
    }

    if (document.getElementById('7.2').checked) {
        count++;
    }

    if (document.getElementById('8.1').checked) {
        count++;
    }

    if (document.getElementById('9.2').checked) {
        count++;
    }

    if (document.getElementById('10.3').checked) {
        count++;
    }

    

    answers.innerHTML = fio + ' ' + group + ', ' + count + ' правильных ответов';
})

