// @ts-ignore
import connectDB from "@/config/db";
import Property from "@/models/Property";

type PropertyPageProps = {
  params: {
    id: number;
  };
};

const PropertyPage = async ({ params }: PropertyPageProps) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

  return <section>{property.name}</section>``;
};

export default PropertyPage;
