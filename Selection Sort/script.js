const button = document.getElementById('btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const reset = document.getElementById('reset-btn')
 
let array = generateRandomArray(40);
let barWidth = canvas.width / array.length;

function generateRandomArray(size) {
    return Array(size).fill(0).map(() => Math.floor(Math.random() * 400) + 10);
}

function drawArray(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < array.length; i++) {
        let x = i * barWidth;
        let y = canvas.height - array[i];
        ctx.fillStyle = '#d04773';
        ctx.fillRect(x, y, barWidth, array[i]);
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(array[i], x + barWidth / 2, y - 10);
    }
}


async function selectionSort(array){
    let minIdx;
    for(let i=0;i<array.length;i++){
        minIdx=i;
        for(let j=i;j<array.length;j++){
            if(array[j]<array[minIdx]){
                minIdx=j;
            }
        }
        await new Promise(resolve=>setTimeout(resolve,100));
        if(minIdx!=i){
            [array[i],array[minIdx]]=[array[minIdx],array[i]];
        }
        drawArray(array);
        console.log(array);
    }
}

function resetFunc(){
    array = generateRandomArray(40);
    drawArray(array);
}


button.addEventListener('click',async ()=>{
    await selectionSort(array);
});

reset.addEventListener('click',()=>{
    resetFunc();
})

drawArray(array);
