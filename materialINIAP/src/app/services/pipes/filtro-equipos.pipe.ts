import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEquipos'
})
export class FiltroEquiposPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
