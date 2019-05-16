import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FazerPedidoPage } from './fazer-pedido';

@NgModule({
  declarations: [
    FazerPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(FazerPedidoPage),
  ],
})
export class FazerPedidoPageModule {}
