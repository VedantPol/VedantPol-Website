import config from '../../../config.json';

const linkClass = 'text-light-blue dark:text-dark-blue underline';

const summary = async (args: string[]): Promise<string> => {
  return `
              __
             / /   Data & GenAI Engineering
        ____/ /    ------------------------
       / __  /     Name: ${config.name}
      / /_/ /      Role: ${config.headline}
      \\__,_/       Location: ${config.location}

CONTACT
  Email: <a class="${linkClass}" href="mailto:${config.email}" target="_blank" rel="noreferrer">${config.email}</a>
  GitHub: <a class="${linkClass}" href="https://github.com/${config.social.github}" target="_blank" rel="noreferrer">github.com/${config.social.github}</a>
  LinkedIn: <a class="${linkClass}" href="https://www.linkedin.com/in/${config.social.linkedin}" target="_blank" rel="noreferrer">linkedin.com/in/${config.social.linkedin}</a>
  Resume: <a class="${linkClass}" href="${config.resume_url}" target="_blank" rel="noreferrer">latest PDF</a>

FOCUS
  Banking data automation, payment validation,
  GenAI QA tooling, document parsing, structured
  JSON outputs, feature engineering, AWS, MLOps.

Try: skills, experience, projects, certs, patent
`;
};

export default summary;
