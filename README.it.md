//Di cosa si tratta

È necessario creare un'applicazione per un'azienda che offre i servizi di
insegnanti di lingue online. L'applicazione è composta da 3 pagine:

La pagina "Home" con l'elenco dei vantaggi dell'azienda e un link che invita a
iniziare a utilizzare l'applicazione e reindirizza alla pagina "Insegnanti". Lo
stile è realizzato utilizzando esempi forniti nel layout con variazioni di
palette o tramite un prototipo (che renderà il progetto più unico).

La pagina "Insegnanti", che contiene un elenco di insegnanti che l'utente può
filtrare per lingua di insegnamento, livello di competenza degli studenti, con
cui l'insegnante lavora, e il prezzo per ora di lezione. È possibile filtrare
per lingua, selezionare la lingua da apprendere e arrotondare il prezzo per ora
al valore più vicino.

La pagina privata "Preferiti" con gli insegnanti che l'utente ha aggiunto ai
"preferiti".

Perfect pixel preso da:
https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=6-253&t=C7JA96LIV5FJwLBQ-0

Tecnologie utilizzate: React, Redux, Firebase, Formik, materiale mui, Yup.

Registrazione e accesso: Implementare l'autenticazione tramite Firebase,
consentendo agli utenti di registrarsi, accedere, ottenere informazioni
sull'utente corrente e disconnettersi.

Forma di registrazione/accesso: Utilizzare react-hook-form & yup per
implementare una forma di registrazione/accesso con la minima validazione dei
campi. Tutti i campi devono essere obbligatori. La finestra modale con il modulo
dovrebbe chiudersi facendo clic sul pulsante "X", cliccando sullo sfondo o
premendo il tasto Esc.

Database in tempo reale: Utilizzare Firebase Realtime Database per creare una
raccolta di insegnanti con i seguenti campi: nome, cognome, lingue, livelli,
valutazione, recensioni, prezzo_per_ora, lezioni_svolte, avatar_url,
info_lezione, condizioni, esperienza.

Card dell'insegnante: Implementare una scheda con le caratteristiche
dell'insegnante in base al layout fornito.

Pagina "Insegnanti": Visualizzare 4 card sulla pagina "Insegnanti" e consentire
il caricamento di ulteriori card facendo clic su un pulsante "Carica altro".
Dopo il clic, dovrebbe essere effettuata una richiesta al database per
visualizzare una nuova serie di card.

Preferiti: Per gli utenti non autenticati, mostrare una finestra modale o una
notifica che indichi che questa funzionalità è disponibile solo per gli utenti
autenticati. Per gli utenti autenticati, aggiungere la card selezionata alla
lista dei preferiti (utilizzando localStorage o la raccolta degli utenti di
Firebase) e cambiare il colore del pulsante "preferiti".

Persistenza dei preferiti: Alla ricarica della pagina, i risultati finali delle
azioni dell'utente autenticato dovrebbero essere mantenuti. Ad esempio, se si
aggiunge una card agli "preferiti" e si aggiorna la pagina, il pulsante dovrebbe
rimanere nello stato "selezionato" con il colore corrispondente.

Rimozione dai preferiti: Se si fa clic nuovamente sul pulsante "preferiti", la
card dovrebbe essere rimossa dalla lista dei preferiti e il colore del pulsante
dovrebbe tornare allo stato iniziale.

Leggi di più: Quando si fa clic sul pulsante "Leggi di più", la card dovrebbe
espandersi mostrando informazioni più dettagliate sull'insegnante e le
recensioni degli studenti.

Prenota una lezione di prova: Quando si fa clic sul pulsante "Prenota una
lezione di prova", dovrebbe aprirsi una finestra modale con un modulo per
prenotare una lezione di prova. Utilizzare react-hook-form & yup per
implementare il modulo con la minima validazione dei campi. Tutti i campi devono
essere obbligatori.

Chiusura della finestra modale: La finestra modale dovrebbe chiudersi facendo
clic sul pulsante "X", cliccando sullo sfondo o premendo il tasto Esc.

Pagina "Preferiti": Gli utenti autenticati dovrebbero avere accesso a una pagina
privata chiamata "Preferiti", dove possono visualizzare tutte le card degli
insegnanti che hanno aggiunto ai "preferiti". Il layout della pagina dovrebbe
essere simile alla pagina "Insegnanti".
