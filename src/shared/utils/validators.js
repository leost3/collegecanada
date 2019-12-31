const VALIDATOR_TYPE_REQUIRED = "REQUIRED";
const VALIDATOR_TYPE_EMAIL = "EMAIL";

export const VALIDATOR__REQUIRED = () => ({
  type: VALIDATOR_TYPE_REQUIRED
});
export const VALIDATOR__EMAIL = () => ({
  type: VALIDATOR_TYPE_EMAIL
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRED) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
    }
  }

  return isValid;
};
