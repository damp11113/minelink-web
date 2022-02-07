Swal.fire({
    title: 'Enter your minecraft username',
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: false,

    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        return fetch(`https://1dab-171-6-245-3.ngrok.io/v1/add/${login}`)
            .catch(response => {
                Swal.fire({
                    title: 'Success!',
                    text: 'You have been added to the bot!',
                    icon: 'success',
                }
            )
            .then(() => {
                window.location.reload();
            }
        })
    },
})