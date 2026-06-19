import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import { table } from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'weareiw',

  projectId: "m1wqxfc4",
  dataset: "production",

  plugins: [structureTool(), visionTool(), media(), table()],

  schema: {
    types: schemaTypes,
  },
})
