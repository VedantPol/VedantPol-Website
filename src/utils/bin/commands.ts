// List of commands that do not require API calls.

import * as bin from './index';
import config from '../../../config.json';

const linkClass = 'text-light-blue dark:text-dark-blue underline';

const link = (href: string, label: string): string =>
  `<a class="${linkClass}" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;

const songs = [
  { name: 'Fed Up by Bazanji', file: 'music.mp3' },
  { name: 'Aaja by Nucleya', file: 'music3.mp3' },
  { name: 'Rip & Tear by Mick Gordon', file: 'music2.mp3' },
  { name: 'Until I Found You by Stephen Sanchez', file: 'music4.mp3' },
];

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();

  return `Available commands:

${commands.join(', ')}

Good starting points:
summary      compact profile card
about        current professional summary
skills       AI, ML, automation, and cloud skills
experience   work history from the latest resume
projects     selected GenAI and ML projects
education    degree and coursework
certs        certifications and awards
patent       patent work
resume       open the latest resume PDF

[tab]: autocomplete
[ctrl+l]/clear: clear terminal`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening GitHub repository...';
};

// Profile
export const about = async (args: string[]): Promise<string> => {
  return `${config.name}
${config.headline}
${config.location}

I am a Computer Science engineer and AI-focused SDET working on AI systems and automation at IDFC First Bank. My experience spans RAG systems, LLM evaluation, fraud-risk analysis workflows, compliance search, automated test pipelines, Linux packaging, CI/CD, Docker, Kubernetes, AWS, and open-source development through Google Summer of Code with XWiki.

Try:
skills       see my technical stack
experience   see recent roles and impact
projects     see selected GenAI/ML projects
resume       open the latest resume PDF`;
};

export const skills = async (args: string[]): Promise<string> => {
  return `Languages
  Python, SQL, Java, Bash

GenAI and LLMs
  Retrieval-Augmented Generation, LangChain, LangGraph, LLM Evaluation,
  Prompt Engineering, LLM-as-Judge, Agentic Workflows, Guardrails,
  Prompt Injection Testing

Retrieval and Vector Search
  Embeddings, Pinecone, Milvus, FAISS, Semantic Search, Hybrid Search,
  Reranking, Metadata Filtering, Chunking Strategies,
  Citation-Grounded Generation

ML, MLOps and Automation
  PyTorch, Hugging Face Transformers, scikit-learn, MLflow, Docker,
  Kubernetes, AWS SageMaker, Kafka, Spark, Playwright, Pytest, Allure, GoCD`;
};

export const experience = async (args: string[]): Promise<string> => {
  return `IDFC First Bank, Mumbai
Software Development Engineer in Test, AI Systems & Automation
2024 - Present

  - Built and evaluated a GenAI fraud-risk analysis workflow across 284K+ transaction records, improving fraud-case triage recall by 25%.
  - Developed a RAG compliance and policy search system with LangChain, Pinecone, embeddings, metadata filtering, and citation-grounded retrieval; indexed 500+ regulatory and operational documents and reduced manual lookup time by 60%.
  - Designed a RAG benchmarking framework across chunking, embeddings, top-k, reranking, and prompt templates; improved grounded-answer accuracy from 78% to 91%.
  - Built reusable LLM/RAG evaluation datasets for golden questions, source checks, adversarial prompts, missing-context queries, Recall@K, Precision@K, MRR, faithfulness, hallucination rate, latency, and cost per query.
  - Built an automated LLM evaluation pipeline with Playwright, Python, GoCD, and Allure; reduced manual review cycles by 50%.

Google Summer of Code, XWiki
Software Engineering Intern, Open Source
Jun 2022 - Sep 2022, Remote

  - Built the XWiki Snap package and automated cloud-ready release workflows using CI/CD, Linux packaging, Docker, Kubernetes, and deployment automation.
  - Contributed 24 PRs, 85 commits, and 7K+ lines of code.
  - Created user and developer documentation for setup, builds, packaging, automation, and deployment.

Links
  ${link('https://github.com/xwiki-contrib/packaging-snap/commits/main', 'XWiki packaging-snap commits')}
  ${link('https://github.com/VedantPol/GSoC_2022_Report_XWiki/blob/main/GSoC_2022_Vedant_Pol.md', 'GSoC report')}`;
};

export const projects = async (args: string[]): Promise<string> => {
  return `Enterprise RAG Knowledge Assistant
  GenAI assistant for policy and technical document search using semantic retrieval, metadata filtering, reranking, and citation-grounded answer generation.
  Stack: Python, LangChain, Pinecone, FastAPI, Docker

Multi-Agent Knowledge Management System
  Agentic LLM workflow using LangGraph with Retriever, Planner, Critic, and Summarizer agents, plus guardrails for prompt injection, unsupported claims, citation validation, and hallucination detection.
  Stack: LangGraph, AutoGen, FastAPI, Docker

LLM Evaluation and Regression Testing Framework
  Automated evaluation for factuality, safety, hallucination rate, formatting quality, latency, business-rule compliance, citation presence, retrieval quality, adversarial prompts, and missing-context handling.
  Stack: Python, Playwright, Pytest, Allure, MLflow

Open Source: XWiki Snap Package
  Universal Snap package for XWiki with automated builds and deployment docs.
  ${link('https://github.com/xwiki-contrib/packaging-snap', 'GitHub repo')}`;
};

export const education = async (args: string[]): Promise<string> => {
  return `Thakur College of Engineering & Technology
Bachelor of Engineering in Computer Science
2020 - 2024
CGPA: 9.08/10

Relevant coursework:
  Data Structures and Algorithms, Databases, Operating Systems,
  Computer Networks, Machine Learning, Artificial Intelligence,
  Software Engineering, Cloud Computing`;
};

export const certs = async (args: string[]): Promise<string> => {
  return `AWS Certified Machine Learning - Specialty
  ${link('https://cp.certmetrics.com/amazon/en/public/verify/credential/90b1777f8555422e908156fe93fecc10', 'Verify credential')}

AWS Certified Cloud Practitioner
  ${link('https://cp.certmetrics.com/amazon/en/public/verify/credential/35dd6f346e2e4b8d93e864654052cfa5', 'Verify credential')}

Mathematics for Machine Learning, Imperial College London
  ${link('https://coursera.org/share/91f17c8d69e987e085050a6854cac50d', 'View certificate')}`;
};

export const patent = async (args: string[]): Promise<string> => {
  return `ML-Based Dot Matrix Printer Fault Diagnosis

Developed an audio-based supervised ML system using Python, signal processing, feature extraction, classification models, and hardware sensor data to detect paper jams, missing print lines, carriage faults, and print head issues.

Skills demonstrated:
  Python, Machine Learning, Signal Processing, CNNs, Raspberry Pi

${link('https://drive.google.com/file/d/12Nkm-uN7GnuPpnKP-rH8cr7VUtiqqluu/view', 'German Patent')}`;
};

export const contact = async (args: string[]): Promise<string> => {
  return `Email: ${link(`mailto:${config.email}`, config.email)}
Phone: ${config.phone}
GitHub: ${link(`https://github.com/${config.social.github}`, `github.com/${config.social.github}`)}
LinkedIn: ${link(`https://www.linkedin.com/in/${config.social.linkedin}`, `linkedin.com/in/${config.social.linkedin}`)}`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening latest resume PDF...';
};

// Contact shortcuts
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);

  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening LinkedIn...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching Google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching DuckDuckGo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Searching Bing for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching Reddit for ${args.join(' ')}...`;
};

let audio: HTMLAudioElement;
export const radio = async (args: string[]): Promise<string> => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  const song = songs[randomIndex];
  audio = new Audio(song.file);
  audio.play();
  return `Now playing: ${song.name}
Use the radiostop command to stop the music.`;
};

export const radiostop = async (args: string[]): Promise<string> => {
  if (audio && !audio.paused) {
    audio.pause();
    audio.src = '';
    audio.load();
    audio = null;
    return `Music stopped.`;
  } else {
    return `Music is not currently playing.`;
  }
};

export const radioremove = async (args: string[]): Promise<string> => {
  if (audio) {
    audio.pause();
    audio.src = '';
    audio.load();
    audio.parentNode?.removeChild(audio);
    audio = null;
    return `Music element removed.`;
  } else {
    return `Music is not currently playing.`;
  }
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.name} - ${config.headline}`;
};

export const cat = async (args?: string[]): Promise<string> => {
  return `Try 'summary', 'skills', 'experience', or 'projects'.`;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  const str = `
          .--.                     ${config.name}@${config.ps1_hostname}
         |o_o |                    ------------------------------
         |:_/ |                    Role: AI Systems & Automation SDET
        //   \\ \\                   Location: ${config.location}
       (|     | )                  Focus: RAG, LLM eval, GenAI workflows
      /'\\_   _/\`\\                 Stack: Python, LangChain, Playwright
      \\___)=(___/                 Cloud: AWS, Docker, Kubernetes
`;
  return str;
};

export const ls = async (args: string[]): Promise<string> => {
  return `profile/
  about
  skills
  experience
  projects
  education
  certs
  patent
  contact
  resume`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `This portfolio keeps everything in one terminal. Try 'ls'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `Try 'nvim'.`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `Try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Try 'vscode'.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied. Portfolio root access is reserved.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 __     __        _             _     ____       _
 \\ \\   / /__  __| | __ _ _ __ | |_  |  _ \\ ___ | |
  \\ \\ / / _ \\/ _\` |/ _\` | '_ \\| __| | |_) / _ \\| |
   \\ V /  __/ (_| | (_| | | | | |_  |  __/ (_) | |
    \\_/ \\___|\\__,_|\\__,_|_| |_|\\__| |_|   \\___/|_|

${config.headline}

Type 'help' to see all commands.
Try 'summary', 'about', 'skills', 'experience', or 'projects'.`;
};
