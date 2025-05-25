
document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault()
    //dichiara le variabili dei dati del passegero
    const km = parseFloat(document.getElementById("km").value)
    const discount = document.getElementById('discount').value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    //si assicura che l'utente inserisca un numero valido di km
    if (isNaN(km) || km <= 0) {
        alert("Inserire un numero valido di chilometri");
        return
    }

    //parto con lo sconto a 0 per aumentarlo in base al biglietto selezionato
    const basePrice = km * 0.21
    let discountPerc = 0

    if (discount === "studenti") {
        discountPerc = 0.20
    } else if (discount === "over65") {
        discountPerc = 0.40
    }
    //calcola il prezzo finale
    const discountImport = basePrice * discountPerc
    const finalPrice = basePrice - discountImport


    //guarda che tipo di biglietto ha scelto e lo salva in una stringa 
    let discountText = ""

    if (discount === "intero") {
        discountText = "Prezzo Intero"
    } else if (discount === "over65") {
        discountText = "Sconto over 65 (40%)"
    } else if (discount === "studenti") {
        discountText = "Sconto studenti (20%)"
    }

    //rimuove d-none dalle classi di output
    const output = document.getElementById("output");
    output.classList.remove("d-none");

    document.getElementById("passengerName").innerText = `${name} ${surname}`;
    document.getElementById("ticketInfo").innerText = `${discountText}`
    document.getElementById("ticketPrice").innerText = ` €${finalPrice.toFixed(2)}`
})