$("#nav").load('components/nav.html');
$("#banner").load('components/mainBanner.html');

if(localStorage.getItem('cookieSeen') === 'shown'){
    $("#cookie").hide();
    console.log('hide')
} else {
    $("#cookie").load('components/cookieBanner.html');
    console.log('show')
}

$('.close').click(function(e) {
  $('#banner').fadeOut();
});

function optIn() {

    try {
        localStorage.setItem('cookieSeen','shown');
        window["optimizely"].push({
            "type": "optOut",
            "isOptOut": false
        });

    } catch {
        console.log('optimizely var not set');
    }

    hideBanner();
}

function hideBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = "none"
}