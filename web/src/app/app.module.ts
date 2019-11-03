import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatButtonToggleModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI'
    }),
    AgmDirectionModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
