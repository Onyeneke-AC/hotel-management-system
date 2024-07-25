const API_URL = "http://127.0.0.1:3000/api/v1";

export async function getDashboardSummary(startDate, endDate) {
  try {
    const res = await fetch(
      `${API_URL}/bookings/search/getSummary?start=${new Date(
        startDate
      ).toISOString()}&end=${new Date(endDate).toISOString()}`
    );
    // const res = await fetch(`${API_URL}/bookings/search/getSummary`);

    if (!res.ok) {
      throw Error("Error loading the data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
