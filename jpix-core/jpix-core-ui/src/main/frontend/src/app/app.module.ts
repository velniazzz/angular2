import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// const mapObjectToArray = (obj: any) => Object.keys(obj).map(key => obj[key]);
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    exports: [ AppComponent ],
    entryComponents: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}