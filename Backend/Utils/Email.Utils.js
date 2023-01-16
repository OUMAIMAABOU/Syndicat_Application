
// function the validation email
exports.verificationEmail=(email)=>
{
    return email.match(/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/)
}
exports.verificationTelephone =( tele )=>
{
    const reg = new RegExp('^0[67][0-9]{8}$');
    return reg.test(tele);
}
exports.verificationCIN =( cin )=>
{
    const reg = new RegExp('^[A-Z]{1,2}[0-9]{4,7}$');
    return reg.test(cin);
}
