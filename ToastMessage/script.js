function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // auto remove toast
        const autoRemoveToastId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // remove toast when click
        toast.onclick = function (e) {
            console.log(e.target);
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveToastId);
            }
        };
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warining: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        };
        toast.classList.add('toast', `toast--${type}`);

        const delay = (duration / 1000).toFixed(2);

        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                            <div class="toast__icon">
                                <i class="${icons[type]}"></i>
                            </div>
                            <div class="toast__body">
                                <h3 class="toast__title">${title}</h3>
                                <p class="toast__msg">
                                    ${message}
                                </p>
                            </div>
                            <div class="toast__close">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
        `;

        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Test massasage ',
        type: 'success',
        duration: 3000,
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Error  massasage ',
        type: 'error',
        duration: 3000,
    });
}
