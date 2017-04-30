(function(d, e) {

    e = d.scripts[0];
    d.head.innerHTML = '<meta charset="UTF-8"><title>' + e.getAttribute("title") + '</title>';

    function ajax(e, n, t) {
        var r = new XMLHttpRequest;
        return r.open("GET", e + ".brotli"), r.overrideMimeType("text/plain; charset=x-user-defined; j1Lib"), r.responseType = 'arraybuffer', r.addEventListener("load", function() {
            200 == r.status ? n(new TextDecoder("utf-8").decode(new Uint8Array(new Brotli().decompressArray(new Uint8Array(r.response))))) : t(r)
        }), r.addEventListener("error", function() {
            t(r)
        }), r
    };



    ajax(e.getAttribute("html"), function(data) {

        d.body.innerHTML = data;

    }).send();


    e.getAttribute("css").split(";").forEach(function(e) {

        ajax(e, function(data) {
            d.head.innerHTML += "<style>" + data + "</style>";
        }).send();

    });

})(document);