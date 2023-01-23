import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { ExcelComponent } from './excel/excel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PortalComponent } from './portal/portal.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { PriceModelComponent } from './price-model/price-model.component';
import { PriceComponent } from './price/price.component';
import { DataService } from './services/data-service.service';
import { HttpService } from './services/http.service';
import { VideoComponent } from './video/video.component';
import { WordComponent } from './word/word.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    PriceComponent,
    PortalComponent,
    ContactComponent,
    PriceModelComponent,
    ExcelComponent,
    PowerpointComponent,
    WordComponent,
    VideoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
