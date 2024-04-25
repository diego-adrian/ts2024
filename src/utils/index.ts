import { Format } from "../enums";
import { Person } from "../interfaces";

const formatDate = (date: Date): Date | null => {
  if (date < new Date()) {
    return new Date(date);
  }
  return null;
};

const getTypes = (str: Format): Format => {
  return str;
}

const getError = (): void => {
  console.error('Error');
}

const student: Person = {
  name: 'John',
  age: 10
};



export { formatDate, getTypes, getError, student };