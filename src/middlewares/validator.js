const { loginValidation, postValidation } = require("../validators/Validation");
  const { onError } = require("../utils/response");
  
  class Validator {

    static postValidator(req, res, next) {
      const { error } = postValidation(req.body);
      if (error) return onError(res, 400, error.details[0].message);
      next();
    }
    static loginValidator(req, res, next) {
      const { error } = loginValidation(req.body);
      if (error) return onError(res, 400, error.details[0].message);
      next();
    }
  }
  
  module.exports = Validator;
  