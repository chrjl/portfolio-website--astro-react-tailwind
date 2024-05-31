import githubMark from '../assets/github-mark.svg';
import nodeLogo from '../assets/nodejs-stacked-dark.svg';
import reactLogo from '../assets/react.svg';
import tsLogo from '../assets/ts-logo-128.svg';

export default function Header() {
  return (
    <header className="my-8 text-center">
      <h1 className="text-4xl font-extrabold">Christopher Lee</h1>

      <h2 className="mt-4 text-xl font-bold">
        JavaScript Developer
        <span className="ml-4 inline-block [&>a]:ml-1.5 [&_img]:inline [&_img]:h-6">
          <a href="https://nodejs.org/about" target="_blank">
            <img src={nodeLogo.src} alt="node" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo.src} alt="react" />
          </a>
          <a href="https://typescriptlang.org" target="_blank">
            <img src={tsLogo.src} alt="typescript" />
          </a>
        </span>

        <div className="mt-1 text-base font-medium">
          AWS Certified Solutions Architect Associate
        </div>
      </h2>

      <h3 className="mt-4 text-sm [&>*]:align-middle">
        <span>Los Angeles, California</span>
        <span className="px-4">|</span>
        <img className="mr-1 inline h-4" src={githubMark.src} alt="[github]" />
        <a href="https://github.com/chrjl" target="_blank">
          chrjl
        </a>
      </h3>
    </header>
  );
}
