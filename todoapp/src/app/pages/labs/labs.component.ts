import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludo = 'Hola!';
  welcome = 'Bienvenido a mi primera App con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ];
  name='KaisherDev';
  age=24;
  disabled=true;
  img='https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'KaisherDev',
    age: 24,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  }

  // Método de la clase LabsComponent
  clickHandler(){
    alert('Hola');
  }

  changeHandler(event:Event){
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }
}
