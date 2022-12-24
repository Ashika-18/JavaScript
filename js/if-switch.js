let num = Math.floor(Math.random() * 9);

console.log(num);

if (num === 4) {
    console.log('大当たり！😆');
} else if (num === 3) {
    console.log('当たりです🧐');
} else {
    console.log('ハズレ！');
}