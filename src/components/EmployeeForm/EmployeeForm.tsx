import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import './EmployeeForm.css';

enum CountryEnum {
  Spain = 'Spain',
  Ghana = 'Ghana',
  Brazil = 'Brazil',
}

type EmployeeFormInputs = {
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
    formState: { errors },
    clearErrors,
  } = useForm<EmployeeFormInputs>({
    defaultValues: {
      countryOfWork: CountryEnum.Spain,
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type);
      clearErrors();
    });
    return () => subscription.unsubscribe();
  }, [watch, clearErrors]);

  const onSubmit: SubmitHandler<EmployeeFormInputs> = (data) => {
    console.log(data);
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
        <React.Fragment>
          <label>Holiday Allowance</label>
          <input
            {...register('holidayAllowance', { required: true, min: 30 })}
          />
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
      )}
      {watchCountryOfWork === CountryEnum.Ghana && (
        <React.Fragment>
          <label>Holiday Allowance</label>
          <input {...register('holidayAllowance', { required: true })} />
          {errors.holidayAllowance && <p>Please check the Holiday Allowance</p>}
          <label>Marital Status</label>
          <input {...register('maritalStatus', { required: true })} />
          {errors.maritalStatus && <p>Please check the Marital Status</p>}
          <label>Number Of Children</label>
          <input {...register('numberOfChildren', { required: true })} />
          {errors.numberOfChildren && (
            <p>Please check the Number Of Children</p>
          )}
        </React.Fragment>
      )}
      {watchCountryOfWork === CountryEnum.Brazil && (
        <React.Fragment>
          <label>Holiday Allowance</label>
          <input
            {...register('holidayAllowance', { required: true, max: 40 })}
          />
          {errors.holidayAllowance && (
            <p>Maximum number of Holiday Allowance is 40</p>
          )}
          <label>Working Hours</label>
          <input {...register('workingHours')} />
        </React.Fragment>
      )}
      <input type="submit" />
    </form>
  );
};

export default EmployeeForm;
