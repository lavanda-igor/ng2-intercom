import { NgModule } from '@angular/core';

import { IntercomBrowser } from './intercom.browser'
import { Intercom, IntercomEnviroment } from './intercom'

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
