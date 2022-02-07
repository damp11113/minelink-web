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
        .then(response => response.json())
        .catch(error => {
            Swal.fire({title: 'Success!', text: 'You have been added to the server!', type: 'success'})
        })
    },
})