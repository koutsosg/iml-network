const Podcast = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  console.log(params);
  return <div>test </div>;
};
export default Podcast;
