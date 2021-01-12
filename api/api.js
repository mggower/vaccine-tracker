const URLS = {
  moderna: 'https://data.cdc.gov/resource/b7pe-5nws.json',
  pfizer: 
}

async function request(API, jurisdiction = '') {
  let query;
  if (jurisdiction) query = `?jurisdiction=${jurisdiction}`;
  else query = jurisdiction;

  const response = await fetch(`${API}${query}`);
  const data = await response.json();

  return data;
}

export default { API, request };
