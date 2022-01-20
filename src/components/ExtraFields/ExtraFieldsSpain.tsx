import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { EmployeeFormInputs } from '../models';
import {
  Input,
  Label,
  Paragraph,
} from '../EmployeeFormElements/EmployeeFormElements';

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
      <Label>Holiday Allowance</Label>
      <Input
        aria-label="holiday allowance"
        {...register('holidayAllowance', { required: true, min: 30 })}
      />
      {errors.holidayAllowance && (
        <Paragraph aria-label="error holiday allowance 30">
          Minimum number of Holiday Allowance is 30
        </Paragraph>
      )}
      <Label>Marital Status</Label>
      <Input
        aria-label="marital status"
        {...register('maritalStatus', { required: true })}
      />
      {errors.maritalStatus && (
        <Paragraph aria-label="error marital status">
          Please check the Marital Status
        </Paragraph>
      )}
      <Label>Social Insurance Number</Label>
      <Input
        aria-label="social insurance number"
        {...register('socialInsuranceNumber', { required: true })}
      />
      {errors.socialInsuranceNumber && (
        <Paragraph aria-label="error social insurance number">
          Please check the Social Insurance Number
        </Paragraph>
      )}
    </React.Fragment>
  );
};

export default ExtraFieldsSpain;
