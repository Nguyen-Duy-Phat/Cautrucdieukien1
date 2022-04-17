let result = document.getElementById('btrose');
result.addEventListener('click',buttonrose);
function buttonrose() {
    let rose = parseInt(document.getElementById('rose').value); 
    if(rose > 0 && rose <= 200000) {
        let roseOfyou = parseFloat(rose * 0.02);
        alert('Với Doanh Thu : ' + rose +'VND' + 'Hoa hồng của bạn là : ' + roseOfyou + 'VND');
    }else if(rose >= 200000 && rose <= 500000) {
        let roseOfyou1 = parseFloat(rose * 0.05);
        alert('Với Doanh Thu : ' + rose +'VND' + 'Hoa hồng của bạn là : ' + roseOfyou1 + 'VND');  
    }else if(rose > 500000) {
        let roseOfyou1 = parseFloat(rose * 0.1);
        alert('Với Doanh Thu : ' + rose +'VND' + 'Hoa hồng của bạn là : ' + roseOfyou1 + 'VND');
    }
}