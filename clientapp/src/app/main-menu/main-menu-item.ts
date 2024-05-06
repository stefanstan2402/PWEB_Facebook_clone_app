export interface MainMenuItem {

    // Id-ul meniului
    itemId?: string;
  
    // Textul afisat
    displayName: string;
  
    // Element dezactivat (da/nu)
    disabled?: boolean;
  
    // Numele imaginii (primeNG)
    iconName?: string;
  
    // Ruta catre care navigheaza elementul
    route?: string;

    // Url extern catre care navigheaza elementul
    externalUrl?: string;
  
    // Permisiunea pe care trebuie sa o detina utilizatorul
    permisiune?: number;
  
    // Indica faptul ca meniul este accesibil doar unui utilizator logat
    necesitaUtilizatorLogat?: boolean;

    // vizibil doar adminilor
    necesitaAdmin?: boolean;
      
    // Submeniuri
    children?: MainMenuItem[];
  
    visible?: boolean;
}