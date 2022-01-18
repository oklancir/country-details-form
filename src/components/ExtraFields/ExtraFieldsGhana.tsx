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
  maritalStatus?: FieldError | undefined;
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
      <input {...register('holidayAllowance', { required: true })} />
      {errors.holidayAllowance && <p>Please check the Holiday Allowance</p>}
      <label>Marital Status</label>
      <input {...register('maritalStatus', { required: true })} />
      {errors.maritalStatus && <p>Please check the Marital Status</p>}
      <label>Number Of Children</label>
      <input {...register('numberOfChildren', { required: true })} />
      {errors.numberOfChildren && <p>Please check the Number Of Children</p>}
    </React.Fragment>
  );
};

export default ExtraFieldsGhana;
