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
summary      compact AI/ML profile card
about        current DS/ML/AI summary
skills       data science, GenAI, ML, and cloud skills
experience   applied AI, analytics, and engineering impact
projects     selected GenAI, RAG, forecasting, and ML projects
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

I am a Computer Science engineer focused on Data Science, Machine Learning, and Applied AI. I build GenAI applications, RAG knowledge systems, forecasting and recommendation platforms, document-intelligence workflows, analytics pipelines, and production-ready ML services using Python, SQL, FastAPI, LangChain, LangGraph, scikit-learn, LightGBM, AWS, Docker, and MLOps practices. My fintech experience at IDFC FIRST Bank gives me strong domain exposure to banking data, payments, transaction analytics, and reliable data-driven systems, while my Google Summer of Code work with XWiki strengthened my open-source engineering and cloud deployment foundation.

Try:
skills       see my technical stack
experience   see recent roles and impact
projects     see selected GenAI/ML projects
resume       open the latest resume PDF`;
};

export const skills = async (args: string[]): Promise<string> => {
  return `Languages
  Python, SQL, Java, Bash

Data Science and Analytics
  Pandas, NumPy, exploratory data analysis, feature engineering,
  statistical analysis, data cleaning, business metrics, dashboards,
  transaction analytics, forecasting datasets

Machine Learning and Deep Learning
  scikit-learn, LightGBM, PyTorch, Hugging Face Transformers,
  classification, regression, recommendation systems, anomaly detection,
  time-series forecasting, model evaluation, explainability

GenAI and LLMs
  Retrieval-Augmented Generation, LangChain, LangGraph, LLM Evaluation,
  Prompt Engineering, LLM-as-Judge, Agentic Workflows, Guardrails,
  prompt-injection defense, structured JSON outputs

Retrieval and Vector Search
  Embeddings, Pinecone, Milvus, FAISS, Semantic Search, Hybrid Search,
  Reranking, Metadata Filtering, Chunking Strategies,
  Citation-Grounded Generation

MLOps, Data Engineering and Cloud
  MLflow, Docker, Kubernetes, AWS SageMaker, Kafka, Spark, FastAPI,
  Streamlit, CI/CD, monitoring, reproducible model services`;
};

export const experience = async (args: string[]): Promise<string> => {
  return `IDFC FIRST Bank, Mumbai
Data, ML & GenAI Engineer - Fintech Analytics
2024 - Present

  - Work with banking data across payments, escrow, DigiXCRO/CMS, and UPI workflows to build reliable analytics and data-validation pipelines.
  - Use Python, SQL, log analysis, and expected-vs-actual reconciliation to transform high-volume transaction flows into actionable data insights.
  - Built GenAI document-intelligence tools with Python, FastAPI, Streamlit, SQLite, and OpenAI-compatible LLM APIs.
  - Converted FSDs, architecture docs, Jira issues, and Confluence pages into structured requirements, traceability matrices, assumptions, and coverage-gap analysis.
  - Developed DS/AI depth in feature engineering, model evaluation, prompt engineering, structured output generation, AWS, and MLOps for fintech AI systems.
  - Explore applied ML use cases around transaction analytics, anomaly detection, document parsing, knowledge retrieval, and AI-assisted decision support.

Google Summer of Code, XWiki
Software Engineering Intern, Open Source
Jun 2022 - Sep 2022, Remote

  - Built the XWiki Snap package and automated cloud-ready release workflows using CI/CD, Linux packaging, Docker, Kubernetes, and deployment engineering.
  - Contributed 24 PRs, 85 commits, and 7K+ lines of code.
  - Created user and developer documentation for setup, builds, packaging, reproducible environments, and deployment.

Links
  ${link('https://github.com/xwiki-contrib/packaging-snap/commits/main', 'XWiki packaging-snap commits')}
  ${link('https://github.com/VedantPol/GSoC_2022_Report_XWiki/blob/main/GSoC_2022_Vedant_Pol.md', 'GSoC report')}`;
};

export const projects = async (args: string[]): Promise<string> => {
  return `Enterprise RAG Knowledge Assistant
  Live source-aware GenAI assistant for policy and technical document search using embeddings, semantic retrieval, metadata filtering, reranking, temporary PDF indexing, Docker, Cloudflare Tunnel, and citation-grounded answer generation.
  Stack: Python, LangChain, FastAPI, Docker, Cloudflare Tunnel
  ${link('https://enterprise_rag.vedant-home-server.in/', 'Live app')}
  ${link('https://github.com/VedantPol/enterprise-rag-knowledge-assistant', 'GitHub repo')}

Multi-Agent Knowledge Management System
  Live agentic AI workflow using LangGraph with Retriever, Planner, Critic, and Summarizer agents, plus AutoGen judge evaluation, prompt-injection guardrails, unsupported-claim checks, citation validation, and hallucination detection.
  Status: Live
  Stack: LangGraph, AutoGen, FastAPI, Docker
  ${link('https://multi_agent_kms.vedant-home-server.in/', 'Live app')}
  ${link('https://github.com/VedantPol/multi-agent-knowledge-manager', 'GitHub repo')}

RetailPulse AI: Forecasting & Recommendation Platform
  Live Dockerized data science platform for demand forecasting, stockout risk scoring, anomaly detection, product recommendations, feature-importance explainability, and AI-assisted business insights.
  Status: Live
  Stack: Python, FastAPI, Streamlit, LightGBM, scikit-learn, Docker
  ${link('https://retail_pulse.vedant-home-server.in/', 'Live app')}
  ${link('https://github.com/VedantPol/retailpulse-ai', 'GitHub repo')}

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
         |:_/ |                    Role: Data Science / ML / AI
        //   \\ \\                   Location: ${config.location}
       (|     | )                  Focus: GenAI, RAG, forecasting
      /'\\_   _/\`\\                 Stack: Python, SQL, FastAPI
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
