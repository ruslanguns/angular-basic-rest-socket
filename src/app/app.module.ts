import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestSampleComponent } from './rest-sample/rest-sample.component';
import { SocketSampleComponent } from './socket-sample/socket-sample.component';

@NgModule({
  declarations: [AppComponent, RestSampleComponent, SocketSampleComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
