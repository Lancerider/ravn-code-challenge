export const getPlanet = async (homeworldUrl: string): Promise<string> => {
  try {
    const response = await fetch(homeworldUrl);
    const homeName: string = (await response.json()).name;

    return homeName;
  } catch (error) {
    return '';
  }
};
