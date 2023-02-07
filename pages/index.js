//Components
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home({ posts, projects }) {
  const test = process.env.TEST
  console.log(test)
  return (
    <div className='bg-white overflow-auto'>

      {/* <Header /> */}

      <section id='hero' className=''>
        <Hero />
      </section>

      <section id='about' className='mb-32'>
        <About />
      </section>

      <section id='skills' className='mb-10'>
        <Skills />
      </section>

      <section id='projects' className=' mb-96'>
        <Projects projects={posts} posts={projects} />
      </section>

      {/* <section id='contact'>
        <Contact />
      </section> */}


    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       query: `
//       query AllProjects {
//         posts {
//           nodes {
//             content
//             title
//             slug
//             excerpt
//             tags {
//               nodes {
//                 name
//               }
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//           }
//         }
//       }
//       `,
//     })
//   })

//   const json = await res.json()


//   console.log(json)

//   return {
//     props: {
//       projects: json.data.posts
//     },
//   }
// }
