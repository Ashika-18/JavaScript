
document.body.style.color = "white";

document.body.style.backgroundColor = "gray";

s = 90;

document.write("あなたの点数は", s, "点です。<br>");

if(s < 70) {
    document.write("平均まであと", (70 - s), "点<br>");
    document.write("頑張ってね！");
} else {
    document.write("素晴らしい！");
}