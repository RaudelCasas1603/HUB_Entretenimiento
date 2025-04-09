<<<<<<< HEAD
// Cargar los datos del usuario desde localStorage
document.addEventListener("DOMContentLoaded", function() {
    const userNameInput = document.getElementById("userName");
    const profileImageOptions = document.querySelectorAll(".profile-option");
    const message = document.getElementById("message");

    // Cargar nombre de usuario y foto de perfil desde localStorage
    const user = JSON.parse(localStorage.getItem("user")) || { name: "", profileImage: "profile1.jpg" };
    userNameInput.value = user.name;
    setProfileImage(user.profileImage);

    // Cambiar imagen de perfil
    profileImageOptions.forEach(option => {
        option.addEventListener("click", () => {
            setProfileImage(option.dataset.img);
        });
    });

    // Función para cambiar la foto de perfil
    function setProfileImage(image) {
        const selectedImage = document.querySelector(`img[data-img="${image}"]`);
        profileImageOptions.forEach(option => option.classList.remove("border", "border-primary"));
        selectedImage.classList.add("border", "border-primary");
    }

    // Guardar los cambios cuando el formulario se envíe
    const form = document.getElementById("configForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUser = {
            name: userNameInput.value,
            profileImage: document.querySelector(".border-primary").dataset.img
        };
        
        // Guardar los cambios en localStorage
        localStorage.setItem("user", JSON.stringify(newUser));

        // Mostrar mensaje de éxito
        message.style.display = "block";
        
        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    });
});
=======
// Cargar los datos del usuario desde localStorage
document.addEventListener("DOMContentLoaded", function() {
    const userNameInput = document.getElementById("userName");
    const profileImageOptions = document.querySelectorAll(".profile-option");
    const message = document.getElementById("message");

    // Cargar nombre de usuario y foto de perfil desde localStorage
    const user = JSON.parse(localStorage.getItem("user")) || { name: "", profileImage: "profile1.jpg" };
    userNameInput.value = user.name;
    setProfileImage(user.profileImage);

    // Cambiar imagen de perfil
    profileImageOptions.forEach(option => {
        option.addEventListener("click", () => {
            setProfileImage(option.dataset.img);
        });
    });

    // Función para cambiar la foto de perfil
    function setProfileImage(image) {
        const selectedImage = document.querySelector(`img[data-img="${image}"]`);
        profileImageOptions.forEach(option => option.classList.remove("border", "border-primary"));
        selectedImage.classList.add("border", "border-primary");
    }

    // Guardar los cambios cuando el formulario se envíe
    const form = document.getElementById("configForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUser = {
            name: userNameInput.value,
            profileImage: document.querySelector(".border-primary").dataset.img
        };
        
        // Guardar los cambios en localStorage
        localStorage.setItem("user", JSON.stringify(newUser));

        // Mostrar mensaje de éxito
        message.style.display = "block";
        
        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    });
});
>>>>>>> 80eea9546c83e5eb585dde776a3a8c2c4262566b
