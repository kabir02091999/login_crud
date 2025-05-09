import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        /* required_error: 'Title is required',
        invalid_type_error: 'Title must be a string', */
    }).min(1, {message: 'Title is required'}),
    description: z.string().min(1, {message: 'Description is required'}),
    date: z.string().optional(),

})