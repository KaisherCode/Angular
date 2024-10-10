import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludo = 'Hola!';
  welcome = 'Bienvenido a mi primera App con Angular';
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name=signal('KaisherDev');
  age=24;
  disabled=true;
  img='https://w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'KaisherDev',
    age: 15,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable: true,
  });

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value=>{
      console.log(value);
    })
  }

  // Método de la clase LabsComponent
  clickHandler(){
    alert('Hola');
  }

  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changeAge(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState=>{
      return {
        ...prevState,
        age: parseInt(newValue,10)
      }
    });
  }

  changeName(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState=>{
      return{
        ...prevState,
        name: newValue
      }
    });
  }
}
