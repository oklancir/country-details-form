import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { EmployeeFormInputs } from '../EmployeeForm/EmployeeForm';

type ExtraFieldsSpainErrors = {
  countryOfWork?: FieldError | undefined;
  firstName?: FieldError | undefined;
  lastName?: FieldError | undefined;
  dateOfBirth?: FieldError | undefined;
  holidayAllowance?: FieldError | undefined;
  /* Extra fields */
  // Spain
  maritalStatus?: FieldError | undefined;
  socialInsuranceNumber?: FieldError | undefined;
};

type ExtraFieldsSpainProps = {
  register: UseFormRegister<EmployeeFormInputs>;
  errors: ExtraFieldsSpainErrors;
};

const ExtraFieldsSpain = ({
  register,
  errors,
}: ExtraFieldsSpainProps): JSX.Element => {
  return (
    <React.Fragment>
      <label>Holiday Allowance</label>
      <input {...register('holidayAllowance', { required: true, min: 30 })} />
      {errors.holidayAllowance && (
        <p>Minimum number of Holiday Allowance is 30</p>
      )}
      <label>Marital Status</label>
      <input {...register('maritalStatus', { required: true })} />
      {errors.maritalStatus && <p>Please check the Marital Status</p>}
      <label>Social Insurance Number</label>
      <input {...register('socialInsuranceNumber', { required: true })} />
      {errors.socialInsuranceNumber && (
        <p>Please check the Social Insurance Number</p>
      )}
    </React.Fragment>
  );
};

export default ExtraFieldsSpain;
