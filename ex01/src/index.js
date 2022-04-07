var myPet = {
    species: "Labrador",
    name: "Capi",
    legs: 8,
    friends : ["Maja", "Mitja"]
};
function myFunction(myObj) {
    return myObj;

}
   console.log(myFunction(myPet));
   module.exports = { myPet, myFunction };
