/**
 * Intercom Browser module for Angular
 */
export class IntercomBrowser {
	app_id: string;
	q: any[] = [];

	init (data) {
		if (data.app_id) {
			this.app_id = data.app_id;
		}
		let w = (<any> window);
		// Intercom initialization
		w.intercomSettings = data;
		if (w.Intercom === undefined){
			w.Intercom = this;
			if(w.attachEvent){
				w.attachEvent('onload',this.loader);
			} else {
				w.addEventListener('load',this.loader,false);
			}
		}
		this.boot(data);
	}
	boot (data) {
		this.q.push(['boot', data]);
	}
	update (data) {
		this.q.push(['update', data]);
	}
	shutdown () {
		this.q.push(['shutdown']);
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
