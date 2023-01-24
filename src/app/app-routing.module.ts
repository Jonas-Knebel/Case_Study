import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './coursePage/course-list/course-list.component';
import { ContactComponent } from './helpPage/contact/contact.component';
import { HelpComponent } from './helpPage/help/help.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PriceListComponent } from './pricePage/price-list/price-list.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'price-list', component: PriceListComponent },
  { path: 'help', component: HelpComponent },
  { path: 'help/service-portal/contact', component: ContactComponent },
  { path: '**', redirectTo: 'homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
