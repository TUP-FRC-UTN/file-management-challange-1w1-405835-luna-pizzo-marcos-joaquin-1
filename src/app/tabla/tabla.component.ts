import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterOutlet, TablaComponent,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
 @Input() files: FileItem[] = []
  title = 'file-management';

  ngOnInit(){
    console.log(this.files) 
  }

}
