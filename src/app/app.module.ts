import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CvComponent } from './pages/cv/cv.component';
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavBarComponent,
    SideNavComponent,
    HomeComponent,
    ProjectsComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
