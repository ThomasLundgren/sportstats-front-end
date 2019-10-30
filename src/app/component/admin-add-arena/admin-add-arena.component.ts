import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ArenaService } from 'src/app/service/arena.service';
import { Arena } from 'src/app/model/arena.model';

@Component({
  selector: 'app-admin-add-arena',
  templateUrl: './admin-add-arena.component.html',
  styleUrls: ['./admin-add-arena.component.scss']
})
export class AdminAddArenaComponent implements OnInit {
 
  arenaValidator = [Validators.required, Validators.minLength(2), Validators.maxLength(50)];

  addArenaForm = new FormGroup({
    name: new FormControl('', this.arenaValidator)
  });

  constructor(private arenaService: ArenaService) { }

  ngOnInit(): void {
  }

  name() {
    return this.addArenaForm.get('name');
  }

  onSubmit(): void {
    var arena = new Arena();
    arena.arenaName = this.addArenaForm.controls.name.value;
    console.log(arena.arenaName);
    this.addArena(arena);
    this.addArenaForm.reset();
  }

  addArena(arena: Arena): void {
    this.arenaService.addArena(arena);
  }

}
