import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fixearPosicion() {
    const historico = document.getElementById('contenido');
    const height = historico.offsetHeight;
    if (height < (screen.height * 0.7)) {
      return true;
    }
    return false;
  }

}
