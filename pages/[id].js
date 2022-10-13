import { supabase } from "../utils/supabase";

const LessonsDetails = ({ lesson }) => {
  console.log({ lesson });

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{lesson.title}</h1>
      <p>{lesson.description}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  // Query all the lessons, but only take the data from the id column
  const { data: lessons } = await supabase.from("lesson").select("id");

  // Build necessary paths
  const paths = lessons.map(({ id }) => ({
    params: {
      // Note stringified id!
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Get id from the passed url parameter
export const getStaticProps = async ({ params: { id } }) => {
  // From lesson table select all columns, but only where id column matches the id, that was passed as parameter
  // Since we expect to get just one row back we can also chain single() at the end
  const { data: lesson } = await supabase
    .from("lesson")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      lesson,
    },
  };
};

export default LessonsDetails;
