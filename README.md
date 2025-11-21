# Część II. Aplikacja webowa  
Celem zadania jest przygotowanie aplikacji z wykorzystaniem Reacta.  
Twoja aplikacja będzie częścią panelu pracowniczego toru gokartowego.  
Na wejściu dostaniesz dane w formacie JSON opisujące listę gokartów.  
Twoim zadaniem jest wyświetlenie tych danych oraz umożliwienie pracownikowi aktualizowania ich stanu technicznego.    
Podczas pracy nie wolno korzystać z zasobów zewnętrznych dostępnych w sieci (nie pobieramy styli, grafik ani bibliotek z Internetu).  
Wszystkie potrzebne zasoby muszą znajdować się lokalnie.  
  
#### W pliku .txt otrzymasz listę obiektów opisujących gokarty.  
 
## Zadanie:  
### Wyświetlanie gokartów  
#### Przygotuj komponent React, który:  
- wczyta dane z tablicy w komponencie,  
- wyświetli wszystkie wpisy w formie tabeli, używając funkcji map(),  
- pokaże pola: numer gokarta, typ, silnik, wymagania, stan "jeździ", usterka.  
#### Edycja stanu technicznego  
- Dla każdej pozycji w tabeli ma istnieć możliwość:  
- wybrania z rozwijanego pola (select) czy gokart jeździ / nie jeździ,  
- jeśli gokart nie jeździ, ma pojawiać się pole tekstowe,  
- jeśli gokart zacznie jeździć, pole usterki powinno znikać, a tekst usterki być automatycznie czyszczony.  
- Walidacja danych  
#### Pole usterki:  
- musi być wypełnione, jeśli jezdzi = "Nie",  
- może być puste, jeśli jezdzi = "Tak",  
- powinno zmieniać styl (np. czerwone obramowanie), jeśli jest wymagane, a puste.  
## Stylizacja aplikacji  
### Nie używamy Bootstrapa ani Tailwinda.  
### Stylizacja musi być przygotowana w osobnym pliku CSS.  
### Tytuł strony: „Panel pracowników — Lista gokartów”, kolor tekstu żółty (#FFD700), tło czarne (#000000), tekst wyśrodkowany.  
### Tło całej aplikacji: jasne, np. #F5F5F5 lub białe.  
### Główne okno (kontener z tabelą): białe tło, cienka czarna ramka wokół, zaokrąglone rogi.  
#### Tabela:  
- Nagłówki tabeli (th): tło żółte (#FFD700), tekst czarny.  
- Komórki tabeli (td): białe tło, ciemne obramowanie, tekst wyśrodkowany.  
- Wiersze mogą mieć naprzemienne tła: biały / bardzo jasny szary (#F0F0F0).  
- Napis w nagłówku tabeli wyróżniony pogrubieniem.  
- Pole wyboru „jeździ / nie jeździ”:  
- tło białe, obramowanie czarne,  
- po najechaniu delikatna żółta obwódka.  
- Pole tekstowe „usterka”:  
- tło białe, obramowanie czarne,  
- jeśli pole jest puste, a gokart ma status „Nie jeździ” — obramowanie czerwone,  
- jeśli pole poprawnie wypełnione — obramowanie zielone.  
#### Przycisk „Kontakt do szefa”:  
- tło czarne (#000000),  
- tekst żółty (#FFD700),  
- obramowanie żółte,  
- po najechaniu: tło żółte, tekst czarny.  

Wszystkie elementy powinny mieć odpowiednie marginesy i odstępy, aby interfejs był czytelny.  
Cała zawartość powinna być wyśrodkowana na stronie.  
  
#### Dodatkowy element  
Dodaj dowolny, prosty element interfejsu - np. Przycisk "Kontakt do szefa" prowadzący do zewnętrznego linku.  
  
### Wynik działania aplikacji  
Użytkownik powinien:  
- widzieć listę gokartów,  
- poprawnie zmieniać stan poszczególnych pozycji,  
- wpisywać usterki tam, gdzie są wymagane,  
- widzieć na bieżąco aktualizowane informacje,  
- otrzymać estetycznie ostylowany inferfejs  
  
### Efekt końcowy  
   Oddawany projekt musi zawierać:  
- Komponent React wykonujący całe zadanie (np. Gokarty.js).  
- Oddzielny plik CSS ze stylami (np. App.css).  
- Tablicę danych gokartów zgodną z plikiem wejściowym.  
- Aplikację działającą zgodnie z powyższą specyfikacją.  
