export const getVehicles = async (vehicles: string[]): Promise<string[]> => {
  try {
    const vehiclePromises = vehicles.map(async (url): Promise<string> => {
      const response = await fetch(url);

      const vehicle: string = (await response.json()).name;

      return vehicle;
    });

    const vehicleNames = await Promise.all(vehiclePromises);

    return vehicleNames;
  } catch (error) {
    return [];
  }
};
