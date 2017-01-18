import { NgModule } from '@angular/core';

import { IntercomBrowser } from './intercom.browser'
import { Intercom, IntercomEnviroment } from './intercom'
import * as IntercomDirectives from './intercom.directives'

export const INTERCOM_DIRECTIVES = [
	IntercomDirectives.IntercomTrackEventDirective,
	IntercomDirectives.IntercomNewMessageDirective,
];

@NgModule({
	providers: [
		IntercomBrowser,
		{
			provide: IntercomEnviroment,
			useClass: IntercomBrowser,
		},
		Intercom,
	],
})
export class IntercomModule {}
