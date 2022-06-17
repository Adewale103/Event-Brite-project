let userInput ={
    firstName: "jonathan",
    lastName: "keys",
    getFullName: function (){
        return this.firstName + " " + this.lastName
    },
    createUserName : function(){
        console.log("@" +
        this.firstName.charAt()
        + this.lastName.charAt(this.lastName.length -1))
    }


}
console.log(userInput.getFullName())