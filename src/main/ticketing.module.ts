/** vcloud-director-ui-extension-sample-ticketing-phase3
 *  SPDX-License-Identifier: BSD-2-Clause
 *  Copyright 2018 VMware, Inc. All rights reserved. VMware Confidential
 */
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {Inject, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';
import { VcdApiClient, VcdSdkModule } from "@vcd/sdk";
import {EXTENSION_ROUTE, ExtensionNavRegistration, ExtensionNavRegistrationAction} from '@vcd/sdk/common';
import { TranslateService } from "@vcd/sdk/i18n";
import {TicketingComponent} from './ticketing.component';
import {ROUTES} from './ticketing.routes';

import {ClarityModule} from 'clarity-angular';
import { PluginModule } from '@vcd/sdk/core';

@NgModule({
    imports: [
        ClarityModule,
        CommonModule,
        VcdSdkModule,
        RouterModule.forChild(ROUTES),
        FormsModule
    ],
    declarations: [
        TicketingComponent
    ],
    bootstrap: [
        TicketingComponent
    ],
    exports: [],
    providers: [VcdApiClient]
})
export class TicketingModule extends PluginModule {
    constructor(appStore: Store<any>, @Inject(EXTENSION_ROUTE) extensionRoute: string, translate: TranslateService) {
        super(appStore, translate);
        this.registerExtension(<ExtensionNavRegistration>{
                path: extensionRoute,
                icon: "page",
                nameCode: 'nav.ticketing',
                descriptionCode: 'nav.ticketing.description'
        });
    }
}


