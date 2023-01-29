import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  firestorecollection : AngularFirestoreCollection;

  constructor(private firestore : AngularFirestore) { 
    this.firestorecollection = firestore.collection('todos');
  }

  addToDo(todoTitle: string){
    this.firestorecollection.add({
      title: todoTitle,
      isDone: false
    })
  }

  updateStatus(id:string, newStatus: boolean){
    this.firestorecollection.doc(id).update({isDone: newStatus})
  }

  deleteTodo(id: string){
    this.firestorecollection.doc(id).delete();
  }

}
