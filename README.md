# Angular2 Intercom

This is an Intercom wrapper for Angular2 that also works with angular-universal
It supports all intercom methods.

This was taken from: https://github.com/CaliStyle/angular2-intercom and turned into an NPM module by Chris Moyer.

All credit for the original development goes to Scott Wyatt (https://github.com/scott-wyatt).

## Pre-requisites
Be sure to add a script tag including Intercom in your main HTML


## Configuration

Import the IntercomModule in your AppModule

```ts
// Bootstrap

import { IntercomModule, INTERCOM_DIRECTIVES } from 'ng2-intercom';

@NgModule({
	imports: [
		IntercomModule,
		NgbModule.forRoot(),
	],
	declarations: [
		...INTERCOM_DIRECTIVES,
	],
export class AppModule { }
```


Inject the Intercom service into your AppComponent to initialize it

```ts
// App
...
import { Intercom } from 'ng2-intercom/intercom';

@Component({
	selector: 'app',
	template: `...`
})
export class AppComponent implements OnInit {
	constructor(private intercom: Intercom){ }

	ngOnInit() {
		this.intercom.init({
			app_id: <app_id>,
			// Supports all optional configuration.
			widget: {
				"activator": "#intercom"
			}
		});
	}
}

```

Use it in HTML as an attribute directive:
```html

<a [intercomTrackEvent]="'Click Link'">Link that's tracked</a>
<a [intercomNewMessage]="'Pre-populated message'">Request Help</a>

```
