import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket = io(environment.chatSocketUrl);

  private mensajesStore = new BehaviorSubject<string[]>([]);

  enviarMensaje(mensaje: string): void {
    this.socket.emit('chat-msg', mensaje);
  }

  recibirMensaje() {
    this.socket.on('chat-msg', (mensaje) => {
      this.mensajesStore.next([...this.mensajesStore.value, mensaje]);
    });

    return this.mensajesStore.asObservable().pipe(distinctUntilChanged());
  }
}
