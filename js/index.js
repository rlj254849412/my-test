function organization() {
    var url = "json/d1.json"
    var r = new XMLHttpRequest();
    r.open("get", url);
    r.send(null);
    r.onload = function () {
        if (r.status == 200) {
            var json = JSON.parse(r.responseText);
            var diva = document.getElementsByClassName("nav_t")[0]
            diva.innerHTML = json.cen
        }
    }
}
function lta() {
    var url = "json/d2.json"
    var r = new XMLHttpRequest();
    r.open("get", url);
    r.send(null);
    r.onload = function () {
        if (r.status == 200) {
            var json = JSON.parse(r.responseText);
            var diva = document.getElementsByClassName("nav_t")[0]
            diva.innerHTML = json.cen
        }
    }
}
function tam() {
    var url = "json/d3.json"
    var r = new XMLHttpRequest();
    r.open("get", url);
    r.send(null);
    r.onload = function () {
        if (r.status == 200) {
            var json = JSON.parse(r.responseText);
            var diva = document.getElementsByClassName("nav_t")[0]
            diva.innerHTML = json.cen
        }
    }
}
function mat() {
    var url = "json/d4.json"
    var r = new XMLHttpRequest();
    r.open("get", url);
    r.send(null);
    r.onload = function () {
        if (r.status == 200) {
            var json = JSON.parse(r.responseText);
            var diva = document.getElementsByClassName("nav_t")[0]
            diva.innerHTML = json.cen
        }
    }
}
function tfc() {
    var url = "json/d5.json"
    var r = new XMLHttpRequest();
    r.open("get", url);
    r.send(null);
    r.onload = function () {
        if (r.status == 200) {
            var json = JSON.parse(r.responseText);
            var diva = document.getElementsByClassName("nav_t")[0]
            diva.innerHTML = json.cen
        }
    }
}
function contact() {
    var url = "json/d6.json"
    var r = new XMLHttpRequest();
    r.open("get", url);
    r.send(null);
    r.onload = function () {
        if (r.status == 200) {
            var json = JSON.parse(r.responseText);
            var diva = document.getElementsByClassName("nav_t")[0]
            diva.innerHTML = json.cen
        }
    }
}
