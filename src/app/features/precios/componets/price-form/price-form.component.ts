

@Component({
  selector: 'app-price-form',
  imports: [],
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.css'
})
export class PriceFormComponent {

}

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { priceService } from '../../services/price.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.css'],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CurrencyPipe,
    DatePipe
  ]
})
export class PriceFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(priceService());
  
  // Estado del formulario
  formStatus = signal<'loading' | 'ready' | 'submitting' | 'success' | 'error'>('ready');
  errorMessage = signal<string>('');

  // Configuración de monedas disponibles
  currencies = signal(['USD', 'MXN']);
  
  // Formulario reactivo
  priceForm = this.fb.group({
    date: [new Date(), [Validators.required]],
    value: [0, [
      Validators.required, 
      Validators.min(0.01),
      Validators.max(10000)
    ]],
    currency: ['USD', Validators.required],
    provider: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]]
  });

  async onSubmit() {
    if (this.priceForm.invalid || this.formStatus() === 'submitting') return;
    
    this.formStatus.set('submitting');
    
    try {
      await this.service.addPrice({
        ...this.priceForm.value,
        date: new Date(this.priceForm.value.date!)
      } as Price);
      
      this.formStatus.set('success');
      this.priceForm.reset({
        date: new Date(),
        value: 0,
        currency: 'USD'
      });
      
      setTimeout(() => this.formStatus.set('ready'), 2000);
    } catch (error) {
      this.formStatus.set('error');
      this.errorMessage.set(
        error instanceof Error ? error.message : 'Error desconocido al guardar'
      );
    }
  }
  
  // Helper para acceder fácilmente a los controles
  get controls() {
    return this.priceForm.controls;
  }
}

