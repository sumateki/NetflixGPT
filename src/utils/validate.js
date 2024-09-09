//if validation fails gives error message

export const checkValidData = (email, password) =>{
    
    // const isNameValid = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    // if(!isNameValid) return "Name is not valid"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"

    //if both email and password are valid, return null
    return null;
}