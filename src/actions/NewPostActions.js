export const propertyAddress = (address) => ({
    type: "PROPERTY_ADDRESS",
    address
});

export const propertyInfo = (propertyInfo) => ({
    type: "PROPERTY_INFO",
    propertyInfo
});
export const propertyPayments = (payments) => ({
    type: "PROPERTY_PAYMENTS",
    payments
});
export const propertyMedia = (media) => ({
    type: "PROPERTY_MEDIA",
    media
});
export const propertyContact = (contact) => ({
    type: "PROPERTY_CONTACT",
    contact
});

export const reset = () => ({
    type: "RESET"
});