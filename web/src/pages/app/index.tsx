import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"
import Link from "next/link"

export default function Home() {
  const { user } = useUser()
  return (
    <div>
      <h1>Hello World!</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link href="/api/auth/logout">Logout</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({req, res}) => {
    console.log(getAccessToken(req, res))
    return {
      props:{}
    }
  }
})


// export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
//   const token = getAccessToken(req, res)

//   console.log(token)

//   return {
//     props:{}
//   }
// }