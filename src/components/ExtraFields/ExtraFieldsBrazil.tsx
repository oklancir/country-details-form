import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { EmployeeFormInputs } from '../EmployeeForm/EmployeeForm';
import {
  Input,
  Label,
  Paragraph,
} from '../EmployeeFormElements/EmployeeFormElements';

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
      <Label>Holiday Allowance</Label>
      <Input
        aria-label="holiday allowance"
        {...register('holidayAllowance', { required: true, max: 40 })}
      />
      {errors.holidayAllowance && (
        <Paragraph aria-label="error holiday allowance 40">
          Maximum number of Holiday Allowance is 40
        </Paragraph>
      )}
      <Label>Working Hours</Label>
      <Input aria-label="working hours" {...register('workingHours')} />
      {errors.workingHours && (
        <Paragraph aria-label="error working hours">
          Please check Working Hours
        </Paragraph>
      )}
    </React.Fragment>
  );
};

export default ExtraFieldsBrazil;
