var gardePointAvreage = Number(prompt("enter your score: "))

switch (gardePointAvreage) {
    case 18:
    case 19:
    case 20:
        alert("سطح شما A")
    break;
    case 15:
    case 16:
    case 17:
        alert("سطح شما B")
    break;
    case 12:
    case 13:
    case 14:
        alert("سطح شما c")
    break;
    default:
        alert("مشروط شدی"); 
}