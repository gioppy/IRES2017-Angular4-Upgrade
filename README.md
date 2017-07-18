# Materiali del seminario Angular 4 - Convertire o migrare un'applicazione AngularJS @ IRES

## Note generali
Per poter utilizzare questi esempi è necessario aver installato NodeJs, Angular CLI e TypeScript.

Una volta installate queste dipendenze, basta portarsi, da riga di comando, all'interno dell'esempio da voler eseguire e digitare `npm install`. Una volta installate tutte le dipendenze, basta digitare `ng serve`: il server viene montato su `localhost:4200`.

## UpgradeDemo
Demo app che utilizza `UpgradeModule`, necessario per integrare un'applicazione AngularJs all'interno di un'applicazione Angular. All'interno, vengono presentati le due diverse strategie: **Upgrade Strategy** e **Downgrade Stategy**.

## Pokedex4
Demo app completamente riscritta dalla relativa applicazione [AngularJs](https://pokedex.lab-web.it). All'interno, oltre all'applicazione Angular, è presente anche il back-end realizzato con Drupal 7, installabile e già pronto all'uso.

Una volta ripristinato in locale il back-end, vanno modificati tutti i service che presentano le chiamate a https://api.pokedex.lab-web.it con l'indirizzo del server locale.

Per l'accesso alla parte di amministrazione di Drupal, i dati sono i seguenti:

- **Nome Utente**: amministratore
- **Password**: pokedex