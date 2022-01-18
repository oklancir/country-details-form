import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ExtraFieldsBrazil from '../ExtraFields/ExtraFieldsBrazil';
import ExtraFieldsGhana from '../ExtraFields/ExtraFieldsGhana';
import ExtraFieldsSpain from '../ExtraFields/ExtraFieldsSpain';

import './EmployeeForm.css';

enum CountryEnum {
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
      console.log(value, name, type);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<EmployeeFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  const watchCountryOfWork = watch('countryOfWork');

  return (
    <form className="EmployeeForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Country Selection</label>
      <select {...register('countryOfWork', { required: true })}>
        <option value="Spain">Spain</option>
        <option value="Ghana">Ghana</option>
        <option value="Brazil">Brazil</option>
      </select>
      <label>First Name</label>
      <input {...register('firstName', { required: true })} />
      {errors.firstName && <p>Please check the First Name</p>}
      <label>Last Name</label>
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Please check the Last Name</p>}
      <label>Date Of Birth</label>
      <input {...register('dateOfBirth', { required: true })} />
      {errors.dateOfBirth && <p>Please check the Date Of Birth</p>}

      {watchCountryOfWork === CountryEnum.Spain && (
        <ExtraFieldsSpain register={register} errors={errors} />
      )}
      {watchCountryOfWork === CountryEnum.Ghana && (
        <ExtraFieldsGhana register={register} errors={errors} />
      )}
      {watchCountryOfWork === CountryEnum.Brazil && (
        <ExtraFieldsBrazil register={register} errors={errors} />
      )}
      <input type="submit" />
    </form>
  );
};

export default EmployeeForm;
