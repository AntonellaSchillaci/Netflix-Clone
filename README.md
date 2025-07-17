## 1. Stato attuale del progetto
- Questa è **ancora una pagina di login**: stiamo lavorando per completare layout e funzionalità, ma non è ancora una "home".
- La sezione **“I titoli del momento”** non viene visualizzata perché la chiave API (TMDB) è protetta e non è stata esposta. È normale che non appaia nulla finché non aggiungi la tua `VITE_TMDB_API_KEY` nel file `.env`.

## 2. Sezione “Top Titles”
- Recupera i top 10 elementi da TMDB con:
  ```ts
  https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}
  ```
- Se non hai aggiunto la tua chiave a `.env`, la richiesta fallirà e la sezione non verrà renderizzata.


## 3. .env
Ricordati di creare un file `.env` (in root) con questo contenuto:
```env
VITE_TMDB_API_KEY=la_tua_chiave_api_tmdb
```

## 4. Come provarlo
1. Clona o scarica il progetto.
2. Crea `.env` e inserisci la tua `VITE_TMDB_API_KEY`.
3. Esegui:
   ```bash
   npm install
   npm run dev
   ```
4. Visita `http://localhost:5174`, potrai vedere la pagina di login. Non preoccuparti se “I titoli del momento” non appaiono: è tutto previsto.

