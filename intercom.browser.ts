
export class IntercomBrowser {
	init (data) {
		// Intercom initialization
		window.intercomSettings = data;
		if (window.Intercom === undefined){
			(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=`https://widget.intercom.io/widget/${data.app_id}`;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
		}
		(<any> window).Intercom("boot", data);
	}
	boot (data) {
		(<any> window).Intercom("boot", data);
	}
	update (data) {
		(<any> window).Intercom("update", data);
	}
	shutdown () {
		(<any> window).Intercom("shutdown");
	}
}
