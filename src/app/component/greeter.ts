import { Component, } from '@angular/core';

@Component({
  selector: 'greeter',
  templateUrl: '../template/greeter.html',
  styleUrls: ['../style/greeter.scss']
})
export class Greeter {
  public name: string;

  ngOnInit() {
    this.setName('Holly');
  }

  private setName(name: string) {
    this.name = name;  
  }
}
