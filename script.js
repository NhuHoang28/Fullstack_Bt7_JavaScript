var clicks = document.querySelectorAll('.click');
clicks.forEach(function(click) {
    click.onclick = function() {
        var test = click.getAttribute('display');
        if (test == null)
            this.setAttribute('display', 'none');
        else click.removeAttribute('display');

    }
});
var click_mes = document.querySelectorAll('.click-me');
click_mes.forEach(function(click) {
    click.onclick = function(e) {
        var temp = this;
        for (var i = 0; i < click_mes.length; i++) {
            if (click_mes[i].getAttribute('stt') == temp.getAttribute('stt')) continue;
            if (click_mes[i].getAttribute('display') == null) click_mes[i].setAttribute('display', 'none');
        }
        if (temp.getAttribute('display') == null)
            this.setAttribute('display', 'none');
        else this.removeAttribute('display');
    }
});