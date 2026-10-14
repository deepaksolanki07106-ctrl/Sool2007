
<script>
function showPage(page) {

    let content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `
            <h2>Home Page</h2>
            <p>Welcome to my website!</p>
        `;
    }

    else if (page === "about") {
        content.innerHTML = `
            <h2>About Me</h2>
            <p>Mera naam Deepak hai.</p>
        `;
    }

    else if (page === "gallery") {
        content.innerHTML = `
            <h2>My Gallery</h2>
            <p>Yahan meri photos dikhenगी.</p>
        `;
    }

    else if (page === "contact") {
        content.innerHTML = `
            <h2>Contact Me</h2>
            <p>Yahan meri contact information hogi.</p>
        `;
    }

}
</script>
</body>
</html>
