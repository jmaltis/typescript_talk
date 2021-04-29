/**
 * 7/ Utility types
 */

// Record
enum ErrorType {
  PRESCRITPION = "prescription",
  DISPENSE = "dispense"
}

const count: {[key: string]: number} = {
  prescription: 12,
  dispense: 12,
};

const count2: Record<ErrorType, number> = {
  prescription: 12,
  dispense: 12
};

// Partial
interface Alert {
  id: number;
  content: string;
  description?: string;
}

let alert1: Alert = {
  id: 1,
  content: "content",
  description: "description"
};

const updateAlert = (partialAlert: Partial<Alert>): void => {
  alert1 = {
    ...alert1,
    ...partialAlert
  };
};

updateAlert({
  description: "new description"
});
console.log(alert1);

// Required
const updateAlertComplete = (completeAlert: Required<Alert>): void => {
  alert1 = {
    ...alert1,
    ...completeAlert
  };
};

updateAlertComplete({
  id: 1,
  content: "new content",
  description: "new description"
});
console.log(alert1);

// Pick and Omit
type SensitiveAlertProps = Pick<Alert, "id" | "content">;
type NonSensitiveAlertProps = Omit<Alert, "id" | "content">;

const updateSensitiveProps = (props: SensitiveAlertProps): void => {};
const updateNonSensitiveProps = (props: NonSensitiveAlertProps): void => {};

updateSensitiveProps({ id: 2, content: "new content" });
updateNonSensitiveProps({ description: "new description" });
