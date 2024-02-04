
const scroll = new LocomotiveScroll({
    el: document.querySelector('.loco'),
    smooth: true
});
function redirectToDiv() {
    // Redirect to the div with smooth scroll (optional)
    document.getElementsByClassName('cta').scrollIntoView({ behavior: 'smooth' });
}
