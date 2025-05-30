import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-bindings-nested-example',
	templateUrl: './bindings-nested-example.component.html',
	styleUrls: ['./bindings-nested-example.component.scss'],
	imports: [NgSelectComponent, FormsModule],
})
export class BindingsNestedExampleComponent implements OnInit {
	countries = [
		{ id: 1, nested: { countryId: 'L', name: 'Lithuania' } },
		{ id: 2, nested: { countryId: 'U', name: 'USA' } },
		{ id: 3, nested: { countryId: 'A', name: 'Australia' } },
	];

	selectedCountryId: string = null;

	ngOnInit() {
		this.selectedCountryId = this.countries[0].nested.countryId;
	}
}
