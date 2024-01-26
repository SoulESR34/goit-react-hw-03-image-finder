const baseURL = 'https://pixabay.com/api/';

export const Photos = async (search, page) => {

  const params = new URLSearchParams({
    key: '40877193-2f3f91e469707163be2cd03eb',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: search,
    page: page
  });

  try {                     
    const res = await fetch(`${baseURL}?${params.toString()}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error:', error)
    return [];
  }
};
