import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { TablaComponent } from "./tabla/tabla.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
  agrear:boolean=false;

  nuevo(){
    this.agrear=true;
  }
  cerrar(respuesta:boolean){
    this.agrear=respuesta
  }
  agregar(nuevoArchivo:FileItem){
    this.files.push(nuevoArchivo)
  }
}
