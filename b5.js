let result = document.getElementById('result');
result.addEventListener('click',btresult);
function btresult() {
    let a = parseFloat(document.getElementById('kt').value);
    let b = parseFloat(document.getElementById('gk').value);
    let c = parseFloat(document.getElementById('ck').value);
    let mediumScore = (a + (b*2) + (c*3))/5;
    let name = document.getElementById('name').value;
    if(mediumScore >= 8 && a > 6.5 && b > 6.5 && c > 6.5) {
        alert(name + " : Xếp loại học lực giỏi");
    }else   if(mediumScore >= 6.5 && a > 5 && b > 5 && c > 5) {
                alert(name + " : Xếp loại học lực khá");
        }else if(mediumScore >= 5 && a > 3.5 && b > 6.5 && c > 6.5) {
                    alert(name + " : Xếp loại học lực Trung Bình");
                }else if(mediumScore >= 3.5 && a > 2 && b > 2 && c > 2) {
                        alert(name + " : Xếp loại yếu");
                        }else {
                                alert(name + " : Xếp loại kém");
                        }
}