import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ssrGetProducts, useMe } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home({ data }) {
  const { user } = useUser();
  const { data: me } = useMe();
  return (
    <div className="text-violet-500">
      <h1>Hello World!</h1>

      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>ok {JSON.stringify(me, null, 2)}</pre>

      {/* <h1>Data</h1>
      <pre>{JSON.stringify(data.products, null, 2)}</pre> */}

      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return await getServerPageGetProducts(null, ctx);
    return {
      props: {},
    };
  },
});

// export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
//   const token = getAccessToken(req, res)

//   console.log(token)

//   return {
//     props:{}
//   }
// }

export default withApollo(ssrGetProducts.withPage()(Home));
