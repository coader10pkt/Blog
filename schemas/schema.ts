import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog';
import profile from './profile';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, profile],
}
