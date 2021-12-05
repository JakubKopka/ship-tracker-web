# Ship tracker

## O aplikacji

Aplikacja służy do śledzenia aktualnej pozycji oraz celu podróży statków.

### Działanie
Statki są oznaczone pinami z ikonką statku, po kliknięciu wybranego statku wyświetla się zestaw informacji na jego temat + jeśli znane są dane na temat celu podróży oznaczona jest jego droga do tego celu (cel oznaczony jest wyróżniającą się pinezką).

Informacje nt. konkretnych statków:
- nazwa statku
- typ statku (każdy typ jest zwizualizowany odpowiednim zdjęciem tego typu statku)
- kierunek ruchu statku
- poziom zanurzenia
- znak wywoławczy
- kraj pochodzenia statku
- lokalizacja celu (miasto, kraj, kontynent)

Niektóre informacje zawierają wyjaśnienie w dymku.

Widok przystosowany do różnych szerokości ekranu.

### Technologie
Frontend: 
- React.js
- styled-components
- Open Street Map by react-leaflet

Backend:
- Spring Boot
- Hibernate
- Swagger
- JUnit 5
- PostgreSQL
- Docker

### Dane
Dane pochodzą z dwóch API:
- www.barentswatch.no
- www.positionstack.com

### Przykładowe widoki

Desktop:
![Desktop - information modal](./src/assets/screenshots/Ship%20tracker%20-%20desktop%20-%20information%20modal.png)
![Explanation tooltip](./src/assets/screenshots/Ship%20tracker%20-%20explanation%20tooltip.png)

Mobile:
![Mobile - pin active](./src/assets/screenshots/Ship%20tracker%20-%20iPhone%206%20-%20pin%20active.png)
![Mobile - information modal](./src/assets/screenshots/Ship%20tracker%20-%20iPhone%206%20-%20information%20modal.png)

## Uruchomienie aplikacji

1. Wykonaj instrukę budowy projektu dla API, sekcja "Uruchomienie aplikacji": https://github.com/JakubKopka/ship-tracker-api/blob/master/README.md
2. Przejdz do głównego folderu projektu 
3. W terminalu wykonaj komendę: `docker-compose up`
4. Przejdz na stornę `http://localhost:3000/`
