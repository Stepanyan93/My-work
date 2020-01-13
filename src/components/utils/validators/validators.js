export const required = (value) => {
    if (value) return undefined;
    return "Field is required"
};
export const MaxLengthCreator = (MaxLength) => (value) => {
  if ( value.length > MaxLength) return `Max Length is ${MaxLength} symbol`;
    return undefined;
};