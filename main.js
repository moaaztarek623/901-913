let input_1 = document.querySelector('#input-1');
let input_2 = document.querySelector('#input-2');
let arrayOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let code_1 = document.querySelector('.code-1');
let code_2 = document.querySelector('.code-2');
let em = [];
let em_2 = [];


input_2.oninput = function () {
    for (let i = 901; i <= 926; i++) {
        (em_2.push(i.toString()))
        for (let j = 0; j < arrayOfChars.length; j++) {       
            if (input_2.value == arrayOfChars[j] || input_2.value == arrayOfChars[j].toUpperCase()) {
                code_2.innerHTML = `${(em_2[j])}`
            }
        }
   }
}

input_1.oninput = function () {
    for (let i = 901; i <= 926; i++) {
        (em.push(i.toString()))
        for (let j = 0; j < em.length; j++) {       
            if (input_1.value == em[j]) {
             code_1.innerHTML = `i love ${(arrayOfChars[j][0]).toUpperCase()}`
            }
        }
   }
}

let span = document.querySelector('footer span');

span.onclick = function () {
    window.open('https://www.facebook.com/moaaz.tsh/', '_blank');

}

