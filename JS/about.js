function openLightbox(inp) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = inp;
    lightbox.style.display = "flex";
    }

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function sendEmail1() {
  var recipientEmail = 'kareemaboelnaga18@gmail.com';
  var subject = 'Feedback';
  var body = 'Dear Kareem,\n';
  var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
}

function sendEmail2() {
  var recipientEmail = 'abdelrhman.mano.aae@gmail.com';
  var subject = 'Feedback';
  var body = 'Dear Abdelrahman,\n';
  var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
