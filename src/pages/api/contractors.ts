import type { APIRoute } from 'astro';
import { contractorDb } from '../../lib/database';

export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = url.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    let contractors;
    
    if (search) {
      contractors = contractorDb.search(search);
    } else if (category) {
      contractors = contractorDb.getByCategory(category);
    } else {
      contractors = contractorDb.getAll();
    }
    
    return new Response(JSON.stringify(contractors), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching contractors:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch contractors' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};