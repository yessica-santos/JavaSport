const enviar = () => {
    const nameContact = document.getElementById("nameContact");
    const lastNameContact = document.getElementById("lastNameContact");
    const emailContact = document.getElementById("emailContact");
    const countryContact = document.getElementById("countryContact");


    nameContact.value = "";
    lastNameContact.value = "";
    emailContact.value = "";
    countryContact.value = "México";




    Swal.fire({
    title: 'Enviado',
    text: 'Pronto nos pondremos en contacto',
    icon: 'success',
    confirmButtonText: 'Ok'
    })

}
