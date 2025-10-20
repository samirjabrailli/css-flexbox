// Dropdown toggle
    const latestBtn = document.getElementById('latestBtn');
    const latestDropdown = document.getElementById('latestDropdown');

    const blogBtn = document.getElementById('blogBtn');
    const blogDropdown = document.getElementById('blogDropdown');

    const pagesBtn = document.getElementById('pagesBtn');
    const pagesDropdown = document.getElementById('pagesDropdown');


    latestBtn.addEventListener('click', () => {
        latestDropdown.classList.toggle('hidden');
    });

    blogBtn.addEventListener('click', () => {
        blogDropdown.classList.toggle('hidden');
    });

    pagesBtn.addEventListener('click', () => {
        pagesDropdown.classList.toggle('hidden');
    });


    // Click kənara → bağla
    document.addEventListener('click', (e) => {
        if (!latestBtn.contains(e.target) && !latestDropdown.contains(e.target)) {
            latestDropdown.classList.add('hidden');
        }
    });

    // Click kənara → bağla
    document.addEventListener('click', (e) => {
        if (!blogBtn.contains(e.target) && !blogDropdown.contains(e.target)) {
            blogDropdown.classList.add('hidden');
        }
    });

    // Click kənara → bağla
    document.addEventListener('click', (e) => {
        if (!pagesBtn.contains(e.target) && !pagesDropdown.contains(e.target)) {
            pagesDropdown.classList.add('hidden');
        }
    });

// animation
   // GSAP və ScrollTrigger aktivləşdiririk
gsap.registerPlugin(ScrollTrigger);

// Card section üçün animasiya
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",      // nə vaxt başlayacaq
    start: "top 80%",      // səhifənin 80%-də görünəndə
    toggleActions: "play none none none", // bir dəfə oynasın
  },
  duration: 1.2,           // animasiyanın müddəti
  y: 100,                  // aşağıdan yuxarı
  x: -100,                 // soldan sağa
  opacity: 0,              // başlanğıc şəffaflıq
  ease: "power3.out"       // smooth keçid
});

// Hər img üçün ayrıca animasiya (aşağıdan-yuxarı və tərsinə)
gsap.registerPlugin(ScrollTrigger);

// Şəkillər üçün animasiya
gsap.utils.toArray(".card img").forEach((img) => {
  gsap.from(img, {
    y: 100,          // aşağıdan yuxarı
    x: -100,         // soldan sağa
    opacity: 0,      // şəffaflıqdan görünür
    duration: 1.2,   // animasiyanın müddəti
    ease: "power3.out",
    scrollTrigger: {
      trigger: img,
      start: "top 90%",       // şəkil ekrana yaxınlaşanda başlasın
      toggleActions: "play none none none", // bir dəfə oynasın
    },
  });
});
