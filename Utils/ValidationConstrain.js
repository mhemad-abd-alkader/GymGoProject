import validate from 'validate.js';

export const validateString = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
            message: "can't be blank"
        },
        format: {
            pattern: ".+",
            flags: "i",
            message: "value can't be blank"
        }
    };

    const validationResult = validate({ [id]: value }, { [id]: constraints });
    return validationResult && validationResult[id] ? validationResult[id][0] : null;
};

export const validateEmail = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
            message: "can't be blank"
        },
        email: {
            message: "is not a valid email"
        }
    };

    const validationResult = validate({ [id]: value }, { [id]: constraints });
    return validationResult && validationResult[id] ? validationResult[id][0] : null;
};

export const validatePassword = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
            message: "can't be blank"
        },
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    };

    const validationResult = validate({ [id]: value }, { [id]: constraints });
    return validationResult && validationResult[id] ? validationResult[id][0] : null;
};
