import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { PedidosProvider } from '../../providers/pedidos/pedidos';



@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
pedidos: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private pedidosProvider: PedidosProvider) {

    this.pedidos = this.pedidosProvider.getAll();
  }

  fazerPedido(pedidos: any) {
    console.log(pedidos);
    this.navCtrl.push('FazerPedidoPage',pedidos );
  }



}
