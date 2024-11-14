
type PropertyPageProps = {
    params: {
        id: number
    }
}

const PropertyPage = async ({ params }: PropertyPageProps) => {

    const { id } = await params;
    return (<div>Property Page {id}</div>);
}

export default PropertyPage;