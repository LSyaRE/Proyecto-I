import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }
  delay(n: any) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  // async agregarUsuario() {

  //   console.log(this.usuario)
  //   const add = this.crudService.addEquipo(this.usuario).subscribe(
  //     res => {
  //       console.log(res)

  //     },
  //     err => console.log(err)
  //   );
  //   console.log(add)
  //   await this.delay(0.5)
  //   this.router.navigate(['/home'])

  // }
}
