import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateLessThanOrEqualsValidator } from './validators/dateLessThanOrEquals';

@Component({
  selector: 'app-task-1',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatLabel,
  ],
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.scss',
})
export class Task1Component {
  levels: Array<string> = ['Junion', 'Middle', 'Senior'];

  myForm: FormGroup = new FormGroup({
    job: new FormArray([
      new FormGroup({
        companyName: new FormControl<string | undefined | null>(
          null,
          Validators.required
        ),
        companySiteUrl: new FormControl<string | undefined | null>(null, [
          Validators.required,
        ]),
        companyDescription: new FormControl<string | undefined | null>(null, [
          Validators.required,
          Validators.minLength(15),
        ]),
        positions: new FormArray([
          new FormGroup({
            position: new FormControl<string | undefined | null>(
              null,
              Validators.required
            ),
            level: new FormControl<string | undefined | null>(
              null,
              Validators.required
            ),
            description: new FormControl<string | undefined | null>(null, [
              Validators.required,
              Validators.minLength(15),
            ]),
            dateRange: new FormGroup({
              startDate: new FormControl<Date | undefined | null>(null, [
                Validators.required,
                DateLessThanOrEqualsValidator('endDate'),
              ]),
              endDate: new FormControl<Date | undefined | null>(
                null,
                Validators.required
              ),
            }),
          }),
        ]),
      }),
    ]),
  });

  get jobArray(): FormArray {
    return this.myForm.get('job') as FormArray;
  }

  getPositionsArray(i: number): FormArray {
    return this.jobArray.at(i).get('positions') as FormArray;
  }

  addJob() {
    const frmgroup: FormGroup = new FormGroup({
      companyName: new FormControl<string | undefined | null>(
        null,
        Validators.required
      ),
      companySiteUrl: new FormControl<string | undefined | null>(
        null,
        Validators.required
      ),
      companyDescription: new FormControl<string | undefined | null>(null, [
        Validators.required,
        Validators.minLength(15),
      ]),
      positions: new FormArray([
        new FormGroup({
          position: new FormControl<string | undefined | null>(
            null,
            Validators.required
          ),
          level: new FormControl<string | undefined | null>(
            null,
            Validators.required
          ),
          description: new FormControl<string | undefined | null>(null, [
            Validators.required,
            Validators.minLength(15),
          ]),
          dateRange: new FormGroup({
            startDate: new FormControl<Date | undefined | null>(null, [
              Validators.required,
              DateLessThanOrEqualsValidator('endDate'),
            ]),
            endDate: new FormControl<Date | undefined | null>(
              null,
              Validators.required
            ),
          }),
        }),
      ]),
    });

    this.jobArray.push(frmgroup);
  }
  deleteJob(index: number) {
    this.jobArray.removeAt(index);
  }

  addPosition(i: number) {
    const frmgroup = new FormGroup({
      position: new FormControl<string | undefined | null>(
        null,
        Validators.required
      ),
      level: new FormControl<string | undefined | null>(
        null,
        Validators.required
      ),
      description: new FormControl<string | undefined | null>(null, [
        Validators.required,
        Validators.minLength(15),
      ]),
      dateRange: new FormGroup({
        startDate: new FormControl<Date | undefined | null>(null, [
          Validators.required,
          DateLessThanOrEqualsValidator('endDate'),
        ]),
        endDate: new FormControl<Date | undefined | null>(
          null,
          Validators.required
        ),
      }),
    });
    this.getPositionsArray(i).push(frmgroup);
  }

  deletePosition(jobIndex: number, index: number) {
    this.getPositionsArray(jobIndex).removeAt(index);
  }

  submit() {
    if (this.myForm.get('job')?.value.length > 0 && this.myForm.valid) {
      alert('Form Submitted Successfully.');
      console.log(this.myForm.value);
      this.myForm.reset();
    } else {
      alert('Form is not valid!');
    }
  }
}
