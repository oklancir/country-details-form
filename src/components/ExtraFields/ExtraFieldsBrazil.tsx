import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { EmployeeFormInputs } from '../EmployeeForm/EmployeeForm';

type ExtraFieldsBrazilErrors = {
  countryOfWork?: FieldError | undefined;
  firstName?: FieldError | undefined;
  lastName?: FieldError | undefined;
  dateOfBirth?: FieldError | undefined;
  holidayAllowance?: FieldError | undefined;
  /* Extra fields */
  // Brazil
  workingHours?: FieldError | undefined;
};

type ExtraFieldsGhanaProps = {
  register: UseFormRegister<EmployeeFormInputs>;
  errors: ExtraFieldsBrazilErrors;
};

const ExtraFieldsBrazil = ({
  register,
  errors,
}: ExtraFieldsGhanaProps): JSX.Element => {
  return (
    <React.Fragment>
      <label>Holiday Allowance</label>
      <input
        aria-label="holiday allowance"
        {...register('holidayAllowance', { required: true, max: 40 })}
      />
      {errors.holidayAllowance && (
        <p aria-label="error holiday allowance 40">
          Maximum number of Holiday Allowance is 40
        </p>
      )}
      <label>Working Hours</label>
      <input aria-label="working hours" {...register('workingHours')} />
      {errors.workingHours && (
        <p aria-label="error working hours">Please check Working Hours</p>
      )}
    </React.Fragment>
  );
};

export default ExtraFieldsBrazil;
