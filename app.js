const userName = document.querySelector(".A");
const Password = document.querySelector(".B");
const submit = document.querySelector("#second");

//on mouseover changing the defult vluae to none userName

userName.addEventListener("mouseover", () => {
    const userName = document.querySelector(".A");
    if (userName.value === "username") {
        userName.value = "";
    }
});

//on mouseover changing the defult vluae to none Password

Password.addEventListener("mouseover", () => {
    const Password = document.querySelector(".B");
    if (Password.value == "password") {
        Password.value = "";
    }
});

//do these stuff on click
submit.addEventListener("click", () => {
    const userName = document.querySelector(".A").value;
    const Password = document.querySelector(".B").value;

    //without special characters and white spaces
    const trimUserName = userName.replace(/[^a-zA-Z0-9-,]/g, "").trim();
    const trimPassword = Password.replace(/[^a-zA-Z0-9-,]/g, "").trim();

    // if value of username is less than 6 then do that...
    if (trimUserName.length < 6 || trimPassword.length < 6) {
        alert(
            `This username (${trimUserName.length} amout of signs ) or password (${trimPassword.length} amout of signs ) has less than 6 signs`,
        );
        // if value of password is less than 6 then do that...
    } else if (trimUserName.length > 20 || trimPassword.length > 20) {
        alert(
            `This username (${trimUserName.length} amout of signs ) or password (${trimPassword.length} amout of signs ) has more than 20 signs`,
        );
    }
});