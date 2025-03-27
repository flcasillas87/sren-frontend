<!-- price-form.component.html -->
<form [formGroup]="priceForm" (ngSubmit)="onSubmit()">
  <!-- Campo de Fecha -->
  <mat-form-field>
    <mat-label>Fecha del precio</mat-label>
    <input matInput [matDatepicker]="picker" formControlName="date">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
    
    <mat-error *ngIf="controls.date.hasError('required')">
      La fecha es obligatoria
    </mat-error>
  </mat-form-field>

  <!-- Campo de Valor -->
  <mat-form-field>
    <mat-label>Valor por unidad</mat-label>
    <input 
      matInput 
      type="number" 
      formControlName="value"
      step="0.01"
      min="0.01"
      max="10000"
    >
    <span matTextPrefix>{{ controls.currency.value | currency }}</span>
    
    <mat-error *ngIf="controls.value.hasError('required')">
      El valor es obligatorio
    </mat-error>
    <mat-error *ngIf="controls.value.hasError('min')">
      El valor mínimo es 0.01
    </mat-error>
    <mat-error *ngIf="controls.value.hasError('max')">
      El valor máximo permitido es 10,000
    </mat-error>
  </mat-form-field>

  <!-- Selector de Moneda -->
  <mat-form-field>
    <mat-label>Moneda</mat-label>
    <mat-select formControlName="currency">
      <mat-option *ngFor="let curr of currencies()" [value]="curr">
        {{ curr }}
      </mat-option>
    </mat-select>
    
    <mat-error *ngIf="controls.currency.hasError('required')">
      Selecciona una moneda
    </mat-error>
  </mat-form-field>

  <!-- Campo de Proveedor -->
  <mat-form-field>
    <mat-label>Proveedor</mat-label>
    <input 
      matInput 
      formControlName="provider"
      placeholder="Ej: Pemex"
      maxlength="50"
    >
    
    <mat-error *ngIf="controls.provider.hasError('required')">
      El proveedor es obligatorio
    </mat-error>
    <mat-error *ngIf="controls.provider.hasError('minlength')">
      Mínimo 3 caracteres
    </mat-error>
  </mat-form-field>

  <!-- Estado del formulario -->
  <div class="form-status">
    <mat-progress-spinner 
      *ngIf="formStatus() === 'submitting'"
      diameter="24"
      mode="indeterminate">
    </mat-progress-spinner>
    
    <mat-icon 
      *ngIf="formStatus() === 'success'" 
      color="primary"
      class="success-icon">
      check_circle
    </mat-icon>
    
    <div 
      *ngIf="formStatus() === 'error'" 
      class="error-message"
      (click)="errorMessage.set('')">
      {{ errorMessage() }}
    </div>
  </div>

  <!-- Botón de enviar -->
  <button 
    mat-raised-button 
    color="primary" 
    type="submit"
    [disabled]="priceForm.invalid || formStatus() === 'submitting'">
    {{ formStatus() === 'submitting' ? 'Guardando...' : 'Registrar Precio' }}
  </button>
</form>