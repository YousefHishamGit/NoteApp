import { NoteService } from './../../../shared/services/Note/note.service';
import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Inote } from '../../../shared/interface/inote';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly noteService=inject(NoteService)
  allNote!:Inote
  modalUpdate:boolean=false;
  noteId:any;

  addNoteForm:FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  })
  UpdateNoteForm:FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  })
  ngOnInit(): void {
    this.getMyNotes();
  }

  AddNote():void{
    console.log("add note called");
    if(this.addNoteForm.valid){ 
      console.log(this.addNoteForm.value);
    this.noteService.addnote(this.addNoteForm.value).subscribe((res)=>{
      console.log(res);
      if(res.msg=="done"){
        this.getMyNotes()
      }
      
    })}
  }
  getMyNotes():void{
    this.noteService.getNotes().subscribe((res)=>{
      console.log(res);
      this.allNote=res;
     
    })
  }
  deleteNote(id:string):void{
    this.noteService.deleteNote(id).subscribe((res)=>{
      console.log(res);
      if(res.msg=="done"){
        this.getMyNotes()
      }
    })
  }
  updateNote():void{
    console.log("update note called");
    if(this.UpdateNoteForm.valid){ 
      console.log(this.UpdateNoteForm.value);
    this.noteService.updateNote(this.noteId,this.UpdateNoteForm.value).subscribe((res)=>{
      console.log(res);
      if(res.msg=="done"){
        this.getMyNotes()
      }
      
    })}
    this.closeModel();
    this.UpdateNoteForm.reset();
  }
  openModel(note:any):void{
    this.modalUpdate=true;
    this.noteId=note._id;
    this.UpdateNoteForm.patchValue(note)

  }
  closeModel():void{
    this.modalUpdate=false;
  }




}
