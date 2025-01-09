import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:'production',
  apiVersion:process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: string) => {
  return builder.image(source)
}