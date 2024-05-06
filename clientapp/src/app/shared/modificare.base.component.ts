import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "./base.component";
import { Subscription, combineLatest } from "rxjs";

@Component({
    template: ''
})
export class ModificareBaseComponent extends BaseComponent {

    //#region Fields
    public routeParamsSubscription: Subscription | null = null;

    public form: FormGroup;
    
    public idEntitate: string;
    public modVizualizare: boolean;

    public dataMinima: Date;
    public dataMaxima: Date;

    //#endregion Fields

    //#region Methods

    constructor(public activatedRoute: ActivatedRoute) {
        super();

        // Conform cirteriilor de validare, data minima si data maxima acceptate sunt definite
        // in intervalul 1900 -> ziua curenta
        this.dataMinima = new Date('1900-01-01');
        this.dataMaxima = new Date();
    }

    public async incarcaDate<T>(parametru: string, actiune: ([pp, p]) => Promise<T | null>) {
        this.setIsLoading = true;

        try {
            this.InitFormGroup();

            this.routeParamsSubscription = combineLatest([this.activatedRoute.parent.params, this.activatedRoute.params]).subscribe(
                async ([pp, p]) => {
                    await this.ruleazaAsync(async () => {
                        // Citim parametrul ecranului de modificare
                        this.idEntitate =  p[parametru];

                        // Apelam actiunea trimisa din componenta
                        await actiune([pp, p]);
                    });
                });
        } catch (error) {
            this.notificationService.showErrorEx(error);
        }

        this.markAsPristine();
        this.markAsVizualizare();

        this.setIsLoading = false;
    }

    /**
     * Metoda trebuie sa fie override in componenta
     */
    public InitFormGroup() { }

    public markAsPristine() {
        for (const control in this.form.controls) {
            this.form.controls[control].markAsPristine();
        }
    }

    public markAsVizualizare() {
        this.modVizualizare = this.esteInModVizualizare(this.activatedRoute);

        if (this.modVizualizare) {
            for (const control in this.form.controls) {
                this.form.controls[control].disable();
            }
        }
    }

    //#endregion Methods

    //#region Gettere

    public get titlu() : string {
        if (this.modVizualizare === true) {
            return 'View';
        } else if (this.idEntitate == '0') {
            return 'Add';
        } else {
            return 'Modify';
        }
    }

    //#endregion Gettere

}