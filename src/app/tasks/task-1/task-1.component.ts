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
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    MatLabel
  ],
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.scss',
})
export class Task1Component {

  levels: Array<string> = [
    'Junion',
    'Middle',
    'Senior',
  ];

  myForm: FormGroup = new FormGroup({
    job: new FormArray([
      new FormGroup({
        companyName: new FormControl<string | undefined | null>(
          null,
          Validators.required
        ),
        companySiteUrl: new FormControl<string | undefined | null>(
          null,
          [Validators.required]
        ),
        companyDescription: new FormControl<string | undefined | null>(
          null,
          [Validators.required, Validators.minLength(15)]
        ),
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
            description: new FormControl<string | undefined | null>(
              null,
              [Validators.required, Validators.minLength(15)]
            ),
            startDate: new FormControl<Date | undefined | null>(
              null,
              [Validators.required, DateLessThanOrEqualsValidator('endDate')]
            ),
            endDate: new FormControl<Date | undefined | null>(
              null,
              Validators.required
            ),
          })
        ])
      })
    ])
  });

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
        companyDescription: new FormControl<string | undefined | null>(
          null,
          [Validators.required, Validators.minLength(15)]
        ),
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
            description: new FormControl<string | undefined | null>(
              null,
              [Validators.required, Validators.minLength(15)]
            ),
            startDate: new FormControl<Date | undefined | null>(
              null,
              [Validators.required, DateLessThanOrEqualsValidator('endDate')]
            ),
            endDate: new FormControl<Date | undefined | null>(
              null,
              Validators.required
            ),
          })
        ])
  });

    (<FormArray>this.myForm.get('job')).push(frmgroup);
  }
  deleteJob(index: number) {
    const frmArray = <FormArray>this.myForm.get('job');
    frmArray.removeAt(index);
  }

  addPosition(i: number) {
    const frmgroup: FormGroup = new FormGroup({
      position: new FormControl<string | undefined | null>(
        null,
        Validators.required
      ),
      level: new FormControl<string | undefined | null>(
        null,
        Validators.required
      ),
      description: new FormControl<string | undefined | null>(
        null,
        [Validators.required, Validators.minLength(15)]
      ),
      startDate: new FormControl<Date | undefined | null>(
        null,
        [Validators.required, DateLessThanOrEqualsValidator('endDate')]
      ),
      endDate: new FormControl<Date | undefined | null>(
        null,
        Validators.required
      ),
    });
      (<FormArray>this.myForm.get('job')?.value[i]?.positions).push(frmgroup);

  }

  deletePosition(jobIndex: number, index: number) {
    const frmgroup = <FormArray>this.myForm.get('job')?.value[jobIndex]?.positions;
    frmgroup.removeAt(index);
  }

  submit() {
    if(this.myForm.valid) {
      alert('Form Submitted Successfully');
  } else {
    alert('Form is not valid');
  }
  }
}
