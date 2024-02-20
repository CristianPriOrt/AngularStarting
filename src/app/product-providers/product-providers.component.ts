import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { ProvidersService } from "../providers.service";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

import { Provider } from "../provider";
import { Providers } from "../../assets/providers.json";

@Component({
  selector: 'app-product-providers',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-providers.component.html',
  styleUrl: './product-providers.component.css'
})
export class ProductProvidersComponent implements OnInit{
  providers!: Provider[];

  constructor() {
  }

  ngOnInit(): void {
    this.providers = Providers;
  }
}
