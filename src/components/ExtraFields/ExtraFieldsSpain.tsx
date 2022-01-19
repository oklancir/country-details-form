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
      <input
        aria-label="holiday allowance"
        {...register('holidayAllowance', { required: true, min: 30 })}
      />
      {errors.holidayAllowance && (
        <p aria-label="error holiday allowance 30">
          Minimum number of Holiday Allowance is 30
        </p>
      )}
      <label>Marital Status</label>
      <input
        aria-label="marital status"
        {...register('maritalStatus', { required: true })}
      />
      {errors.maritalStatus && (
        <p aria-label="error marital status">Please check the Marital Status</p>
      )}
      <label>Social Insurance Number</label>
      <input
        aria-label="social insurance number"
        {...register('socialInsuranceNumber', { required: true })}
      />
      {errors.socialInsuranceNumber && (
        <p aria-label="error social insurance number">
          Please check the Social Insurance Number
        </p>
      )}
    </React.Fragment>
  );
};

export default ExtraFieldsSpain;
