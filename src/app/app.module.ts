import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { BooksinComponent } from './booksin/booksin.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

import { FormsModule } from '@angular/forms'; // Import for forms
import { RouterModule, Routes } from '@angular/router'; // Import for routing
import { ServiesService } from './servies.service'; // Import for the service

const appRouting: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'booksin', component: BooksinComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' } // Wildcard route for a 404 page
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent, // Declaration of your AddComponent
    BooksinComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Crucial for ngModel and form validation to work
    RouterModule.forRoot(appRouting), // Setup routing
  ],
  providers: [ServiesService], // Services available to be injected across the application
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private serviesService: ServiesService) { } // Allows using ServiesService in AppModule (if needed)
}
