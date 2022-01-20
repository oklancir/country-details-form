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
