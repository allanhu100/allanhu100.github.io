document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    document.body.insertAdjacentHTML("beforeend", `
<footer class="footer">
    &copy; ${year} Allan Hu
    <a href="https://allanhu100.github.io/dev">Developer</a>
    <a href="https://allanhu100.github.io/credits">Credits</a>
</footer>
    `);
});
