import {redirect} from '@sveltejs/kit';

export function load()  {
    redirect(308, 'https://www.marxists.org/archive/marx/works/download/pdf/Manifesto.pdf');
}