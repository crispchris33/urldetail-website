document.addEventListener('DOMContentLoaded', () => {
    const floatingWindow = document.createElement('div');
    floatingWindow.id = 'linkHoverInfoWindow';
    floatingWindow.style.display = 'none'; 
    document.body.appendChild(floatingWindow);

    const googleDemoContent = `
        <strong>Link Text:</strong> Google<br>
        <strong>Link URL:</strong> https://google.com<br>
        <strong>Domain:</strong> <span class='highlighted-domain'>google.com</span>
    `;

    const exampleDemoContent = `
        <strong>Link Text:</strong> Suspicious Link<br>
        <strong>Link URL:</strong> https://subdomain.example-security.com/verify/account?uid=123456<br>
        <strong>Domain:</strong> <span class='highlighted-domain'>example-security.com</span>
    `;


    document.getElementById('linkGoogle').addEventListener('mouseover', (e) => {
        showFloatingWindow(googleDemoContent, e.target);
    });

    document.getElementById('linkExample').addEventListener('mouseover', (e) => {
        showFloatingWindow(exampleDemoContent, e.target);
    });

    function showFloatingWindow(content, linkElement) {
        floatingWindow.innerHTML = content;
        positionFloatingWindow(linkElement);
        floatingWindow.style.display = 'block';
    }

    function positionFloatingWindow(linkElement) {
        const rect = linkElement.getBoundingClientRect();
        const topPosition = window.scrollY + rect.bottom + 10;
        const leftPosition = window.scrollX + rect.left;

        floatingWindow.style.position = 'absolute';
        floatingWindow.style.top = `${topPosition}px`;
        floatingWindow.style.left = `${leftPosition}px`;
    }

    document.querySelectorAll('.demo-link').forEach(link => {
        link.addEventListener('mouseout', () => floatingWindow.style.display = 'none');
    });

    document.querySelectorAll('.demo-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });

        link.addEventListener('mouseout', () => floatingWindow.style.display = 'none');
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});