import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://ec2-3-142-84-142.us-east-2.compute.amazonaws.com',
  key: 'b87d96e7a079e9cbe16938f969',
  version: 'v5.17.0',
})

/** NOTE endpoints
 * LINK https://ghost.org/docs/content-api/javascript/#endpoints
 *
 * Here you can define a new endpoint you'd like to hit, you can see the link above for the full list
 *
 * @async
 * @function
 * @param {string} tag - The tag to filter the posts by
 * @returns {Promise<object>} - The response from the API containing the filtered posts
 * @throws {Error} - if there is an error with the API request
 */

export async function getPosts(tag, limit) {
  return await api.posts
    .browse({
      filter: 'tag:' + tag,
      limit: limit ? limit : 15,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.log(tag)
      console.error(err)
    })
}

/**
 * @asyn
 * @function
 * @returns {Promise<object>} - The response from the Ghost Content API containing the page
 * @throws {Error} - if there is an error with the API request
 */
export async function getPages() {
  return await api.pages
    .browse({
      limit: 10,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err)
    })
}

/**
 * @async
 * @function
 * @returns {Promise<object>} - The response from the Ghost Content API containing the page
 * @throws {Error} - if there is an error with the API request
 */
export async function getPageBySlug(slug) {
  return await api.pages.read({ slug: slug }).catch((err) => {
    console.error(err)
  })
}

export async function getPostsPaginate(tags, pageNum, numPosts) {
  let tagList = ''
  for (var i = 0; i < tags.length; i++) {
    tagList += 'tag:' + tags[i]
    if (i + 1 != tags.length) tagList += '+'
  }

  return await api.posts
    .browse({
      filter: tagList,
      limit: numPosts,
      page: pageNum,
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getPostsMultiTag(tags) {
  let tagList = ''
  for (var i = 0; i < tags.length; i++) {
    tagList += 'tag:' + tags[i]
    if (i + 1 != tags.length) tagList += '+'
  }

  return await api.posts
    .browse({
      filter: tagList,
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getPostsBySlug(slug) {
  return await api.posts
    .browse({
      filter: 'slug:' + slug,
      include: 'tags',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getInternalTags() {
  return await api.tags
    .browse({
      filter: 'visibility: internal',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}
