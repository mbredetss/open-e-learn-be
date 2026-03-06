import response from "../../../utils/response.js";
import RegistrationRepositories from "../repositories/registration-repositories.js";

const createUser = async (req, res, next) => {
    const { username, email, phone, password } = req.validate;

    try {
        const result = await RegistrationRepositories.createUser(username, email, phone, password)

        if (result) return response(res, 201, 'User registered successfully', null);
    } catch (e) {
        if (e.code === '23505') return response(res, 409, 'Username has been used by another user', null);
        else next(e);
    }
}

export default createUser;