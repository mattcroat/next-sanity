import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import post from './post'
import youtube from './youtube'
import ingredient from './ingredient'
import step from './step'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, blockContent, youtube, ingredient, step]),
})
