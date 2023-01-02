
// function the validation email
exports.verificationemail=(email)=>
{
    return email.match(/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/)
}
