function Product({ product }) {
    return (
        <div>
            <a href={'/product/list'}> Back to list </a>
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>ID</th><th>Subject</th><th>createAt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.id}</td><td>{product.id}</td> <td>{product.created_at}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export async function getStaticPaths( ) {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost/api/products`)
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
//
// // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    console.log(params);
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost/api/products/${params.id}`)
    const product = await res.json()

    // Pass post data to the page via props
    return { props: { product } }
}

export default Product