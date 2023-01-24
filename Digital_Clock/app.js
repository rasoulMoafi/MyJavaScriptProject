

var showButton = document.getElementById('btn');


showButton.addEventListener("click", function () {
    showButton.classList.add("hidden");
    
    document.getElementById('root').classList.add("show");

    var showh1 = document.querySelector(".myh1");
    showh1.classList.add("show");

    setInterval(showTime, 1000);
    function showTime() {
        var time = new Date();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();


        var indicateTime = document.getElementById('root');
        indicateTime.innerHTML = hour + ":" + minutes + ":" + seconds;
    }

})











