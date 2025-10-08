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