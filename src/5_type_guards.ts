/**
 * 5/ Type guards
 */

interface Fish {
  fin: number;
}

interface Cat {
  legs: number;
}

type Animal = Fish | Cat;

const animal1: Animal = {
  legs: 4
};

const animal2: Animal = {
  fin: 2
};

// Type guard function
const isFish = (animal: Fish | Cat): animal is Fish => (<Fish>animal).fin !== undefined;

const logAnimal = (animal: Animal): void => {
  if (isFish(animal)) {
    console.log(`Fish: ${animal.fin}`);
  } else {
    console.log(`Cat: ${animal.legs}`);
  }
};

logAnimal(animal1);
logAnimal(animal2);

// Exemple 2
interface IApiResponse {
  bar: string;
}

const callFooApi = async (): Promise<IApiResponse> => {
  let response = await httpRequest("foo.api/barEndpoint"); 
  if (responseIsValid(response)) {
    return response;
  } else {
    throw Error("Invalid response type!");
  }
};

const httpRequest = (url: string): unknown => {
  return { bar: "data" };
};

const responseIsValid = (response: unknown): response is IApiResponse => {
  return (response as IApiResponse).bar !== undefined && typeof (response as IApiResponse).bar === "string";
};
