// Booking form WhatsApp integration
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = this[0].value;
  let phone = this[1].value;
  let date = this[2].value;
  let time = this[3].value;
  let guests = this[4].value;

  let message = `Booking Request:%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0ATime: ${time}%0AGuests: ${guests}`;
  window.open(`https://wa.me/9238483894?text=${message}`, "_blank");
});
