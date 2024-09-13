import { Component, EventEmitter, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() element= new EventEmitter<FileItem>();
  @Output()cerrar=new EventEmitter<boolean>();

  nombre:string='';
  fecha:Date=new Date;
  isArchivo:boolean=true
  fileItem:FileItem|undefined
  owner:FileOwner[]=[]
  type:FileType|undefined


  sendFile(){

    if(this.isArchivo){
     this.type=FileType.FILE
    }else{
     this.type=FileType.FILE
    }

     this.fileItem={
      id:Math.floor(Math.random() * 1000).toString(),
      name:this.nombre,
      creation:this.fecha,
      owners:this.owner,
      type:this.type
    }
    this.element.emit(this.fileItem)
    console.log(this.fileItem)
  }

  close(){
    this.cerrar.emit(false)
  }
}
