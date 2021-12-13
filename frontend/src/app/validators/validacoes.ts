import { AbstractControl } from "@angular/forms";
import { MessageService } from "primeng/api";

export class Validacoes {
    constructor( private messageService: MessageService) {}
    
    static campoVazio(control: AbstractControl) {
        let input = control.value;
        if(input == '' || input == null) {
            alert('Preenchimento obrigatório');
        }

        if(input.length > 3) {input = input.slice(0, 3)}
        if(input > 10) {
            alert('Não pode ser maior do que 10');
        }
    }
}