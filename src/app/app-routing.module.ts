import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DoctorsComponent } from './pages/doctors/doctors.component'; // إضافة صفحة الدكاترة

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'doctors', component: DoctorsComponent }, // صفحة الدكاترة
  { path: '**', redirectTo: '', pathMatch: 'full' } // تحويل أي رابط خاطئ للصفحة الرئيسية
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
