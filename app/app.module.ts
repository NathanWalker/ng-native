import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule, routes } from './components/components.module';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        ComponentsModule,
        NativeScriptRouterModule.forRoot(routes)
    ]
})
export class AppModule { }

