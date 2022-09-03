const buttonEdit2 = document.getElementById('buttonEdit')
    buttonEdit2.addEventListener('click', function() {
        const form1 = document.getElementById("form-data")
        const display = form1.style.display
        if (display == 'block') {
            form1.style.display = 'none'
        } else {
            form1.style.display = 'block'
        }
})
            

var textNama = document.getElementById('text-nama')
var textUsia = document.getElementById('text-usia')
var textRole = document.getElementById('text-role')
var textAvailability = document.getElementById('text-availability')
var textPengalaman = document.getElementById('text-pengalaman')
var textEmail = document.getElementById('text-email')
var textDomisili = document.getElementById('text-lokasi')
document.getElementById('input-nama').value = textNama.innerText
document.getElementById('input-usia').value = textUsia.innerText
document.getElementById('input-lokasi').value = textDomisili.innerText
document.getElementById('input-role').value = textRole.innerText
document.getElementById('input-availability').value = textAvailability.innerText
document.getElementById('input-pengalaman').value = textPengalaman.innerText
document.getElementById('input-email').value = textEmail.innerText

function handleSubmit(event) {
    var inputNama = document.getElementById('input-nama')
    var inputUsia = document.getElementById('input-usia')
    var inputRole = document.getElementById('input-role')
    var inputAvailability = document.getElementById('input-availability')
    var inputPengalaman = document.getElementById('input-pengalaman')
    var inputEmail = document.getElementById('input-email')
    var inputDomisili = document.getElementById('input-lokasi')
    document.getElementById('text-nama').innerText = inputNama.value
    document.getElementById('text-usia').innerText = inputUsia.value
    document.getElementById('text-role').innerText = inputRole.value
    document.getElementById('text-availability').innerText = inputAvailability.value
    document.getElementById('text-pengalaman').innerText = inputPengalaman.value
    document.getElementById('text-email').innerText = inputEmail.value
    document.getElementById('text-lokasi').innerText = inputDomisili.value
    const text2 = document.getElementById('form-data')
    const display = text2.style.display
    if (display == 'block') {
        text2.style.display = 'none'
    } else {
        text2.style.display = 'block'
    }
    event.preventDefault()
}


function cancel() {
    var textNama = document.getElementById('text-nama')
    var textUsia = document.getElementById('text-usia')
    var textRole = document.getElementById('text-role')
    var textAvailability = document.getElementById('text-availability')
    var textPengalaman = document.getElementById('text-pengalaman')
    var textEmail = document.getElementById('text-email')
    var textDomisili = document.getElementById('text-lokasi')
    document.getElementById('input-nama').value = textNama.innerText
    document.getElementById('input-usia').value = textUsia.innerText
    document.getElementById('input-role').value = textRole.innerText
    document.getElementById('input-availability').value = textAvailability.innerText
    document.getElementById('input-pengalaman').value = textPengalaman.innerText
    document.getElementById('input-email').value = textEmail.innerText
    document.getElementById('input-lokasi').value = textDomisili.innerText
  }


const buttonSubmit= document.getElementById('btn-submit')
buttonSubmit.addEventListener('click', function (){
    if (confirm("Apakah Anda Yakin Ingin Mengubah Data?")) {
        alert("Data Anda Berhasil Diubah")
    } else {
        cancel()
    }
})