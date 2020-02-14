import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxImageCompressService} from 'ngx-image-compress';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatRadioModule, MatSelectModule, MatCardModule, MatTabsModule, MatIconModule, MatDividerModule, MatDialogModule, MatTooltipModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
		MatGridListModule,
		MatCardModule,
		MatDividerModule,
    MatTabsModule,
    MatTooltipModule,
		MatTableModule,
		MatIconModule,
		MatPaginatorModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
    HttpClientModule,
    HttpClientJsonpModule,
		MatRadioModule,
		MatFormFieldModule,
	
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
