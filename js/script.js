const navbar = document.getElementById('main-nav')
const menuBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-close')
const navigation = document.querySelector('.nav-container')
const navReservation = document.querySelector('.nav-reservation')
const navLinks = document.querySelectorAll('.link')

/* Header on scroll */
window.addEventListener('scroll', () => {
    if (innerWidth >= 1170) {
        if (scrollY >= 150) {
            navbar.classList.add('top')
        } else {
            navbar.classList.remove('top')
        }
    }
})

/* Scrolling 150px above section*/
$('#main-nav a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault()

        const hash = this.hash

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 200,
            },
            50
        )
    }
})

function linkClick(e) {
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.add = 'd-none'
            navReservation.style.display = 'none'
            menuBtn.style.display = 'block'
            closeBtn.style.display = 'none'
        })
    })
}

window.addEventListener('resize', () => {
    if (innerWidth > 1170) {
        navigation.style.display = 'grid'
        navReservation.style.display = 'flex'
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'none'
    } else {
        navigation.style.display = 'none'
        navReservation.style.display = 'none'
        menuBtn.style.display = 'grid'
        closeBtn.style.display = 'none'
    }
})

// Mobile version

if (innerWidth < 1170) {
    // Event Listeners
    menuBtn.addEventListener('click', () => {
        navigation.style.display = 'grid'
        navReservation.style.display = 'flex'
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'inline-block'
    })

    closeBtn.addEventListener('click', () => {
        navigation.style.display = 'none'
        navReservation.style.display = 'none'
        menuBtn.style.display = 'inline-block'
        closeBtn.style.display = 'none'
    })

    //Global Scope
    linkClick()
} else {
}
