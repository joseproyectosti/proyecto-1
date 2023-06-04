
let A = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];

let B = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function Snow() {
    let refp = 0;
    let refa = 1;
    let acum = 0;
    let contador = 0;
    let itera = 0;
    for (let f = 0; f < 6; f = f + 1) {
        refp = 0;
        refa = 1;
        for (let j = 0; j < 14; j = j + 1) {
            if (A[j] > contador) {
                refa = refp;
                refp = B[j];
                acum = acum + ((refp - 1) - refa);
            }
            if (refa == 0) {
                acum = acum - ((refp - 1) - refa); 
                refa = 1;
            } 
    
        }
        contador = contador + 1;
        
    }
    console.log(acum);
}
window.addEventListener("load", Snow);




//&& = == != >= <= \r\n % += || ¿