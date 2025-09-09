// Booking form WhatsApp integration
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = this[0].value;
    let phone = this[1].value;
    let date = this[2].value;
    let time = this[3].value;
    let guests = this[4].value;

    let message = `Booking Request:%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0ATime: ${time}%0AGuests: ${guests}`;
    window.open(`https://wa.me/9238483894?text=${message}`, "_blank");
  });
}

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (galleryImages) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

// Reviews Form
const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let rating = document.getElementById("rating").value;
    let reviewText = document.getElementById("reviewText").value;

    if (rating && reviewText) {
      let reviewList = document.getElementById("review-list");
      let newReview = document.createElement("div");
      newReview.classList.add("review-card");
      newReview.innerHTML = `<p>${rating} ${reviewText}</p>`;
      reviewList.appendChild(newReview);
      this.reset();
    }
  });
}
