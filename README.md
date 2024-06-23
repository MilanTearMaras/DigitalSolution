# Zadání FE  úlohy

- Cíle tohoto cvičení jsou:
  - příprava SPA administrace pro modul uživatelů (a zbyde-li čas i modul výplat)
  - nastylování administrace pomocí Tailwindcss podle ilustračního vzoru _**níže***_
- K dispozici je interaktvní [Dokumentace API](https://interview-test.digital.cz/api/doc) se vzory payloadů a odpovědí pro **public** a **JWT-protected** endpointy na doméne (https://interview-test.digital.cz)
- Povoleno je doinstalovat libovolný node module dle potřeby a použítí čehokoliv, co je existující součástí projektu:
  - [heroicons](https://heroicons.com/) - Doporučeno - (heroicons jsou použity i v ilustračních návrzích)
  - [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) - (Podrobná znalost není v našem případě důležitá, zde nám slouží k rychlému tvoření stránek s implicitním routováním)
  - [Tailwindcss](https://nuxt.com/docs/getting-started/introduction) - Doporučeno ke stylování FE komponent
  - [axios](https://www.npmjs.com/package/axios) - Možné použití axios clienta
  - [Projektová  dokumentace](./PROJECT_DOCS.md) - **Silně doporučeno její pečlivé přečtení**

---

## Základní akceptační kritéria
1. Na root stránce [/](http://localhost:3000/) vidím výpis uživatelů
   - (GET na https://interview-test.digital.cz/api/users endpoint)
   - (funkcionalitu filtrů / řazení / stránkování není potřeba řešit, protože není na zkušebním API implementováno)
2. nad výpisem uživatelů mohu přidávat, upravovat, nebo mazat uživatele
   - ať už pomocí modálových oken nebo vlastní stránku detailu
   - formuláře pro přidání / úpravu mají základní FE validace
3. Rozložení a UI prvky jsou nastylované přibližně podle vzoru 👇 <br>(sloupce a formulářové prvky odpovídají parametrům dokumentace API)
4. V postranní navigaci vidím odkaz na výpis [uživatelů](http://localhost:3000/) a odkaz na přihlášení
5. Stránka přihlašení je dostupná na routě [/login](http://localhost:3000/login)
   - Přihlašovací formulář odesílá _email_ & _password_ s nově vytvořeným uživatelem na https://interview-test.digital.cz/api/auth-token endpoint

(_Ilustrační vzor není vyžádováno plnit "pixel-perfect" - slouží k inspiraci layoutu a UI prvků, doporučujeme se soustředit více na interaktivitu a logiku._)

---

## Bonusová akceptační kritéria
1. Po přihlášení je uživatel přesměrován na modul výplat - salary endpointy vyžadují ověření pomocí JWT tokenu
2. S načteným JWT tokenem se nám v postranním menu ukáže odkaz na modul výplat na routě "/salary"
3. Základní responzivní stylování
4. Podle času implementovat obdobné funcionality modulu uživatelů do modulu výplat

---

### _*Ilustrační vzor_:

![Vypis](./static/list.png) ![Detail](./static/detail.png) ![Modal / Formulář](./static/modal_form.png)
