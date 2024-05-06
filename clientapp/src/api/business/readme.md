# Generator client API
> see https://aka.ms/autorest

## Introducere
Înainte de a începe, instalează AutoRest folosind `npm`, prin rularea comenzilor:
### Versiuni folosite 
    Autorest: 2.0.4413; Node: v18.14.2; npm: 9.5.0
### Instaleaza autorest
    `npm install -g autorest`
### Instaleaza toate dependintele
    `autorest --reset`

Pentru alte opțiuni de instalare, vezi [Instalarea AutoRest](https://aka.ms/autorest/install) pe pagina github AutoRest

## Generare
Pentru a genera codul sursă, se pornește serviciul și apoi rulează `autorest` din directorul ClientApp/src/api

---

## Configurație
Mai jos sunt setările folosite de AutoRest

``` yaml
### Versiunea folosită
version: 2.0.4413

### Fișierul de intrare este URL-ul expus de proiectul curent
### Asigurați-vă ca acesta rulează și expune metadatele la adresa de mai jos
input-file: http://localhost:5000/swagger/v1/swagger.json

### Setări de generare
typescript:
  output-folder: lib
  add-credentials: true
  override-client-name: BusinessAPI
  source-code-folder-path: .
  custom-service-client-options: [noRetryPolicy=true]
