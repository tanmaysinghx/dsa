
let input = 5;

function pattern1() {
    console.log("hello")
    if (input > 0) {
        for (let i=0; i<input; i++) {
            for (let j=0; j<input; j++) {
                console.log(j);
            }
        }
    }
}