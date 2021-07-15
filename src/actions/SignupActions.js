export const changeEmailPassword = (email, password) => ({
    type: "CHANGE_EMAIL_PASSWORD",
    email,
    password
});
export const changeFirstName = (firstName) => ({
    type: "CHANGE_FIRST_NAME",
    firstName
});

export const changeLastName = (lastName) => ({
    type: "CHANGE_LAST_NAME",
    lastName
});

export const changeBirthDate = (birthDate) => ({
    type: "CHANGE_BIRTH_DATE",
    birthDate
});

export const changePhone = (phoneNumber) => ({
    type: "CHANGE_PHONE",
    phoneNumber
});

export const reset = () => ({
    type: "RESET"
});