Swal.fire({
    title: 'Enter your minecraft username',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
        const mcname = Swal.getPopup().querySelector('#mcname').value;
        const disname = Swal.getPopup().querySelector('#disname').value;
        return fetch(`https://1dab-171-6-245-3.ngrok.io/v1/add/${mcname}/${disname}`)
        .then(response => response.json())
        .catch(error => {
            Swal.fire({title: 'Success!', text: 'You have been added to the server!', type: 'success'})
            .then(() => {
                window.location.reload();
            })
        })
    },
})