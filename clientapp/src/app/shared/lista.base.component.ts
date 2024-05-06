import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "./base.component";

@Component({
    template: ''
})
export class ListaBaseComponent extends BaseComponent {

    //#region Fields
    public source: any[] = [];
    public rows: any[] = [];

    public modVizualizare: boolean = false;
    //#endregion Fields

    //#region Permisiuni
    public areDrepturiDeVizualizare: boolean = false;
    public areDrepturiDeAdaugare: boolean = false;
    public areDrepturiDeModificare: boolean = false;
    public areDrepturiDeStergere: boolean = false;
    //#endregion Permisiuni

    //#region Methods

    constructor(public activatedRoute: ActivatedRoute) {
        super();
    }

    /**
     * Permisiunile trebuie trimise in lista sub forma: vizualizare, adaugare, modificare, stergere
     * @param permisiuni Permisiunile de baza ce sunt asociate ecranului de lista
     */

    /**
     * Metoda trebuie sa fie override in componenta
     */
    public async incarcaDate() { }

    public vizualizare(item?) {
        if (!item && this.rows.length === 0) {
            this.notificationService.showWarning('Vă rugăm să selectați o linie!');
            return;
        }

        if (this.rows.length > 1) {
            this.notificationService.showWarning('Vă rugăm să selectați doar o linie!');
            return;
        } else {
            if (this.rows.length > 0) {
                this.rows.forEach((row) => {
                    // 'row' este randul, iar in source aveam entitatea cu care lucram
                    this.vizualizeaza(row);
                });
            } else if (item) {
                this.vizualizeaza(item);
            }
        }
    }

    public adauga() {
        this.navigateToRelative('0', this.activatedRoute);
    }

    // Metoda care este apelata din ecran
    public modificare(item?) {
        if (!item && this.esteRandNeselectat) {
            this.notificationService.showWarning("Vă rugăm să selectați o linie!");
            return;
        }

        if (this.rows.length > 1) {
            this.notificationService.showWarning("Vă rugăm să selectați doar o linie!");
            return;
        } else {
            if (this.rows.length > 0) {
                this.rows.forEach(row => {
                    // 'row' este entitatea din ecran
                    this.modifica(row);
                });
            } else if (item) {
                this.modifica(item);
            }
        }
    }

    // Metoda care este apelata din ecran
    public async stergere(item?) {
        if (!item && this.rows.length === 0) {
            this.notificationService.showWarning("Vă rugăm să selectați o linie!");
            return;
        }

        let mesaj: string = "";

        if (item) {
            mesaj = 'Sunteți sigur că doriți să ștergeți linia selectată?';
        } else if (this.rows.length === 1) {
            mesaj = 'Sunteți sigur că doriți să ștergeți linia selectată?';
        } else if (this.rows.length > 1) {
            mesaj = 'Sunteți sigur că doriți să ștergeți liniile selectate?';
        }

        this.notificationService.confrimDelete(mesaj, 'Confirmare ștergere',
            async () => {
                // onAccept
                if (this.rows.length > 0) {
                    for (const row of this.rows) {
                        // 'row' este entitatea cu care lucram
                        await this.sterge(row);
                    }
                } else if (item) {
                    await this.sterge(item);
                }

                // Dupa finalizarea actiunii, reincarcam datele in grid
                await this.incarcaDate();
            },
            () => { /* onRejct */ return; });
    }

    /**
     * Metoda trebuie sa fie override in componenta
     * @param item 
     */
    public vizualizeaza(item) { }

    /**
     * Metoda trebuie sa fie override in componenta
     * @param item 
     */
    public modifica(item) { }

    /**
     * Metoda trebuie sa fie override in componenta
     * @param item 
     */
    public async sterge(item) { }

    /**
     * Metodă generală pentru a verifica dacă pagina curentă este în modul de vizualizare (ultimul valoare din url este 'vizualizare')
     * @returns true, dacă în url avem vizualizare
     */
    public override esteInModVizualizare(): boolean {
        // Metodă generală pentru a verifica dacă pagina curentă este în modul de vizualizare (ultimul valoare din url este 'vizualizare')
        this.activatedRoute.url.subscribe(urlSegments => {
            if (urlSegments && urlSegments.length > 0) {
                const lastSegment = urlSegments[urlSegments.length - 1].path;
                if (lastSegment === 'vizualizare')
                    this.modVizualizare = true;
            }
        });

        return this.modVizualizare;
    }

    public async formKeyDown(event): Promise<void> {
        if (event.keyCode === 13) {
            await this.incarcaDate();
        }
    }

    //#endregion Methods

    //#region Gettere

    public get esteRandNeselectat(): boolean {
        return this.rows.length === 0;
    }

    public get butonReincarcaVizibil(): boolean {
        return this.areDrepturiDeVizualizare;
    }

    public get butonVizualizareVizibil(): boolean {
        return this.areDrepturiDeVizualizare;
    }

    public get butonAdaugaVizibil(): boolean {
        return this.areDrepturiDeAdaugare && this.modVizualizare === false;
    }

    public get butonModificaVizibil(): boolean {
        return this.areDrepturiDeModificare && this.modVizualizare === false;
    }

    public get butonStergeVizibil(): boolean {
        return this.areDrepturiDeStergere && this.modVizualizare === false;
    }

    //#endregion Gettere

}