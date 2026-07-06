export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "var(--bfc--util-color-4)",
  }),
  option: (provided: any) => ({
    ...provided,
    color: "var(--bfc--util-color-4)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};