import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ExtraFieldsBrazil from '../ExtraFields/ExtraFieldsBrazil';
import ExtraFieldsGhana from '../ExtraFields/ExtraFieldsGhana';
import ExtraFieldsSpain from '../ExtraFields/ExtraFieldsSpain';
import { assertUnreachable } from '../../utils';

import {
  Form,
  Input,
  Label,
  Paragraph,
  Select,
} from '../EmployeeFormElements/EmployeeFormElements';

export enum CountryEnum {
  Spain = 'Spain',
  Ghana = 'Ghana',
  Brazil = 'Brazil',
}

export type EmployeeFormInputs = {
  countryOfWork: CountryEnum;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  holidayAllowance: number;
  /* Extra fields */
  // Spain
  maritalStatus: string;
  socialInsuranceNumber: number;
  // Ghana
  numberOfChildren: number;
  // Brazil
  workingHours: string;
};

const EmployeeForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormInputs>({
    defaultValues: {
      countryOfWork: CountryEnum.Spain,
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      // console.log(value, name, type);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<EmployeeFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  const watchCountryOfWork = watch('countryOfWork');

  const renderExtraFields = (countryOfWork: CountryEnum) => {
    switch (countryOfWork) {
      case CountryEnum.Spain:
        return <ExtraFieldsSpain register={register} errors={errors} />;
      case CountryEnum.Ghana:
        return <ExtraFieldsGhana register={register} errors={errors} />;
      case CountryEnum.Brazil:
        return <ExtraFieldsBrazil register={register} errors={errors} />;
      default:
        assertUnreachable(countryOfWork);
    }
  };

  return (
    <Form className="EmployeeForm" onSubmit={handleSubmit(onSubmit)}>
      <Label>Country Of Work</Label>
      <Select
        aria-label="country of work"
        {...register('countryOfWork', { required: true })}
      >
        <option value="Spain">Spain</option>
        <option value="Ghana">Ghana</option>
        <option value="Brazil">Brazil</option>
      </Select>
      <Label>First Name</Label>
      <Input
        aria-label="first name"
        {...register('firstName', { required: true })}
      />
      {errors.firstName && <Paragraph>Please check the First Name</Paragraph>}
      <Label>Last Name</Label>
      <Input
        aria-label="last name"
        {...register('lastName', { required: true })}
      />
      {errors.lastName && <Paragraph>Please check the Last Name</Paragraph>}
      <Label>Date Of Birth</Label>
      <Input
        aria-label="date of birth"
        type="date"
        {...register('dateOfBirth', { required: true })}
      />
      {errors.dateOfBirth && (
        <Paragraph>Please check the Date Of Birth</Paragraph>
      )}
      {renderExtraFields(watchCountryOfWork)}
      <Input aria-label="submit employee form" type="submit" />
    </Form>
  );
};

export default EmployeeForm;
