import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogDemo1Component } from './1-log/demo.component';
import { ErrorDemoComponent } from './10-error/demo.component';
import { ErrorComponent } from './10-error/error';
import { LogDemo2Component } from './2-log/demo.component';
import { LogDemo3Component } from './3-log/demo.component';
import { MemoizeDemo1Component } from './4-memoize/demo.component';
import { MemoizeDemo2Component } from './5-memoize/demo.component';
import { LoaderDemoComponent } from './7-loader/demo.component';
import { LoaderComponent } from './7-loader/loader';
import { DelayDemoComponent } from './8-delay/demo.component';
import { TimeoutDemoComponent } from './9-timeout/demo.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LogDemo1Component,
    LogDemo2Component,
    LogDemo3Component,
    MemoizeDemo1Component,
    MemoizeDemo2Component,
    LoaderComponent,
    LoaderDemoComponent,
    DelayDemoComponent,
    TimeoutDemoComponent,
    ErrorComponent,
    ErrorDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
