import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from 'src/app/service/beer.service';
import { CreateOrderDTO } from 'src/app/dto/create-order-dto';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.scss']
})
export class CreateOrderPageComponent implements OnInit {

  beerId: string = '';

  createOrderForm: FormGroup = this.formBuilder.group({
    name: [''],
    street: [''],
    city: [''],
    zip: [''],
    creditCardNumber: [''],
    creditCardExpiration: [''],
    creditCardSecurityCode: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.beerId = this.route.snapshot.data['beerId'];
  }

  onSubmit() {
    const createOrderDTO = new CreateOrderDTO(
      this.createOrderForm.value['name'],
      this.createOrderForm.value['street'],
      this.createOrderForm.value['city'],
      this.createOrderForm.value['state'],
      this.createOrderForm.value['zip'],
      this.createOrderForm.value['creditCardNumber'],
      this.createOrderForm.value['creditCardExpiration'],
      this.createOrderForm.value['creditCardSecurityCode'],
      this.beerId
    );
    this.beerService
      .createOrderService(createOrderDTO)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/beers']);
        }
      });
  }
}
