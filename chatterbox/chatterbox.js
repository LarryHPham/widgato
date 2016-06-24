var chatterbox = chatterbox || [];
var chatterLayer = chatterLayer || [];
chatterbox[chatterbox.length] = function(e) {
    console.log('Chatterbox ID: ', e);
    var t = location.protocol == 'https:' ? 'https' : 'http',
        r = [{
            min: 1200,
            widget: 970,
            title: 'Promoted Stories from the Chatter Network',
            'class': 'biggest'
        }, {
            min: 768,
            widget: 970,
            title: 'Promoted Stories from the Chatter Network',
            'class': 'bigger'
        }, {
            min: 650,
            widget: 970,
            title: 'Promoted Stories from the Chatter Network',
            'class': 'big'
        }, {
            min: 430,
            widget: 970,
            title: 'Promoted Stories',
            'class': 'small'
        }, {
            min: 0,
            widget: 250,
            title: 'Promoted Stories',
            'class': 'smallest'
        }],
        s = {
            250: {
                url: t + '://w1.synapsys.us/widgets/dynamic_widget/dynamic_widget.html'
            },
            970: {
                url: t + '://w1.synapsys.us/widgets/dynamic_widget/dynamic_widget_970.html'
            }
        },
        a = {
            'sportschatter.com': t + '://dw.synapsys.us/chatter_api.php?site=sportschatter.com',
            'celebchatter.com': t + '://dw.synapsys.us/chatter_api.php?site=celebchatter.com',
            'politicschatter.com': t + '://dw.synapsys.us/chatter_api.php?site=politicschatter.com',
            'oddchatter.com': t + '://dw.synapsys.us/chatter_api.php?site=oddchatter.com'
        },
        n = t + '://w1.synapsys.us/widgets/chatterbox/chatterbox.js',
        i = function() {
            var e = top.location.host;
            var t = e.split('.');
            switch (t.length) {
                case 0:
                case 1:
                case 2:
                    break;
                default:
                    if (t[t.length - 3] == 'att' && t[t.length - 2] == 'yahoo' && t[t.length - 1] == 'com') {
                        e = 'att.yahoo.com'
                    } else if (t[t.length - 2] == 'co' && t[t.length - 1] == 'uk') {
                        e = t[t.length - 3] + '.' + t[t.length - 2] + '.' + t[t.length - 1]
                    } else {
                        e = t[t.length - 2] + '.' + t[t.length - 1]
                    }
                    break
            }
            return e
        }(),
        o = document.currentScript || function() {
            var e = document.getElementsByTagName('script');
            for (var t = 0; t <= e.length; t++) {
                if (e[t].src.indexOf(n) != -1) {
                    return e[t]
                }
            }
        }(),
        c = {},
        l = -1,
        d, h, u = {
            dom: i,
            category: B('widget') === false ? 'nba' : B('widget').toLowerCase(),
            remn: false,
            rand: Math.floor(Math.random() * 10)
        },
        m = B('rss') === false ? 'sportschatter.com' : B('rss'),
        f = function() {
            if (m === false || typeof a[m] == 'undefined') {
                m = i;
                if (typeof a[m] === 'undefined') {
                    return a['sportschatter.com']
                }
            }
            return a[m]
        }(),
        p = B('small') === 'yes' ? true : false,
        g = [],
        y = function() {
            if (i.indexOf('chatter') > -1) {
                return i
            }
            return m.split('.')[0].replace('chatter', '-chatter') + '.' + i
        }(),
        w = [],
        v, b = false,
        _ = false,
        x = false,
        E = 0;
    if (p) {
        u.category = 'n/a'
    }
    var A = true,
        k = '//www.googletagmanager.com/gtm.js?id=GTM-WDG7BV&l=chatterLayer',
        C = document.getElementsByTagName('script');
    for (var L = 0; L < C.length; L++) {
        if (C[L].src.indexOf(k) != -1) {
            A = false
        }
    }
    if (A) {
        var P = document.createElement('script');
        P.async = true;
        P.src = '//www.googletagmanager.com/gtm.js?id=GTM-WDG7BV&l=chatterLayer';
        o.parentNode.insertBefore(P, o)
    }
    chatterLayer.push({
        event: 'chatterboxPageView',
        rss: m,
        style: p ? '3UP' : '5PACK',
        widget: u.category
    });
    Array.prototype.randItem = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Element.prototype.setAttributes = function(e) {
        for (var t in e) {
            if (t === 'style') {
                for (var r in e[t]) {
                    this.style[r] = e[t][r]
                }
            } else if (t === 'html') {
                this.innerHTML = e[t]
            } else if (t === 'text') {
                this.innerText = e[t]
            } else {
                this.setAttribute(t, e[t])
            }
        }
    };
    Element.prototype.appendChildren = function() {
        for (var e = 0; e < arguments.length; e++) {
            if (typeof arguments[e].length !== 'undefined') {
                for (var t = 0; t < arguments[e].length; t++) {
                    this.appendChild(arguments[e][t])
                }
            } else {
                this.appendChild(arguments[e])
            }
        }
    };
    var T = o.parentElement.clientWidth;
    for (var M = 0; M < r.length; M++) {
        if (T >= r[M].min) {
            break
        }
    }
    if (p) {
        M = 0
    }
    S();
    N();

    function S() {
        var e;
        if (window.XMLHttpRequest) {
            e = new XMLHttpRequest
        } else {
            e = new ActiveXObject('Microsoft.XMLHTTP')
        }
        e.onreadystatechange = function() {
            if (e.readyState == XMLHttpRequest.DONE) {
                if (e.status == 200) {
                    try {
                        w = JSON.parse(e.responseText);
                        w.length = 3;
                        for (var r = 0; r < g.length; r++) {
                            g[r].getElementsByTagName('a')[0].href = t + '://' + y + w[r].link;
                            g[r].querySelectorAll('.dw_item_title')[0].innerHTML = w[r].title;
                            g[r].querySelectorAll('.dw_item_sub')[0].innerHTML = (m.charAt(0).toUpperCase() + m.slice(1)).replace('chatter', 'Chatter').split('.')[0];
                            g[r].querySelectorAll('.dw_img')[0].setAttributes({
                                style: {
                                    'background-image': 'url(\'' + function(e) {
                                        try {
                                            var t = JSON.parse(atob(B('o', e)))
                                        } catch (r) {
                                            var t = {
                                                x: .5,
                                                y: .5
                                            }
                                        }
                                        return e.replace(/o=[^&$]+/, 'o=' + btoa(JSON.stringify({
                                            x: t.x,
                                            y: t.y,
                                            height: 240,
                                            width: 400
                                        })))
                                    }(w[r].thumbnail) + '\')'
                                }
                            })
                        }
                        return true
                    } catch (s) {
                        console.log(s);
                        var a = 'Error Parsing JSON'
                    }
                } else {
                    var a = e.statusText;
                    if (e.status == 500) {
                        try {
                            a = JSON.parse(e.responseText).message
                        } catch (s) {
                            console.log('No JSON message')
                        }
                    }
                    a = 'HTTP Error (' + e.status + '): ' + a
                }
                if (E++ > 10) {
                    throw a
                }
                setTimeout(S, 500)
            }
        };
        e.open('GET', f, true);
        e.send()
    }

    function N() {
        var s = document.createElement('link');
        s.setAttributes({
            href: t + '://fonts.googleapis.com/css?family=Lato',
            rel: 'stylesheet',
            type: 'text/css'
        });
        o.parentNode.insertBefore(s, o);
        var a = document.createElement('link');
        a.setAttributes({
            href: t + '://w1.synapsys.us/widgets/chatterbox/chatterbox.css',
            rel: 'stylesheet',
            type: 'text/css'
        });
        o.parentNode.insertBefore(a, o);
        d = document.createElement('div');
        d.setAttribute('class', 'dw_container');
        if (d.addEventListener) {
            d.addEventListener('mouseover', O)
        } else if (d.attachEvent) {
            d.attachEvent('onmouseover', O)
        }
        var n = document.createElement('div');
        n.setAttribute('class', 'dw_article');
        v = document.createElement('div');
        v.setAttribute('class', 'dw_title');
        for (var c = 0; c < 3; c++) {
            var l = [document.createElement('a'), document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
            l[1].appendChild(document.createElement('div'));
            l[0].setAttributes({
                onclick: 'chatterbox[' + e + '].a_click(' + c + ')',
                target: '_blank'
            });
            l[1].setAttribute('class', 'dw_img');
            l[2].setAttribute('class', 'dw_t_cont');
            l[3].setAttributes({
                'class': 'dw_item_title',
                text: ''
            });
            l[4].setAttributes({
                'class': 'dw_item_sub',
                text: ''
            });
            l[5].setAttribute('class', 'dw_article_link');
            l[2].appendChildren(l[3], l[4]);
            l[0].appendChildren(l[1], l[2]);
            l[5].appendChildren(l[0]);
            g[c] = l[5]
        }
        n.appendChildren(v, g);
        if (!p) {
            var m = {
                dom: i,
                remn: false,
                cat: u.category,
                type: 'dynamic_' + u.category,
                subd: false,
                src: 'content.synapsys.us/l/n/index-mdb.php',
                name: i.split('.').join('_') + '_' + function(e) {
                    switch (e) {
                        case 'nba':
                        case 'college_basketball':
                            return 'sports';
                            break;
                        case 'crime':
                        case 'politics':
                        case 'demographics':
                        case 'weather':
                        case 'disaster':
                            return 'realestate';
                            break;
                        default:
                            return e
                    }
                }(u.category) + (r[M].min == 0 ? '_chatterbox_m_300x250' : '_chatterbox_300x250'),
                widU: r[M].min == 0 ? '//w1.synapsys.us/widgets/dynamic_widget/dynamic_widget_250.html' : '',
                widW: 300,
                widH: r[M].min == 0 ? 250 : 0,
                adW: 300,
                adH: 250,
                ofx: 0,
                ofy: 0,
                rand: (Math.random() * 1e6).toString() + (Math.random() * 1e6).toString()
            };
            var f = document.createElement('div');
            f.setAttribute('class', 'dw_ad_stack');
            var y = document.createElement('script');
            y.src = t + '://content.synapsys.us/l/n/index-mdb.php?' + Object.keys(m).map(function(e) {
                return encodeURIComponent(e) + '=' + encodeURIComponent(m[e])
            }).join('&');
            f.appendChild(y);
            h = document.createElement('iframe');
            h.setAttributes({
                scrolling: 'no',
                'class': 'dw_iframe'
            });
            if (r[M].min != 0) {
                d.appendChildren(n, f, h)
            } else {
                console.log('CHATTERBOX MOBILE');
                d.setAttribute('class', 'dw_container smallest mobile');
                d.appendChildren(n, f)
            }
        } else {
            d.appendChild(n)
        }
        o.parentElement.insertBefore(d, o);
        o.parentElement.removeChild(o)
    }

    function O() {
        if (_) {
            return true
        }
        chatterLayer.push({
            event: 'chatterMouseover',
            style: p ? '3UP' : '5PACK',
            rss: m,
            widget: u.category
        });
        _ = true;
        d.removeEventListener('mouseover', O)
    }

    function U() {
        var e = d.parentElement.clientWidth;
        for (var t = 0; t < r.length; t++) {
            if (e >= r[t].min) {
                break
            }
        }
        if (t == l) {
            return false
        }
        l = t;
        d.setAttribute('class', 'dw_container ' + r[t].class + (p !== false ? ' small_container' : ''));
        v.setAttributes({
            html: '<svg xmlns="http://www.w3.org/2000/svg" style="stroke:#ff3131;stroke-width:2px;fill:none;width:20.57px;height:18px;" viewBox="0 0 32 28"><path stroke-linecap="round" stroke-linejoin="round" d="m 4,14 l 12,12 l 12,-12 a 6 6 0 1 0 -10 -10 l -2, 2 l -2, -2 a 6 6 0 1 0 -10 10" /></svg> ' + r[t].title
        });
        H(r[t].widget)
    }

    function H(e) {
        if (p) {
            return false
        }
        var t = {};
        switch (e) {
            case 250:
                t = s[250];
                break;
            default:
                t = s[970];
                break
        }
        if (t != c) {
            h.src = 'about:blank';
            c = t;
            setTimeout(function() {
                h.src = c.url + '?' + encodeURIComponent(JSON.stringify(u))
            }, 0)
        }
    }

    function B(e, t) {
        t = t || o.src;
        var r = new RegExp('[?&]' + e.replace(/[\[\]]/g, '\\$&') + '(=([^&#]*)|&|#|$)');
        var s = r.exec(t);
        if (!s || !s[2]) {
            return false
        }
        return decodeURIComponent(s[2].replace(/\+/g, ' '))
    }

    function R(e) {
        if (typeof w[e] == 'undefined') {
            return true
        }
        chatterLayer.push({
            event: 'chatter_click',
            style: p ? '3UP' : '5PACK',
            rss: m,
            widget: u.category
        });
        chatterLayer.push({
            event: 'article_click',
            article_url: m + w[e].link,
            article_title: w[e].title,
            style: p ? '3UP' : '5PACK'
        })
    }

    function j() {
        if (b) {
            return true
        }
        var e = {
                x: window.scrollX,
                y: window.scrollY,
                w: window.innerWidth,
                h: window.innerHeight
            },
            t = {
                x: d.offsetLeft,
                y: d.offsetTop,
                w: d.offsetWidth,
                h: d.offsetHeight
            },
            r = t.w * t.h,
            s = I(e.x, e.w, t.x, t.w),
            a = I(e.y, e.h, t.y, t.h);
        dispArea = s * a, dispPerc = dispArea / r;
        if (!x && dispPerc > 0) {
            x = true;
            chatterLayer.push({
                event: 'chatterVisibleMin',
                style: p ? '3UP' : '5PACK',
                rss: m,
                widget: u.category
            })
        }
        if (dispPerc >= .6) {
            b = true;
            chatterLayer.push({
                event: 'chatterVisible',
                style: p ? '3UP' : '5PACK',
                rss: m,
                widget: u.category
            });
            for (L = 0; L < w.length; L++) {
                chatterLayer.push({
                    event: 'chatterboxImpression',
                    article_url: m + w[L].link,
                    style: p ? '3UP' : '5PACK',
                    article_title: w[L].title
                })
            }
            window.removeEventListener('scroll', j)
        }
    }

    function I(e, t, r, s) {
        if (e + t < r || e > r + s) {
            return 0
        }
        if (e > r && e + t < r + s || e < r && e + t > r + s) {
            return s
        }
        if (e > r) {
            return r + s - e
        }
        if (r + s > e + t) {
            return e + t - r
        }
        return 0
    }

    function K() {
        return {
            style: p ? '3UP' : '5PACK',
            rss: m,
            widget: u.category,
            articles: w
        }
    }
    if (r[M].min != 0) {
        U();
        window.addEventListener('resize', U, false)
    }
    window.addEventListener('scroll', j, false);
    return {
        cw: H,
        sc: U,
        a_click: R,
        get_data: K
    }
}(chatterbox.length);
