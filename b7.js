let result = document.getElementById('result');
result.addEventListener('click',btresult);
function btresult() {
    const deFault = 25000;
    let minute = parseInt(document.getElementById('minute').value);
    let expense = 0;
    if(minute > 200) {
        expense = (((minute - 200) * 200) + (150 * 400) + (50 * 600) + deFault);
        alert('Phí điện thoại của bạn là : ' + expense + 'VND');
    }else if(minute > 50) {
        expense = (((minute - 50) * 400) + (50 * 600) + deFault);
        alert('Phí điện thoại của bạn là : ' + expense + 'VND');
    }else {
        expense = minute * 600;
        alert('Phí điện thoại của bạn là : ' + expense + 'VND');
    }
}
