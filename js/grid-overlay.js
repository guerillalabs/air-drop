// Gridset Overlay JS

gs = {

    init: function () {

        if (window.location.href.match('gridset=show')) gs.show();

        gs.bind(document, 'keydown', function (e) {

            if (!e) var e = window.event;

            if(e.metaKey || e.ctrlKey) {

                switch (e.which || e.keyCode) {
                    case 71:

                        var gw = document.getElementById('gridsetoverlaywrap');

                        if (!gw) gs.show();
                        else gs.remove(gw);

                        gs.prevent(e);
                        break;

                }

            }


        });

    },

    removeQuotes: function (string) {
        if (typeof string === 'string' || string instanceof String) {
            string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
        }
        return string;
    },

    getColJSON: function () {
        var style = null;
        if ( window.getComputedStyle && window.getComputedStyle(document.body, ':before') ) {
            style = window.getComputedStyle(document.body, '::before');
            style = style.content;
        }
        return JSON.parse( gs.removeQuotes(style) );
    },

    countProperties: function (obj) {
        var count = 0;

        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                ++count;
        }

        return count;
    },

    remove: function (gw) {

        document.body.removeChild(gw);

        if(window.detachEvent) window.detachEvent('onresize', gs.width);
        else window.removeEventListener('resize', gs.width, false);

    },

    width: function () {

        var swv = document.getElementById('gridscreenwidthval');
        if (swv) swv.innerHTML = window.innerWidth + 'px';

    },

    show: function () {

        var colJSON = gs.getColJSON();

        var p = [],
            c = [],
            w = [],
            b = document.getElementsByTagName('body')[0],
            gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',
            k = 0, breaks = '';

        for (var key in colJSON) {
            if (colJSON.hasOwnProperty(key)) {
                p.push(key);
                c.push(gs.countProperties(colJSON[key].cols));
                if (colJSON[key].queryMin) {
                    w.push(colJSON[key].queryMin);
                } else {
                    w.push(0);
                }
            }
        };

        while (p[k]) {

            var hides = '',
                l = 0;

            if (w[k] != breaks && k == 0) gw += '<div>';
            else if (w[k] != breaks) gw += '</div><div>';

            while (p[l]) {

                if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
                l++;

            }

            gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';

            var i = 1;

            while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';

            gw += '</div>';

            if (k == w.length - 1) gw += '</div>';

            breaks = w[k];

            k++;

        }

        gw += '</div></div>';

        var newgw = document.createElement('div');

        newgw.id = 'gridsetoverlaywrap';

        newgw.innerHTML = gw;

        b.appendChild(newgw);

        gs.width();
        gs.bind(window, 'resize', gs.width);

    },

    bind : function (t, e, f) {

        if (t.attachEvent) t.attachEvent('on' + e, f);
        else t.addEventListener(e, f, false);

    },

    prevent : function (e) {

        if (e.preventDefault) e.preventDefault();
        else event.returnValue = false;

    }


};

gs.init();
