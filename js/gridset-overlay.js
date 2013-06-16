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

        var p = ['l','lb','lc','m','mb','s'],
            c = [6,5,6,6,5,4],
            w = [768,768,768,480,480,0],
            b = document.getElementsByTagName('body')[0],
            gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',

            k = 0, breaks = '',

            styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:480px) {#gridsetoverlaywrap [class*=s1],#gridsetoverlaywrap [class*=s2],#gridsetoverlaywrap [class*=s3],#gridsetoverlaywrap [class*=s4],#gridsetoverlaywrap .s-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=s1]{width:11.212121212121213%;margin-left:0%;}#gridsetoverlaywrap [class*=s2]{width:32.7878787878788%;margin-left:15.212121212121%;}#gridsetoverlaywrap [class*=s3]{width:32.7878787878788%;margin-left:52%;}#gridsetoverlaywrap [class*=s4]{width:11.212121212121213%;margin-left:88.787878787879%;}#gridsetoverlaywrap .s-hide{display:none !important;}}@media only screen and (min-width:480px) and (max-width:768px) {#gridsetoverlaywrap [class*=m1],#gridsetoverlaywrap [class*=m2],#gridsetoverlaywrap [class*=m3],#gridsetoverlaywrap [class*=m4],#gridsetoverlaywrap [class*=m5],#gridsetoverlaywrap [class*=m6],#gridsetoverlaywrap .m-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=m1]{width:11.212121212121213%;margin-left:0%;}#gridsetoverlaywrap [class*=m2]{width:16.2689393939394%;margin-left:13.712121212121%;}#gridsetoverlaywrap [class*=m3]{width:16.2689393939394%;margin-left:32.481060606061%;}#gridsetoverlaywrap [class*=m4]{width:16.2689393939394%;margin-left:51.25%;}#gridsetoverlaywrap [class*=m5]{width:16.2689393939394%;margin-left:70.018939393939%;}#gridsetoverlaywrap [class*=m6]{width:11.212121212121213%;margin-left:88.787878787879%;}#gridsetoverlaywrap .m-hide{display:none !important;}#gridsetoverlaywrap [class*=mb1],#gridsetoverlaywrap [class*=mb2],#gridsetoverlaywrap [class*=mb3],#gridsetoverlaywrap [class*=mb4],#gridsetoverlaywrap [class*=mb5],#gridsetoverlaywrap .mb-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=mb1]{width:11.212121212121213%;margin-left:0%;}#gridsetoverlaywrap [class*=mb2]{width:22.5252525252525%;margin-left:13.712121212121%;}#gridsetoverlaywrap [class*=mb3]{width:22.5252525252525%;margin-left:38.737373737374%;}#gridsetoverlaywrap [class*=mb4]{width:22.5252525252525%;margin-left:63.762626262626%;}#gridsetoverlaywrap [class*=mb5]{width:11.212121212121213%;margin-left:88.787878787879%;}#gridsetoverlaywrap .mb-hide{display:none !important;}}@media only screen and (min-width:768px) {#gridsetoverlaywrap [class*=l1],#gridsetoverlaywrap [class*=l2],#gridsetoverlaywrap [class*=l3],#gridsetoverlaywrap [class*=l4],#gridsetoverlaywrap [class*=l5],#gridsetoverlaywrap [class*=l6],#gridsetoverlaywrap .l-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=l1]{width:11.212121212121213%;margin-left:0%;}#gridsetoverlaywrap [class*=l2]{width:16.8939393939394%;margin-left:13.212121212121%;}#gridsetoverlaywrap [class*=l3]{width:16.8939393939394%;margin-left:32.106060606061%;}#gridsetoverlaywrap [class*=l4]{width:16.893939393939394%;margin-left:51%;}#gridsetoverlaywrap [class*=l5]{width:16.8939393939394%;margin-left:69.893939393939%;}#gridsetoverlaywrap [class*=l6]{width:11.212121212121213%;margin-left:88.787878787879%;}#gridsetoverlaywrap .l-hide{display:none !important;}#gridsetoverlaywrap [class*=lb1],#gridsetoverlaywrap [class*=lb2],#gridsetoverlaywrap [class*=lb3],#gridsetoverlaywrap [class*=lb4],#gridsetoverlaywrap [class*=lb5],#gridsetoverlaywrap .lb-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=lb1]{width:11.212121212121213%;margin-left:0%;}#gridsetoverlaywrap [class*=lb2]{width:23.1919191919192%;margin-left:13.212121212121%;}#gridsetoverlaywrap [class*=lb3]{width:23.1919191919192%;margin-left:38.40404040404%;}#gridsetoverlaywrap [class*=lb4]{width:23.1919191919192%;margin-left:63.59595959596%;}#gridsetoverlaywrap [class*=lb5]{width:11.212121212121213%;margin-left:88.787878787879%;}#gridsetoverlaywrap .lb-hide{display:none !important;}#gridsetoverlaywrap [class*=lc1],#gridsetoverlaywrap [class*=lc2],#gridsetoverlaywrap [class*=lc3],#gridsetoverlaywrap [class*=lc4],#gridsetoverlaywrap [class*=lc5],#gridsetoverlaywrap [class*=lc6],#gridsetoverlaywrap .lc-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=lc1]{width:11.212121212121213%;margin-left:0%;}#gridsetoverlaywrap [class*=lc2]{width:11.212121212121213%;margin-left:13.212121212121%;}#gridsetoverlaywrap [class*=lc3]{width:22.5505000407102%;margin-left:26.424242424242%;}#gridsetoverlaywrap [class*=lc4]{width:22.5505000407102%;margin-left:50.974742464953%;}#gridsetoverlaywrap [class*=lc5]{width:11.212121212121213%;margin-left:75.525242505663%;}#gridsetoverlaywrap [class*=lc6]{width:11.212121212121213%;margin-left:88.737363717784%;}#gridsetoverlaywrap .lc-hide{display:none !important;}}</style>';

        // grid dimensions
var gridCols = function($prefix){
  if ($prefix === 's')  { return [11.212121212121213,32.7878787878788,32.7878787878788,11.212121212121213]; }
  if ($prefix === 'm')  { return [11.212121212121213,16.2689393939394,16.2689393939394,16.2689393939394,16.2689393939394,11.212121212121213]; }
  if ($prefix === 'mb') { return [11.212121212121213,22.5252525252525,22.5252525252525,22.5252525252525,11.212121212121213]; }
  if ($prefix === 'l')  { return [11.212121212121213,16.8939393939394,16.8939393939394,16.893939393939394,16.8939393939394,11.212121212121213]; }
  if ($prefix === 'lb') { return [11.212121212121213,23.1919191919192,23.1919191919192,23.1919191919192,11.212121212121213]; }
  if ($prefix === 'lc') { return [11.212121212121213,11.212121212121213,22.5505000407102,22.5505000407102,11.212121212121213,11.212121212121213]; }
}

var gridGutter = function($prefix){
    if ($prefix === 's')   { return 4; }
    if ($prefix === 'm')   { return 2.5; }
    if ($prefix === 'mb')   { return 2.5; }
    if ($prefix === 'l')   { return 2; }
    if ($prefix === 'lb')   { return 2; }
    if ($prefix === 'lc')   { return 2; }
}

var cols = {
    "p1" : {
        "hello" : [11.212121212121213,32.7878787878788,32.7878787878788,11.212121212121213],
        "goodbye" : "taco"
    },
    "p2": "value2",
    "p3": "value3"
};

// console.log(gridCols('l').length);
// console.log(cols.p1.hello[1]);
for (var key in cols) {
  if (cols.hasOwnProperty(key)) {
    console.log(key + " -> " + cols[key]);
  }
};

function countProperties(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}
console.log(countProperties(cols.p1));

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

        newgw.innerHTML = gw + styles;

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
