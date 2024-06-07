import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingServiceService } from './Services/housingService.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';
import { UserServiceService } from './Services/userService.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './Services/auth.service';
import { PropertyDetailResolverService } from './property/property-details/property-detail-resolver.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
   ],
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000, // Set the duration to 2 seconds
      positionClass: 'toast-bottom-right', // Optional: Set the position of the Toastr notification
      preventDuplicates: true, // Optional: Prevent duplicate notifications
      progressBar: true // Optional: Display a progress bar
    }),
    NgxGalleryModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,//for template driven form
    FormsModule,
    ReactiveFormsModule//for reactive form
  ],
  providers: [HousingServiceService,UserServiceService,AuthService,PropertyDetailResolverService],//must include all the serivce
  bootstrap: [AppComponent]// starting component
})
export class AppModule { }
