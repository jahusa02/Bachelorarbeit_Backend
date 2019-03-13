# Bachelorarbeit (Backend)

> Bachelorarbeit "Konzeption und Entwicklung einer Forschungsgruppen-Website" von René Achtelik

## Build Setup (Production)

Um die Website auf dem eigenen PC auszuführen, ist eine aktuelle Installation von Node.js erforderlich.
https://nodejs.org/en/

Hier wird erklärt, wie der ***Production Mode*** von Strapi gestartet wird
Wenn eine andere Datenbank verwendet werden soll, muss dies unter ``` ./config/envirmonets/production/database.json ``` eingetragen werden.
Es ist zu beachten, dass aus Entwicklungsgründen die selbe Datenbank für ***Devlopment Mode*** und ***Production Mode*** verwendet werden


``` bash
# Installiert Abhängigkeiten der NPM Packages
$ npm install

# Installiert Strapi
$ npm run postinstall

# Startet das Backend im "Production Mode" auf Port 1337
$ npm run build

```

## Build Setup (Development)


Falls neue Content Types erstellen werden sollen, muss Strapi lokal auf einem Computer im ***Development Mode*** ausgeführt werden.
Andernfalls ist es nicht möglich, die Content-Types zu ändern oder zu erstellen.
Dies ist wie folgt möglich

``` bash
# Installiert Abhängigkeiten der NPM Packages
$ npm install

# Installiert Strapi
$ npm run postinstall

# Startet das Backend im "Development Mode" auf Port 1337
$ npm run start

```

