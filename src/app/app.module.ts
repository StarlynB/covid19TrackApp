import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './country/country.module';
import { LiveModule } from './live/live.module';
import { SummaryModule } from './summary/summary.module';
import { HttpClientModule} from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert'
import { timeout } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { NoFoundPageComponent } from './no-found-page/no-found-page.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NoFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CountryModule,
    LiveModule,
    SummaryModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
