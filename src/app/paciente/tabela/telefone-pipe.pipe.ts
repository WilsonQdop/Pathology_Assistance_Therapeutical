import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe',
  standalone: true
})
export class TelefonePipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value
      .replace(/\D/g, '') // Remove não dígitos
      .replace(/(\d{2})(\d)/, '($1) $2') // Código de área
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2'); // Número
  }

}
