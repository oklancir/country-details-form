import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { EmployeeFormInputs } from '../EmployeeForm/EmployeeForm';

type ExtraFieldsGhanaErrors = {
  countryOfWork?: FieldError | undefined;
  firstName?: FieldError | undefined;
  lastName?: FieldError | undefined;
  dateOfBirth?: FieldError | undefined;
  holidayAllowance?: FieldError | undefined;
  /* Extra fields */
  // Ghana
  numberOfChildren?: FieldError | undefined;
};

type ExtraFieldsGhanaProps = {
  register: UseFormRegister<EmployeeFormInputs>;
  errors: ExtraFieldsGhanaErrors;
};

const ExtraFieldsGhana = ({
  register,
  errors,
}: ExtraFieldsGhanaProps): JSX.Element => {
  return (
    <React.Fragment>
      <label>Holiday Allowance</label>
      <input {...register('holidayAllowance', { required: true, min: 0 })} />
      {errors.holidayAllowance && <p>Please check the Holiday Allowance</p>}
      <label>Number Of Children</label>
      <input {...register('numberOfChildren', { required: true })} />
      {errors.numberOfChildren && <p>Please check the Number Of Children</p>}
    </React.Fragment>
  );
};

export default ExtraFieldsGhana;
