import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Define a basic route configuration
const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  // You can define routes here
  // { path: '', component: SomeComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Add this line to include routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
