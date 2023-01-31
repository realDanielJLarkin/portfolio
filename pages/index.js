//Components
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home({ posts }) {
  return (
    <div className='bg-white'>

      {/* <Header /> */}

      <section id='hero' className=''>
        <Hero />
      </section>

      <section id='about' className=''>
        <About />
      </section>

      <section id='skills' className='mb-12'>
        <Skills />
      </section>

      <section id='projects' className=' mb-96'>
        <Projects projects={posts} />
      </section>

      <section id='contact'>
        <Contact />
      </section>


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
//         projects {
//           nodes {
//             content
//             title
//             slug
//             excerpt
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

//   return {
//     props: {
//       posts: json.data.projects,
//     },
//   }
// }
