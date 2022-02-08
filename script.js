Swal.fire({
    title: 'Enter your minecraft username',
    html: '<input type="text" id="mcname" class="swal2-input" placeholder="Minecraft name"><input type="text" id="disid" class="swal2-input" placeholder="Discord ID">',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
        const mcname = Swal.getPopup().querySelector('#mcname').value;
        const disname = Swal.getPopup().querySelector('#disid').value;
        return fetch(`https://019d-171-6-245-116.ngrok.io/v1/add/${mcname}/${disid}`)
        .then(response => response.json())
        .catch(error => {
            Swal.fire({title: 'Success!', text: 'You have been added to the server!', type: 'success'})
            .then(() => {
                window.location.reload();
            })
        })
    },
})