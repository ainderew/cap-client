export const fetchProvincesInPhilippines = async () => {
  try {
    const nominatimApiEndpoint = 'https://nominatim.openstreetmap.org/search?';
    const query = 'q=province+in+philippines&format=json';

    const response = await fetch(`${nominatimApiEndpoint}${query}`);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    const provinces = data.map((result: any) => result.display_name);

    return provinces;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};


// Example usage:

