import db from '$lib/db/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const categories = db.prepare('SELECT name, url FROM categories').all();
    const products = db.prepare(`
        SELECT products.*, categories.name as category_name 
        FROM products 
        JOIN categories ON products.category_id = categories.id
    `).all();

    return {
        categories,
        products
    };
};