import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


const features: any[] = [MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule,
  MatDividerModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [features],
  exports: [features]
})

export class MaterialFeatures {
}
