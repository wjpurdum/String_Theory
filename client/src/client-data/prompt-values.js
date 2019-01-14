const promptValues = [{
  prompt: "Classic bluegrass string music, or more rhythmic folk tunes?",
  valueOne: {
    checked: true,
    label: "Bluegrass",
    value: "bluegrass"
  },
  valueTwo: {
    checked: false,
    label: "Folk",
    value: "folk"
  }
}, {
  prompt: "Something modern or stick to the classics?",
  valueOne: {
    checked: true,
    label: "Modern",
    value: "modern"
  },
  valueTwo: {
    checked: false,
    label: "Classic",
    value: "classic"
  }
}, {
  prompt: "Do you prefer female singer-songwriters?",
  valueOne: {
    checked: true,
    label: "Yes, girls only, please",
    value: "female"
  },
  valueTwo: {
    checked: false,
    label: "No preference",
    value: "noPreference"
  }
}]
export default promptValues;
