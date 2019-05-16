import { ToastProvider } from './../../providers/toast/toast';
import { PedidosProvider } from './../../providers/pedidos/pedidos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';




@IonicPage()
@Component({
  selector: 'page-fazer-pedido',
  templateUrl: 'fazer-pedido.html',
})
export class FazerPedidoPage {

  form: FormGroup;
  pedidos: any;
  prato: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public pedidosProvider: PedidosProvider,
              private toast: ToastProvider,
              private formBuilder: FormBuilder
    ) {

      this.prato= this.navParams.data.pratos;
      this.createForm();
  }

private createForm(){
    this.form = this.formBuilder.group({
      key:[''],
      quarto:[''],
      prato:[this.prato]
    });

}

  enviarPedido(){
    if (this.form.valid) {
      this.pedidosProvider.save(this.form.value);
      this.toast.show('Seu pedido já está a caminho.');
      //this.toast.create({ message: 'Seu pedido já está a caminho.', duration: 3000}).present();
      this.navCtrl.pop();
  }

}


}
