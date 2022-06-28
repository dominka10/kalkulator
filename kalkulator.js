const wyswietlacz = document.querySelector(".wyswietlacz");
const klawiatura = document.querySelector(".klawiatura");
// todo list:
// 1. stworzenie klawiatury numerycznej
//    -stworzenie przycisku
//    - przypiesanie wartości do przycisku
//    - obsługa kliknięcia przycisku (console.log)
//    - stworzenie cyfr (10) ( for each)
//    - stworzenie operacji (4)
// 2. stworzenie wyświetlacza
//   - wyświetlanie wszystkich akcji (skutek kliknięcia przycisku)
//   - po akcji = wyświetlacz pokazuje tylko wynik
//   - po akcji reset wyświetlacz nie pokazuje nic - wraca do stanu wyjściowego
// 3. obliczanie wyniku (pętla) (zmienna wynik od której odejmujemy lub dodajemy wartości  )
// 4. stylowanie kalkulatora
function StworzPrzycisk(wartosc, PoKlinieciu, klasa) {
  const przycisk = document.createElement("button");
  if (klasa) {
    przycisk.classList.add(klasa);
  } // if robi klase opcjonalną (jeeli klasa nie jest pusta - to dodaj ją)
  przycisk.innerHTML = wartosc;
  przycisk.addEventListener("click", PoKlinieciu);
  klawiatura.append(przycisk);
}
function StworzKlawiature() {
  for (let wartosc = 0; wartosc < 10; wartosc++) {
    StworzPrzycisk(wartosc, console.log, "cyfra");
  }
  StworzPrzycisk("+", console.log);
  StworzPrzycisk("-", console.log);
  StworzPrzycisk("=", console.log);
  StworzPrzycisk("reset", console.log);
}

StworzKlawiature();
// tu wywolac StworzPrzycisk tyle razy ile potrzeba
