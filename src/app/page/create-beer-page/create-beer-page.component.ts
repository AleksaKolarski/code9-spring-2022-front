import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateBeerDTO } from 'src/app/dto/create-beer-dto';
import { Ingredient } from 'src/app/dto/ingredient';
import { BeerService } from 'src/app/service/beer.service';

@Component({
  selector: 'app-create-beer-page',
  templateUrl: './create-beer-page.component.html',
  styleUrls: ['./create-beer-page.component.scss']
})
export class CreateBeerPageComponent implements OnInit {

  ingredients?: Ingredient[];

  createBeerForm: FormGroup = this.formBuilder.group({
    name: [''],
    ingredients: this.formBuilder.array([])
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private beerService: BeerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.ingredients = this.route.snapshot.data['ingredients'];
    this.ingredients = [
      new Ingredient(12, "ing1"),
      new Ingredient(34, "ing2"),
      new Ingredient(56, "ing3")
    ];
  }

  onSubmit() {
    const createBeerDTO = new CreateBeerDTO(
      this.createBeerForm.value['name'],
      this.createBeerForm.value['ingredients']
    );
    this.beerService
      .createBeer(createBeerDTO)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/beers']);
        }
      })
  }

  onCheckChange(event: any) {
    const formArray: FormArray = this.createBeerForm.get('ingredients') as FormArray;

    if(event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: AbstractControl) => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
