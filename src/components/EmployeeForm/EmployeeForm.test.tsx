import React from 'react';
import EmployeeForm from './EmployeeForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('country of work label renders with correct text', () => {
  render(<EmployeeForm />);
  expect(screen.getByText('Country Of Work')).toBeInTheDocument();
});

enum FieldLabels {
  countryOfWork = 'country of work',
  firstName = 'first name',
  lastName = 'last name',
  dateOfBirth = 'date of birth',
  holidayAllowance = 'holiday allowance',
  maritalStatus = 'marital status',
  socialInsuranceNumber = 'social insurance number',
  numberOfChildren = 'number of children',
  workingHours = 'working hours',
  submitEmployeeForm = 'submit employee form',
}

test('Country of Work label and input renders correctly', () => {
  const countryOfWork = 'Country Of Work';

  render(<EmployeeForm />);

  expect(screen.getByText(countryOfWork)).toBeInTheDocument();
  expect(screen.getByLabelText(FieldLabels.countryOfWork)).toBeInTheDocument();
});

test('First Name label and input renders correctly', () => {
  const firstName = 'First Name';

  render(<EmployeeForm />);

  expect(screen.getByText(firstName)).toBeInTheDocument();
  expect(screen.getByLabelText(FieldLabels.firstName)).toBeInTheDocument();
});

test('Last Name label and input renders correctly', () => {
  const lastName = 'Last Name';

  render(<EmployeeForm />);

  expect(screen.getByText(lastName)).toBeInTheDocument();
  expect(screen.getByLabelText(FieldLabels.lastName)).toBeInTheDocument();
});

test('Date Of Birth label and input renders correctly', () => {
  const dateOfBirth = 'Last Name';

  render(<EmployeeForm />);

  expect(screen.getByText(dateOfBirth)).toBeInTheDocument();
  expect(screen.getByLabelText(FieldLabels.dateOfBirth)).toBeInTheDocument();
});

test('selecting Spain renders correct extra fields', () => {
  const countryOfWork = 'Spain';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );

  expect(
    screen.getByLabelText(FieldLabels.holidayAllowance)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.maritalStatus)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.socialInsuranceNumber)
  ).toBeEmptyDOMElement();
});

test('selecting Ghana renders correct extra fields', () => {
  const countryOfWork = 'Ghana';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );

  expect(
    screen.getByLabelText(FieldLabels.holidayAllowance)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.maritalStatus)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.numberOfChildren)
  ).toBeEmptyDOMElement();
});

test('selecting Brazil renders correct extra fields', () => {
  const countryOfWork = 'Brazil';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );

  expect(
    screen.getByLabelText(FieldLabels.holidayAllowance)
  ).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.workingHours)).toBeEmptyDOMElement();
});

test('submits employee form with extra fields for Spain', () => {
  const countryOfWork = 'Spain';
  const firstName = 'Ozren';
  const lastName = 'Klančir';
  const dateOfBirth = '1988-03-11';
  const holidayAllowance = '30';
  const maritalStatus = 'unmarried';
  const socialInsuranceNumber = '12345678901';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );
  userEvent.type(screen.getByLabelText(FieldLabels.firstName), firstName);
  userEvent.type(screen.getByLabelText(FieldLabels.lastName), lastName);
  userEvent.type(screen.getByLabelText(FieldLabels.dateOfBirth), dateOfBirth);
  userEvent.type(
    screen.getByLabelText(FieldLabels.holidayAllowance),
    holidayAllowance
  );
  userEvent.type(
    screen.getByLabelText(FieldLabels.maritalStatus),
    maritalStatus
  );
  userEvent.type(
    screen.getByLabelText(FieldLabels.socialInsuranceNumber),
    socialInsuranceNumber
  );

  userEvent.click(screen.getByLabelText(FieldLabels.submitEmployeeForm));

  expect(screen.getByLabelText(FieldLabels.firstName)).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.lastName)).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.dateOfBirth)).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.holidayAllowance)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.maritalStatus)
  ).toBeEmptyDOMElement();
});

test('submits employee form with extra fields for Ghana', () => {
  const countryOfWork = 'Ghana';
  const firstName = 'Ozren';
  const lastName = 'Klančir';
  const dateOfBirth = '1988-03-11';
  const holidayAllowance = '30';
  const maritalStatus = 'unmarried';
  const numberOfChildren = '2';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );
  userEvent.type(screen.getByLabelText(FieldLabels.firstName), firstName);
  userEvent.type(screen.getByLabelText(FieldLabels.lastName), lastName);
  userEvent.type(screen.getByLabelText(FieldLabels.dateOfBirth), dateOfBirth);
  userEvent.type(
    screen.getByLabelText(FieldLabels.holidayAllowance),
    holidayAllowance
  );
  userEvent.type(
    screen.getByLabelText(FieldLabels.maritalStatus),
    maritalStatus
  );
  userEvent.type(
    screen.getByLabelText(FieldLabels.numberOfChildren),
    numberOfChildren
  );

  userEvent.click(screen.getByLabelText(FieldLabels.numberOfChildren));

  expect(screen.getByLabelText(FieldLabels.firstName)).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.lastName)).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.dateOfBirth)).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.holidayAllowance)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.maritalStatus)
  ).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.numberOfChildren)
  ).toBeEmptyDOMElement();
});

test('submits employee form with extra fields for Brazil', () => {
  const countryOfWork = 'Brazil';
  const firstName = 'Ozren';
  const lastName = 'Klančir';
  const dateOfBirth = '1988-03-11';
  const holidayAllowance = '30';
  const workingHours = '10-18';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );
  userEvent.type(screen.getByLabelText(FieldLabels.firstName), firstName);
  userEvent.type(screen.getByLabelText(FieldLabels.lastName), lastName);
  userEvent.type(screen.getByLabelText(FieldLabels.dateOfBirth), dateOfBirth);
  userEvent.type(
    screen.getByLabelText(FieldLabels.holidayAllowance),
    holidayAllowance
  );
  userEvent.type(screen.getByLabelText(FieldLabels.workingHours), workingHours);

  userEvent.click(screen.getByLabelText(FieldLabels.submitEmployeeForm));

  expect(screen.getByLabelText(FieldLabels.firstName)).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.lastName)).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.dateOfBirth)).toBeEmptyDOMElement();
  expect(
    screen.getByLabelText(FieldLabels.holidayAllowance)
  ).toBeEmptyDOMElement();
  expect(screen.getByLabelText(FieldLabels.workingHours)).toBeEmptyDOMElement();
});

test('show error for more than 40 holiday days for Brazil', async () => {
  const countryOfWork = 'Brazil';
  const holidayAllowance = '41';
  const errorMessage = 'Maximum number of Holiday Allowance is 40';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );
  userEvent.type(
    screen.getByLabelText(FieldLabels.holidayAllowance),
    holidayAllowance
  );

  userEvent.click(screen.getByLabelText(FieldLabels.submitEmployeeForm));

  await waitFor(() => {
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});

test('show error for less than 30 holiday days for Spain', async () => {
  const countryOfWork = 'Spain';
  const holidayAllowance = '29';
  const errorMessage = 'Minimum number of Holiday Allowance is 30';

  render(<EmployeeForm />);

  userEvent.selectOptions(
    screen.getByLabelText(FieldLabels.countryOfWork),
    countryOfWork
  );
  userEvent.type(
    screen.getByLabelText(FieldLabels.holidayAllowance),
    holidayAllowance
  );

  userEvent.click(screen.getByLabelText(FieldLabels.submitEmployeeForm));

  await waitFor(() => {
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});

test('show error messages for empty fields', async () => {
  render(<EmployeeForm />);
  const errorBase = 'Please check the ';

  userEvent.click(screen.getByLabelText(FieldLabels.submitEmployeeForm));

  await waitFor(() => {
    expect(screen.getByText(errorBase + 'First Name')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText(errorBase + 'Last Name')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText(errorBase + 'Date Of Birth')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText(errorBase + 'First Name')).toBeInTheDocument();
  });
});
