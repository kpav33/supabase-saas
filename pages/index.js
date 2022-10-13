import { supabase } from "../utils/supabase";
import Link from "next/link";

// Tutorial homepage: https://egghead.io/courses/build-a-saas-product-with-next-js-supabase-and-stripe-61f2bc20

export default function Home({ lessons }) {
  // console.log(lessons);
  // GitHub authentication doesn't work, keeps returning page not found
  // For this reason the authentication part was not completed => https://egghead.io/lessons/supabase-implement-third-party-authentication-with-github-in-next-js-using-supabase
  // console.log(supabase.auth.user());

  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`}>
          <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {lesson.title}
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  // Get all data from all rows in lesson table in supabase
  const { data: lessons } = await supabase.from("lesson").select("*");

  return {
    props: {
      lessons,
    },
  };
};
