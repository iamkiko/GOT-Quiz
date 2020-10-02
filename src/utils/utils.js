// Helper function file for logic and calculations

// Add the key of selected false so we can track which answer has been selected
export const markSelected = (arr) =>
  arr.map((obj) => ({ ...obj, selected: false }));

// Check if both arrays are equal regardless of order; for use in multiple answers
export const isEqual = (a, b) => {
  if (a.length !== b.length) return false;
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length;
    const bCount = b.filter((e) => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
};
