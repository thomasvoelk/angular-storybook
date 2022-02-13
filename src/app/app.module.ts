import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';

@NgModule({
  declarations: [
    AppComponent,
    ChucknorrisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
