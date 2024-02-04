const toastTrigger = document.getElementById('toast_live_btn')
const toastLiveExample = document.getElementById('toast_live')
if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}