import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './coursePage/course-list/course-list.component';
import { CourseComponent } from './coursePage/course/course.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './helpPage/contact/contact.component';
import { HelpComponent } from './helpPage/help/help.component';
import { ServicePortalComponent } from './helpPage/service-portal/service-portal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PriceListComponent } from './pricePage/price-list/price-list.component';
import { PriceModelComponent } from './pricePage/price-model/price-model.component';
import { DataService } from './services/data-service.service';
import { HttpService } from './services/http.service';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    PriceListComponent,
    ContactComponent,
    PriceModelComponent,
    ServicePortalComponent,
    HelpComponent,
    VideoComponent,
    CourseListComponent,
    HomepageComponent,
    PriceListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService, HttpClient, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
