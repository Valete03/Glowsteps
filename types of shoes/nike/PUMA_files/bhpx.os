var grv_queryString = window.location.search;var grv_urlParams = new URLSearchParams(grv_queryString);var grv_source = grv_urlParams.get('utm_source');if(grv_source!='' && grv_source!=null){ grvfiregoalpx2 = new Image(); grvfiregoalpx2.src = 'https://ads01.groovinads.com/grv/track/bhpx.os?idc=6945&noredir=1&src='+grv_source;}if(grv_source=='' || grv_source==null){ var grv_source = grv_urlParams.get('cmpid');if(grv_source!='' && grv_source!=null){ grvfiregoalpx2 = new Image(); grvfiregoalpx2.src = 'https://ads01.groovinads.com/grv/track/bhpx.os?idc=6945&noredir=1&cmpid=1&src='+grv_source;}}var grv_clid = grv_urlParams.get('fbclid');if(grv_clid!='' && grv_clid!=null){ grvfiregoalpx2 = new Image(); grvfiregoalpx2.src = 'https://ads01.groovinads.com/grv/track/bhpx.os?idc=6945&noredir=1&src=fbk&fbclid='+grv_clid;}var grv_clid = grv_urlParams.get('gclid');if(grv_clid!='' && grv_clid!=null){ grvfiregoalpx2 = new Image(); grvfiregoalpx2.src = 'https://ads01.groovinads.com/grv/track/bhpx.os?idc=6945&noredir=1&src=googcl&fbclid='+grv_clid;}var grv_clid = grv_urlParams.get('dclid');if(grv_clid!='' && grv_clid!=null && grv_clid==''){ grvfiregoalpx2 = new Image(); grvfiregoalpx2.src = 'https://ads01.groovinads.com/grv/track/bhpx.os?idc=6945&noredir=1&src=dbl&fbclid='+grv_clid;}
    try{var grvclid = grv_urlParams.get('grvclid');
    var grv_idadsitem = grv_urlParams.get('grv_iai');
    if(grvclid!='' & grvclid!=null & typeof grvclid!==undefined ){localStorage.setItem("grvclid",grvclid);}
    else if(localStorage.getItem("grvclid")==undefined || localStorage.getItem("grvclid")==null || localStorage.getItem("grvclid")=='' || !isNaN(localStorage.getItem("grvclid")) ){localStorage.setItem("grvclid","19f9c274f04ff14"); grvclid="19f9c274f04ff14";} else grvclid=localStorage.getItem("grvclid");}catch(err){}
    if(grv_idadsitem!='' & grv_idadsitem!=null & typeof grv_idadsitem!==undefined ){
    var grv_data = {
        value: grv_idadsitem,
        timestamp: Date.now()
    };
    localStorage.setItem("grv_idadsitem", JSON.stringify(grv_data));
    }
    try{
        var grv_clid_search = localStorage.getItem('grvclid');
        if(grv_clid_search && grv_clid_search !== 'null' && grv_clid_search !== 'undefined' && grv_clid_search !== '') {
            var grv_searchterm = grv_urlParams.get('s') || grv_urlParams.get('q') || grv_urlParams.get('_q') || '';
            if(grv_searchterm && grv_searchterm !== '') {
                var grv_search_img = new Image();
                grv_search_img.src = 'https://ads01.groovinads.com/grv/track/bhpx.os?idc=6945&fjs=0&noredir=1&st=' + encodeURIComponent(grv_searchterm) + '&grvclid=' + grv_clid_search;
            }
        }
    }catch(err){}
    if (typeof grvclidscp39 === 'undefined') var grvclidscp39 = document.createElement('script');
		grvclidscp39.setAttribute(
		'src',
		'https://ads01.groovinads.com//grv/track/bhpx.os?idc=6945&fgjs=1&sku=%27%27&idcategory=%27%27&match=1&grvclid='+escape(grvclid)
		);
		grvclidscp39.setAttribute('async', '');
		document.body.appendChild(grvclidscp39);