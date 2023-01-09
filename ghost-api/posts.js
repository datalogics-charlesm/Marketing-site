import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://ec2-3-142-84-142.us-east-2.compute.amazonaws.com',
  key: 'b87d96e7a079e9cbe16938f969',
  version: 'v5.17.0',
})

export async function getPosts(tag) {
  return await api.posts
    .browse({
      filter: 'tag:' + tag,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.log(tag)
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
