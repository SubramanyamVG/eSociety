import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../../models/member';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  form!: FormGroup;
  members: Member[] = [];
  isEdit = false;
  editIndex = -1;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      memberId: ['', Validators.required],
      name: ['', Validators.required],
      apartmentNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      familyMembersCount: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const member = this.form.value;

    if (this.isEdit && this.editIndex >= 0) {
      this.members[this.editIndex] = member;
      this.isEdit = false;
    } else {
      this.members.push(member);
    }

    this.form.reset();
  }

  editMember(index: number): void {
    const member = this.members[index];
    this.form.setValue(member);
    this.editIndex = index;
    this.isEdit = true;
  }

  cancelEdit(): void {
    this.form.reset();
    this.isEdit = false;
    this.editIndex = -1;
  }

}
