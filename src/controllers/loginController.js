const { createToken } = require('../auth/authorisation');
const { loginService } = require('../services');

const isLoginValid = (email, password) => email && password;

module.exports = async (request, response) => {
    try {
        const { email, password } = request.body;
        
        if (!isLoginValid(email, password)) {
            return response.status(400).json({ message: 'Some required fields are missing' });
        }

        const user = await loginService.getLoginData(email, password);

        if (!user) {
            return response.status(400).json({ message: 'Invalid fields' });
        }

        const { password_, ...userWithoutPassword } = user.dataValues;
        const token = createToken(userWithoutPassword);
        
        return response.status(200).json({ token });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
};

// https://github.com/tryber/sd-025-b-live-lectures/blob/lecture/back-end/6.4/src/controllers/login.js