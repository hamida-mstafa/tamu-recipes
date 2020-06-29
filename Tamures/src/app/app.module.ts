import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { FilterFtComponent } from './filter-ft/filter-ft.component';
import { BookmarkDirective } from './bookmark.directive';
import { SaveComponent } from './save/save.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SocialshareComponent } from './components/socialshare/socialshare.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    routingComponents,
    PageNotFoundComponent,
    BookmarkComponent,
    FilterFtComponent,
    BookmarkDirective,
    SaveComponent,
    UpdateComponent,

    NavbarComponent,
    HomepageComponent,
    SocialshareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
