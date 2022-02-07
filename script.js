Swal.fire({
    title: 'Enter your minecraft username',
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        return fetch(`https://1dab-171-6-245-3.ngrok.io/v1/add?name=${login}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .catch(error => {
            Swal.showValidationMessage(
                `Request failed: ${error}`
            )
        })
    }
})