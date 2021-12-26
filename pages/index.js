import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Deploying a NextJS app on Vercel!
          </a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://www.linkedin.com/in/abdallah-alabed/"
            className="h-64 p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">My LinkedIn Page &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about My projects and Career!
            </p>
            <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png" alt="Vercel Logo" className="h-20 ml-2" />

          </a>

          {/* <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a> */}

          <a
            href="https://github.com/abdallah-alabed"
            className="h-64 p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Github Repo &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover My Journy with ASAC!
            </p>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Vercel Logo" className="h-20 ml-2" />
          </a>
          
          <a
            href="https://nextjs.org/"
            className="h-64 p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Next &rarr;</h3>
            <p className="mt-4 text-xl">
                Discover how i was able to create this using nextJS and vercel            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="Vercel Logo" className="h-20 ml-2" />
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Abdallah-Alabed
          
        </a>
      </footer>
    </div>
  )
}
