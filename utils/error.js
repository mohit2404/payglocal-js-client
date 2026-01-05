export const InvalidType = (name, type) => {
  throw new TypeError(`${name} should be an ${type}.`);
};

export const NullError = (name) => {
  throw new Error(`Please provide ${name}`);
};

export const EmptyError = (name) => {
  throw new Error(`${name} can not be empty.`);
};
