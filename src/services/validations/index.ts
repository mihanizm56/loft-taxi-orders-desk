type TestFormValues = {
  firstName?: string;
  lastName?: string;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
};

type FormErrorsReturn = {
  isValidFormValues: boolean;
  errors: FormErrors;
};

export const validateFormValues = ({
  firstName,
  lastName,
}: TestFormValues): FormErrorsReturn => {
  const errors: FormErrors = {};
  let isValidFormValues = true;

  if (firstName === 'test') {
    errors.firstName = 'test error firstName';
  }

  if (lastName === 'test') {
    errors.lastName = 'test error lastName';
  }

  if (Object.keys(errors).length) {
    isValidFormValues = false;
  }

  return { isValidFormValues, errors };
};
