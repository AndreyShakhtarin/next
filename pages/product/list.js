function Product({ products }) {
    return (
        <table className={'table'}>
            <thead>
            <th>ID</th>
            <th>Subject</th>
            <th>Create At</th>
            <th>Action</th>
            </thead>
            {products.map((product) => (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.subject}</td>
                    <td>{product.created_at}</td>
                    <td><a href={product.id}> Show </a></td>
                </tr>
            ))}
        </table>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost/api/products')
    const products = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            products,
        },
    }
}

export default Product