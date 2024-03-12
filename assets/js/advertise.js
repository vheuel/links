var link = new Array();
link[0] = ' <a target="_blank" href="https://accounts.binance.info/register?ref=73849866"><img src="/assets/img/binance.png"  alt="" width="100%" /></a> ';

link[1] = ' <a href="https://indodax.com/ref/vheuel/1"><img src="/assets/img/indodax.gif" width="100%" alt=""/></a> ';

window.onload = function() {
    var rand = Math.floor(Math.random() * link.length);
    document.getElementById('randomLink').innerHTML = link[rand];
}

setInterval(function() {
    var rand = Math.floor(Math.random() * link.length);
    document.getElementById('randomLink').innerHTML = link[rand];
}, 5000); // Ganti elemen setiap 5 detik
