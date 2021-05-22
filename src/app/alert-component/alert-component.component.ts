import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.scss']
})
export class AlertComponentComponent implements OnInit {

  public newName: string ='';
  public ocultar1: boolean =true;
  public ocultar2: boolean =true;
  public ocultar3: boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

  alertName():void {
    alert(`Hola ${ this.newName }`);
  }

  isHidden(imgH: string):void {
    if(imgH == "1"){
      this.ocultar1 = !this.ocultar1;
    }else if(imgH == "2"){
      this.ocultar2 = !this.ocultar2;
    }
    if(imgH == "3"){
      this.ocultar3 = !this.ocultar3;
    }
  }

}
