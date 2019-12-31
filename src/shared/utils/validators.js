const VALIDATOR_TYPE_REQUIRED = "REQUIRED";

export const VALIDATOR__REQUIRED = () => ({
  type: VALIDATOR_TYPE_REQUIRED
});

export const validate = (value, validators) => {
  console.log(validators)
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRED) {
      isValid = isValid && value.trim().length > 0;
    }
  }

  return isValid;
};
