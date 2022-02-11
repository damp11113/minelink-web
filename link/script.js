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
        const disid = Swal.getPopup().querySelector('#disid').value;
        return fetch(`https://4463-171-6-239-150.ngrok.io/v1/add/${mcname}/${disid}`)
        .then(response => response.json())
        .catch(error => {
            Swal.fire({
                title: 'Step 1 success',
                text: 'step 2: goto earthy-bikes.auto.playit.gg to verify your minecraft name',
                icon: 'success'
            })
        })
    },
})