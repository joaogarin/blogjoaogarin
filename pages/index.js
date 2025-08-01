import Link from 'next/link';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 // 1 hour
  };
}

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <div className="mr-2">
              <Image
                alt="Joao Garin"
                height={100}
                width={100}
                src="/avatar.jpg"
                className="rounded-full"
              />
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
                Joao's digital garden
              </h1>
              <div className="prose text-gray-600 dark:text-gray-400">
                Hi there, I am Joao. A Frontend developer, builder and
                javascript enthusiast. I work as a Technical team lead at{' '}
                <Link href="https://www.jobiqo.com/">jobiqo</Link>
                . Congratulations, you found my digital garden, here have a 🍺
                it's on me.
                <br />
                <Link href="/about">Learn more about me.</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16" />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Latest articles
        </h3>
        <BlogPost
          title="How frameworks reflect the culture of product teams"
          summary="Framework choices are more than technical, they reveal the culture and priorities of the teams behind them."
          slug="frameworks-reflect-culture"
        />
        <BlogPost
          title="The cost of flexibility in Drupal"
          summary="Balancing flexibility and focus: Navigating Drupal’s potential without sacrificing UX and maintainability"
          slug="the-cost-of-flexibility-in-drupal"
        />
        <BlogPost
          title="Using AI to assist in visual testing"
          summary="Experiments with visual testing in the world of AI"
          slug="using-AI-to-assist-in-visual-testing"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Latest projects
        </h3>
        <ProjectCard
          title="retravel.ai"
          description="Retravel is a tool for travellers to help better plan, research and explore places all around the world leveraging the power of AI and ChatGPT. Currently in progress / under development."
          href="https://retravel.ai/"
        />
        <ProjectCard
          title="AI Font finder"
          description="A web application using the GPT AI tool to recommend fonts for projects using the power of AI. Built in 2022."
          href="https://aifontfinder.vercel.app/"
        />
        <ProjectCard
          title="Bruni Visual"
          description="Sass application for helping designers and developers collaborate on design implementations & theming. Built in 2022."
          href="https://www.brunivisual.com/"
        />
        <ProjectCard
          title="Haynet"
          description="Sass application for ambulatory vets, based on Nextjs, GraphQL and Drupal. Launched in late 2020, currently not completely self service."
          href="https://www.haynetvet.com/"
        />
        <ProjectCard
          title="Themeforest"
          description="Between 2014 and 2017 I worked on many themes selling on themeforest. From Drupal themes to angular themes and also pure HTML themes."
          href="https://themeforest.net/user/monkey_themes"
        />
      </div>
    </Container>
  );
}
