import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.page.html',
  styleUrls: ['./pix.page.scss'],
})
export class PixPage {

  codigo = "13489723908740982375087";
  constructor(private router:Router, private toastController: ToastController) { }

  return()
  {
    this.router.navigateByUrl('/forma-pagamento');
  }

  returnToTab()
  {
    this.router.navigateByUrl('/tabs/tab1');
  }

  async copyCode(){
    try { await navigator.clipboard.writeText(this.codigo);
      const toast = await this.toastController.create({ message: 'Código copiado!', duration: 2000, position: 'bottom' });
      toast.present(); } catch (err) { console.error('Falha ao copiar o código: ', err);

      }
  }

}
