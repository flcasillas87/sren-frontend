import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray,FormsModule } from '@angular/forms';
// Importación de módulos de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { Price, PriceForm } from '../../models/precios.model';
import { PriceService } from '../../services/precios.service';


@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.css',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
  ],

})
export class PriceFormComponent {
  // Inyectar el servicio de precios
  private priceService = inject(PriceService);

  // Signal para mantener el estado reactivo del formulario
  priceForm = signal<PriceForm>({
    date: '',
    value: '',
    currency: 'USD',
    provider: '',
  });

  // Computed para validar
  formValid = computed(() =>
    !!this.priceForm().date &&
    !!this.priceForm().value &&
    !!this.priceForm().currency &&
    !!this.priceForm().provider
  );

  // Estados del formulario
  status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  errorMsg = signal<string>('');

  // Computed para convertirlo automáticamente en un Price
  priceToSave = computed(() => ({
    date: new Date(this.priceForm().date),
    value: parseFloat(this.priceForm().value),
    currency: this.priceForm().currency,
    provider: this.priceForm().provider
  }));

  // Computed para el estado del formulario
  formStatus = computed(() => {
    return this.priceForm().date && this.priceForm().value ? 'valid' : 'invalid';
  });
  //Mostrar precioss
  prices = this.priceService.getPrices();


  // Método para agregar un precio (ahora llama al servicio)
  addPrice() {
    if (this.formStatus() === 'valid') {
      const newPrice = this.priceForm();
      this.priceService.addPrice({
        ...newPrice,
        value: Number(newPrice.value),
        date: new Date(newPrice.date),
      });
      console.log('Precio agregado:', newPrice);
    }
  }

  // Computed para manejar mensajes de error
  get errorMessage() {
    return 'Por favor, completa todos los campos.';
  }

  save() {
  }
}