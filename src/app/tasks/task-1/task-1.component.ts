import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-task-1',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
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
          Validators.required
        ),
        companyDescription: new FormControl<string | undefined | null>(
          null,
          Validators.required
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
              Validators.required
            ),
            startDate: new FormControl<Date | undefined | null>(
              null,
              Validators.required
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
          Validators.required
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
              Validators.required
            ),
            startDate: new FormControl<Date | undefined | null>(
              null,
              Validators.required
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
        Validators.required
      ),
      startDate: new FormControl<Date | undefined | null>(
        null,
        Validators.required
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
}
