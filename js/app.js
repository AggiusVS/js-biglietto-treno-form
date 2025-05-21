document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault()


    const km = parseFloat(document.getElementById("km").value)
    const discount = document.getElementById('discount').value;

    if (isNaN(km) || km <= 0) {
        alert("Inserire un numero valido di chilometri");
        return
    }

    const basePrice = km * 0.21
    let discountPerc = 0

    if (discount === "studenti") {
        discountPerc = 0.20
    } else if (discount === "over65") {
        discountPerc = 0.40
    }

    const discountImport = basePrice * discountPerc
    const finalPrice = basePrice - discountImport

    let discountText = ""

    if (discount === "intero") {
        discountText = "Prezzo Intero"
    } else if (discount === "over65") {
        discountText = "Sconto over 65 (40%)"
    } else if (discount === "studenti") {
        discountText = "Sconto studenti (20%)"
    }

    document.getElementById("output").innerHTML = `
    Riepilogo: <br> Chilometri da percorrere: ${km} km<br>
    Tipo di sconto: ${discountText}<br>
    Prezzo totale: € ${finalPrice.toFixed(2)}`
})