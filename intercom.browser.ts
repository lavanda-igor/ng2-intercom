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
			this.loader();
		}
		this.boot(data);
	}

	sendCmd (cmd: string, data?: any) {
		let w = (<any> window);
		// Delay sending requests until Intercom is initialized
		// TODO: Make this an actual Queue so requests are sent in order
		if (w.Intercom === undefined) {
			setTimeout(this.sendCmd, 500, cmd, data);
		} else {
			w.Intercom(cmd, data);
		}
	}
	boot (data) {
		this.sendCmd('boot', data);
	}
	update (data) {
		this.sendCmd('update', data);
	}
	shutdown () {
		this.sendCmd('shutdown');
	}
	showNewMessage () {
		this.sendCmd('showNewMessage');
	}
	trackEvent (data?: any) {
		this.sendCmd('trackEvent', data);
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
