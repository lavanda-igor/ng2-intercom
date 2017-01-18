import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Intercom } from './intercom';

@Directive({ selector: '[intercomTrackEvent]' })
export class IntercomTrackEventDirective {
	intercomService: Intercom;
	@Input('intercomTrackEvent') eventName: string;

	constructor(intercomService: Intercom) {
		this.intercomService = intercomService;
	}

	@HostListener('click', ['$event'])
	onClick(e) {
		this.intercomService.trackEvent(this.eventName);
	}
}

@Directive({ selector: '[intercomNewMessage]' })
export class IntercomNewMessageDirective {
	intercomService: Intercom;
	@Input('intercomNewMessage') msg: string;

	constructor(intercomService: Intercom) {
		this.intercomService = intercomService;
	}

	@HostListener('click', ['$event'])
	onClick(event) {
		this.intercomService.showNewMessage(this.msg);
	}
}
