var billAmount = document.getElementById("billAmount");
var percentTip = document.getElementById("percentTip");


// var submitButton = document.getElementById("submitbtn");


// submitButton.addEventListener("click", function () {
//     var percentTipint = parseInt(percentTip.value);
//     var tipAmount = billAmount * percentTipint / 100;
//     console.log(tipAmount);
// })


function calTip() {

    var percentTipint = parseInt(percentTip.value);
    var billAmountint = parseInt(billAmount.value);
    tipAmountint = billAmountint * percentTipint / 100;
    document.getElementById("tipAmount").value = tipAmountint;
    var totalint = billAmountint * (100 - percentTipint) / 100;
    document.getElementById("total").value = totalint;

}