import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DirectiveNgClassComponent } from './components/directive-ng-class/directive-ng-class.component';
import { DirectiveStyleComponent } from './components/directive-style/directive-style.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DirectiveNgClassComponent,
    DirectiveStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
