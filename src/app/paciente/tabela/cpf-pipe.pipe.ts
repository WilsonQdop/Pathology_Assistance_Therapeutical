import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe',
  standalone: true
})
export class CpfPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value
      .replace(/\D/g, '') // Remove não dígitos
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

}
