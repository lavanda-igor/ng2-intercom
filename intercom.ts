import { Injectable } from '@angular/core';

// Abstract Class to Catch implementations
export class IntercomEnviroment {
	init(data: Object): any {
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
	showNewMessage() {
		throw new Error('Error showNewMessage IntercomEnviroment')
	}
	trackEvent(data: Object): any {
		throw new Error('Error trackEvent IntercomEnviroment')
	}
}
// Intercom -> IntercomEnviroment
@Injectable()
export class Intercom {
	constructor(public intercom: IntercomEnviroment){}

	init(data){
		return this.intercom.init(data);
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
	showNewMessage () {
		return this.intercom.showNewMessage();
	}
	trackEvent (data?: any) {
		return this.intercom.trackEvent(data);
	}
}
