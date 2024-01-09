'use strict'

ckeckingEmail(emailsForCheck, /^[a-zA-Z][a-zA-Z0-9\-.]+[a-zA-Z0-9]@([a-zA-Z][a-zA-Z0-9\-_]+[a-zA-Z0-9]\.){1,2}[a-z]{2,3}$/)

function ckeckingEmail (arrayOfEmails,regex){
    let isValidEmail;
    for (let item of arrayOfEmails){
        isValidEmail = regex.test(item.trim());
        if (isValidEmail) {
            console.log(`Valid email address:  ${item}`);
        } else {
            console.error(`Invalid email address:  ${item}`);
        }
    }
}




