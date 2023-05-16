﻿import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./static.datasource";
import {Cart} from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource} from "./rest.datasource";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, StaticDatasource, Cart, Order, OrderRepository,
    {provide: StaticDatasource, useClass: RestDataSource}],
})

export class ModelModule { }
