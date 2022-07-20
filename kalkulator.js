const wyswietlacz = document.querySelector(".wyswietlacz");
const klawiatura = document.querySelector(".klawiatura");
let kliknieteWartosci = [];
// todo list:
// 1. stworzenie klawiatury numerycznej
//    -stworzenie przycisku
//    - przypiesanie wartości do przycisku
//    - obsługa kliknięcia przycisku (WstawWWyswietlaczu)
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
  } // if robi klase opcjonalną (jezeli klasa nie jest pusta - to dodaj ją)
  przycisk.innerHTML = wartosc;
  przycisk.addEventListener("click", PoKlinieciu);
  klawiatura.append(przycisk);
}
function StworzKlawiature() {
  for (let wartosc = 0; wartosc < 10; wartosc++) {
    StworzPrzycisk(wartosc, WstawWWyswietlaczu, "cyfra");
  }
  StworzPrzycisk("+", WstawWWyswietlaczu);
  StworzPrzycisk("-", WstawWWyswietlaczu);
  StworzPrzycisk("=", Wynik);
  StworzPrzycisk("reset", Resetuj);
}
function Resetuj() {
  kliknieteWartosci = [];
  Wyswietl();
}
//
function Wynik() {
  let wynik = kliknieteWartosci[0];
  kliknieteWartosci.forEach(function (element, index) {
    const jestostatni = kliknieteWartosci.length - 1 === index;
    if ((element === "+" || element === "-") && jestostatni) {
      return;
    }
    if (element === "+") {
      wynik = wynik + kliknieteWartosci[index + 1];
    }
    if (element === "-") {
      wynik = wynik - kliknieteWartosci[index + 1];
    }
  });
  WyswietlWynik(wynik);
}
function WyswietlWynik(wynik) {
  Resetuj();
  wyswietlacz.textContent = wynik;
}
function Wyswietl() {
  wyswietlacz.textContent = kliknieteWartosci.join(""); // join wyswietla elementy w array bez przecinka
}
function WstawWWyswietlaczu(event) {
  const wartosc = event.target.textContent;
  let ostatniElement = kliknieteWartosci[kliknieteWartosci.length - 1];
  // kliknieteWartosci[kliknieteWartosci.length] = wartosc; // to samo co push
  if (wartosc === "+" || wartosc === "-") {
    if (
      ostatniElement !== "+" &&
      ostatniElement !== "-" &&
      ostatniElement !== undefined
    ) {
      kliknieteWartosci.push(wartosc);
    }
  } else {
    //debugger;
    ostatniElement = ostatniElement || 0; // jezeli pierwszy element fałszywy - to jest zerem - element lub zero
    if (ostatniElement !== "+" && ostatniElement !== "-") {
      kliknieteWartosci.pop(); // zdejmuje ostatni element jezeli istnieje (w innym wypadku sie dodaje nowa kliknieta wartosc do poprzedniej wartosci)
      kliknieteWartosci.push(parseInt(ostatniElement + wartosc, 10)); // parseInt - (dodaje do siebie wartosci) / parsuje miput do liczby - zmienia typ
    } else {
      kliknieteWartosci.push(parseInt(wartosc, 10));
    }

    console.log(ostatniElement);
    // if (ostatniElement == undefined) {
    //   ostatniElement = 0;
    // }
  }
  // tylko wtedy kiedy ostatni element nie jest pusty /  jesli jest pusty badz 0
  Wyswietl();
}
Wyswietl();
StworzKlawiature();
// tu wywolac StworzPrzycisk tyle razy ile potrzeba
