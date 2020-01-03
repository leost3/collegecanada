const VALIDATOR_TYPE_REQUIRED = "REQUIRED";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_MINLENGTH = "MIN_LENGHT";
const VALIDATOR_TYPE_PASSWORD_CONFIRM = "PASSWORD_CONFIRM";

export const VALIDATOR__MINLENGTH = value => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  value: value
});

export const VALIDATOR__REQUIRED = () => ({
  type: VALIDATOR_TYPE_REQUIRED
});
export const VALIDATOR__EMAIL = () => ({
  type: VALIDATOR_TYPE_EMAIL
});

export const VALIDATOR_PASSWORD_CONFIRM = firstPasswordValue => ({
  type: VALIDATOR_TYPE_PASSWORD_CONFIRM,
  value: firstPasswordValue
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRED) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.value;
    }
    if (validator.type === VALIDATOR_TYPE_PASSWORD_CONFIRM) {
      isValid = isValid && value.trim() === validator.value.value;
    }
  }

  return isValid;
};
