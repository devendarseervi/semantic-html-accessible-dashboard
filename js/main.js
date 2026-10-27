
async function loadComponent(placeholderId, componentPath) {
    const placeholder = document.getElementById(placeholderId);

    if (!placeholder) {
        return;
    }

    try {
        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}`);
        }

        placeholder.innerHTML = await response.text();
    } catch (error) {
        console.error("Component loading failed:", error);
        placeholder.textContent = "This part of the page could not be loaded.";
    }
}

function setCurrentPage(page) {
    document.querySelectorAll("[data-page]").forEach((link) => {
        if (link.dataset.page === page) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

async function initializePage() {
    const isRecordsPage = window.location.pathname.endsWith("/records.html");
    const page = isRecordsPage ? "records" : "overview";
    const basePath = isRecordsPage ? "../" : "";

    await Promise.all([
        loadComponent("header-placeholder", `${basePath}components/header.html`),
        loadComponent("sidebar-placeholder", `${basePath}components/sidebar.html`)
    ]);

    setCurrentPage(page);
}

initializePage();

// Dialog behavior
const openDialogButton = document.querySelector("#open-dialog");
const closeDialogButton = document.querySelector("#close-dialog");
const recordDialog = document.querySelector("#record-dialog");

if (openDialogButton && closeDialogButton && recordDialog) {
    openDialogButton.addEventListener("click", () => {
        recordDialog.showModal();
    });

    closeDialogButton.addEventListener("click", () => {
        recordDialog.close();
    });
}
