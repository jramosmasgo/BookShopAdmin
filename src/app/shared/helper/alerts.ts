import Swal from 'sweetalert2'

export class Alerts {

    Toast: any = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    ShowSucces(message: string): void {
        this.Toast.fire({
            icon: 'success',
            title: message
        })
    }

    ShowError(message: string): void {
        this.Toast.fire({
            icon: 'error',
            title: message
        })
    }

    ShowWarning(message: string): void {
        this.Toast.fire({
            icon: 'warning',
            title: message
        })
    }

}