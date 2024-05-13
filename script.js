document.querySelector('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute('href')

        // Scroll to the elemnt link in the href attributes
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })


        
    })
})