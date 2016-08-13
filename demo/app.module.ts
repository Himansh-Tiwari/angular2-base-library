import { NgModule }       from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }