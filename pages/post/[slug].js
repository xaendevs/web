import { format } from 'date-fns'
import glcms from 'github-like-cms'
import hljs from 'highlight.js'
import BlogLayout from 'layouts/blog_layout'
import md from 'markdown-it'
import Head from 'next/head'

const Post = ({ slug, post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          property="og:image"
          content={`https://xauendevs.vercel.app/img/posts/${post.image}`}
        />
        <meta property="og:description" content={`${post.description}`} />

        <title>XauenDevs 🫒 {post.title}</title>
        <meta name="description" content={`${post.description}`} />

        <meta
          property="og:url"
          content={`https://xauendevs.vercel.app/post/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`XauenDevs 🫒 ${post.title}`} />
        <meta property="og:description" content={`${post.description}`} />
        <meta
          property="og:image"
          content={`https://xauendevs.vercel.app/img/posts/${post.image}`}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
          key={'twitter:card'}
        />
        <meta property="twitter:domain" content="xauendevs.vercel.app" />
        <meta
          property="twitter:url"
          content={`https://xauendevs.vercel.app/post/${slug}`}
        />
        <meta name="twitter:title" content={`XauenDevs 🫒 ${post.title}`} />
        <meta name="twitter:description" content={`${post.desription}`} />
        <meta
          name="twitter:image"
          content={`https://xauendevs.vercel.app/img/posts/${post.image}`}
        />
      </Head>
      <div className="content">
        <div className="header-post">
          <div className="header-post-image">
            <img src={`${post.image}`} alt={post.title} />
          </div>
          <div className="header-post-description">
            <small> {post.author.login}</small>
            <small>{format(new Date(post.created_at), 'dd/MM/yyyy')}</small>
            <small>
              {post.tags.map((tag, index) => {
                return `#${tag} `
              })}
            </small>
            <h1>{post.title}</h1>
          </div>
        </div>

        <div
          className="content-post"
          dangerouslySetInnerHTML={{
            __html:
              post.content +
              `<style>
                .content-post img{
                 max-width:100%;
                 display: block;
                 margin-left: auto;
                  margin-right: auto;
                }
                a {
                  font-weight: bold;
                  color: #7db392;
                }
              </style>`
          }}
        />
      </div>
      <style jsx>{`
        .content {
          background-color: #ebecf0;
        }
        @media (prefers-color-scheme: dark) {
          .content {
            background-color: #222;
            color: #eee;
          }
        }
        .content-post {
          padding: 1rem 10rem;
        }
        .header-post-image {
          width: 100%;
          position: relative;
          padding-top: 42%;
        }

        .header-post-image img {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .header-post-description {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          margin-top: 20px;
        }
        @media (max-width: 768px) {
          .content-post {
            padding: 1rem 1rem;
          }

          .header-post-description h1 {
            font-size: 1.8rem;
            text-align: center;
            padding: 1rem 0.2rem;
          }

          .header-post-image {
            padding-top: 90%;
          }
          .header-post-image img {
            height: 80%;
          }
        }
      `}</style>
    </>
  )
}
Post.Layout = BlogLayout

export default Post

export async function getStaticProps({ params: { slug } }) {
  // const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  // const { data: post, content } = matter(fileName)
  console.log('slug')
  const post = await glcms.generatePages('xauendevs', 'web', slug)

  return {
    props: {
      slug,
      post
    }
  }
}

export async function getStaticPaths() {
  const paths = await glcms.generatePaths('xauendevs', 'web')
  console.log('paths')
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}
