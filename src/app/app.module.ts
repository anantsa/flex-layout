import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LibertyTabsComponent } from './liberty-tabs/liberty-tabs.component';
import { LibertyToolbarComponent } from './liberty-toolbar/liberty-toolbar.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ProductGraphComponent } from './profile-dashboard/product-graph/product-graph.component';
import { ProductSalesComponent } from './profile-dashboard/product-sales/product-sales.component';
import { ProfileInfoComponent } from './profile-dashboard/profile-info/profile-info.component';
import { TableDataComponent } from './table-data/table-data.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LibertyTabsComponent,
    LibertyToolbarComponent,
    ProfileDashboardComponent,
    ProductGraphComponent,
    ProductSalesComponent,
    ProfileInfoComponent,
    TableDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatBadgeModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
