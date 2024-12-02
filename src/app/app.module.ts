import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { appRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { httpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    HeaderComponent,
    Table1Component,
    Table2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    NgImageSliderModule,
    MatTableModule ,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [httpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
