import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-employer-form',
  styleUrls: ['./employer-form.component.scss'],
  templateUrl: 'employer-form.component.html',
})
export class EmployerFormComponent {
  @HostBinding('class.employer-form') private readonly employerForm = true;
  public qualifications = ['Young Padawan', 'Junior', 'Middle', 'Senior'];

  imageSrc: string;

  onFileChange(event) {

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }
}
