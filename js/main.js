
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
