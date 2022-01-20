import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { EmployeeFormInputs } from '../models';
import {
  Input,
  Label,
  Paragraph,
} from '../EmployeeFormElements/EmployeeFormElements';

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
      <Label>Holiday Allowance</Label>
      <Input
        aria-label="holiday allowance"
        {...register('holidayAllowance', { required: true })}
      />
      {errors.holidayAllowance && (
        <Paragraph aria-label="error holiday allowance">
          Please check the Holiday Allowance
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
      <Label>Number Of Children</Label>
      <Input
        aria-label="number of children"
        {...register('numberOfChildren', { required: true })}
      />
      {errors.numberOfChildren && (
        <Paragraph aria-label="error number of children">
          Please check the Number Of Children
        </Paragraph>
      )}
    </React.Fragment>
  );
};

export default ExtraFieldsGhana;
