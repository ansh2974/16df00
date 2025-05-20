export const fetchForms = async () => {
  const response = await fetch('http://localhost:3000/api/v1/test/actions/blueprints/test/graph');
  if (!response.ok) {
    throw new Error('Failed to fetch forms');
  }
  return response.json();
};
