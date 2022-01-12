import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-socket-sample',
  templateUrl: './socket-sample.component.html',
  styleUrls: ['./socket-sample.component.css'],
})
export class SocketSampleComponent {
  form = this.formBuilder.group({
    author: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  mensajes: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.chatService
      .recibirMensaje()
      .subscribe((mensajes) => (this.mensajes = mensajes));
  }

  onSubmit() {
    if (this.form.valid) {
      const { author, message } = this.form.value;
      this.chatService.enviarMensaje(`${author}: ${message}`);
      this.form.get('message')?.setValue('');
    }
  }
}
