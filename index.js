const primaryNav = document.querySelector("#primary-navigation")
const navToggle = document.querySelector("#mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
    }

    const animation = document.querySelector('[data-visible="true"]');
    const noanimation = document.querySelector('[data-visible="false"');
if (animation) {
      primaryNav.classList.remove('translate-x-full');
      navToggle.innerHTML = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                                fill="currentcolor" fill-rule="evenodd" />
                        </svg>`;
    } else if (noanimation) {
        primaryNav.classList.add('translate-x-full');
        navToggle.innerHTML = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="currentcolor" fill-rule="evenodd"/></svg>`;
    }
});



