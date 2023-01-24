var btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    var sentense = document.getElementById("inputSentense");
    var lenOfLetter = sentense.value.length;
    var lenOfWord = sentense.value.split(' ').length;
    var btn = document.getElementById("root").innerHTML = "Your sentense have <span>" + (lenOfLetter - lenOfWord + 1) + "</span> letters and have <span>" + lenOfWord + "</span> Words";



})