import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Draft } from '../model/draft.model';
import { DataService } from '../services/data.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.sass']
})
export class DefinitionComponent implements OnInit {

  descriptionForm!: FormGroup;
  validationForm = false;
  draft: Draft = {marketingName: '', technicalName: ''};

  constructor(private dataService: DataService, private storageService: StorageService) { }

  ngOnInit(): void {    
    this.descriptionForm = new FormGroup({
      marketingName: new FormControl(null, Validators.required),
      technicalName: new FormControl(null, Validators.required)
    });
    this.draft = this.storageService.getDraftStorage();
    this.descriptionForm.patchValue({
      marketingName: this.draft.marketingName,
      technicalName: this.draft.technicalName,
    });
    if (this.draft.marketingName !== '' || this.draft.technicalName !== '') {
      this.dataService.setFormValidValue(true);
    } else {
      this.dataService.setFormValidValue(false);
    }
  }

  updateForm() {
    const invalid = [];    
    const controls = this.descriptionForm.controls;
    for (const control in controls) {     
      if (controls[control].status === "INVALID") {
          invalid.push(control);
      }
  }
    if (invalid.length < 2) {
      this.validationForm = true;
    } else {
      this.validationForm = false;
    }
    this.dataService.setFormValidValue(this.validationForm);
    this.saveDraft();    
  }

  saveDraft() {
    this.draft.marketingName = this.descriptionForm.value.marketingName;
    this.draft.technicalName = this.descriptionForm.value.technicalName;
    this.storageService.setDraftStorage(this.draft);
  }

}
