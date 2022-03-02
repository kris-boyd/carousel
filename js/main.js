document.querySelector("#launch-button").addEventListener('click', launch);
document.querySelector('#how-many').addEventListener('')
function launch() {
const howMany = document.querySelector('#how-many').value;
let turn = 0;  
const turnDisplay = document.querySelector('#turn-display');
for (let i = 1; i <= howMany; i++) {
    setTimeout(()=> {
    turn++;
    turnDisplay.innerText = turn;
        },1000 * i)
    }
// let i = 1;
// while (i <= howMany) {
//     setTimeout(() => {
//         turn++;
//         turnDisplay.innerText =turn;
//     }, 1000 * i)
//     i++;

}

