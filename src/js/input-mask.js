import Inputmask from "inputmask";

// ***Phone Mask*** //
const mobileInputRef = document.querySelectorAll('.js-phone_num')


Inputmask({ "mask": "+38 (999) 999 99 99", "placeholder": " " }).mask(mobileInputRef);


