class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shashwat`
    }

    set password(value){
        this._password = value
    }
}

const shashwat = new User("s@shashwat.ai", "abc")
console.log(shashwat.email);