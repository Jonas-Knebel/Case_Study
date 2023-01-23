import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { VideoComponent } from './video/video.component';
import { WordComponent } from './word/word.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'course', component: CourseComponent },
  { path: 'price', component: PriceComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price-model', component: PriceModelComponent },
  { path: 'excel', component: ExcelComponent },
  { path: 'powerpoint', component: PowerpointComponent },
  { path: 'word', component: WordComponent },
  { path: 'video', component: VideoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
