import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
export class IntercomEnviroment {
	init(data: Object, onLoad?, onError?): any {
		throw new Error('Error init IntercomEnviroment')
	}
	boot(data: Object): any {
		throw new Error('Error boot IntercomEnviroment')
	}
	update(data: Object): any {
		throw new Error('Error update IntercomEnviroment')
	}
	shutdown() {
		throw new Error('Error shutdown IntercomEnviroment')
	}
	showNewMessage(msg?: string) {
		throw new Error('Error showNewMessage IntercomEnviroment')
	}
	trackEvent(name: string, data: Object): any {
		throw new Error('Error trackEvent IntercomEnviroment')
	}
}
// Intercom -> IntercomEnviroment
@Injectable()
export class Intercom {
	constructor(public intercom: IntercomEnviroment){}

	init(data, onLoad?, onError?){
		return this.intercom.init(data, onLoad, onError);
	}
	boot(data) {
		return this.intercom.boot(data);
	}
	update (data) {
		return this.intercom.update(data);
	}
	shutdown () {
		return this.intercom.shutdown();
	}
	showNewMessage (msg?: string) {
		return this.intercom.showNewMessage(msg);
	}
	trackEvent (name: string, data?: any) {
		return this.intercom.trackEvent(name, data);
	}
}
