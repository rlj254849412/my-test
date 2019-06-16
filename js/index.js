function organization() {
    var url = "http://rlj254849412.github.io/json/d1.json"
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
    var url = "http://rlj254849412.github.io/json/d2.json"
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
    var url = "http://rlj254849412.github.io/json/d3.json"
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
    var url = "http://rlj254849412.github.io/json/d4.json"
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
    var url = "http://rlj254849412.github.io/json/d5.json"
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
    var url = "http://rlj254849412.github.io/json/d6.json"
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
