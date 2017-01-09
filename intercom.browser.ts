/**
 * Intercom Browser module for Angular
 */
export class IntercomBrowser {
	app_id: string;

	init (data) {
		if (data.app_id) {
			this.app_id = data.app_id;
		}
		let w = (<any> window);
		// Intercom initialization
		w.intercomSettings = data;
		if (w.Intercom === undefined){
			let i = function (){
				i.c(arguments);
			};
			i.q=[]; i.c= function(args){
				i.q.push(args)
			};
			w.Intercom = i;
			if(w.attachEvent){
				w.attachEvent('onload',this.loader);
			} else {
				w.addEventListener('load',this.loader,false);
			}
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

	loader () {
		let s = document.createElement('script');
		s.type='text/javascript';
		s.async=true;
		s.src=`https://widget.intercom.io/widget/${this.app_id}`;
		let x = document.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s,x);
	}
}
