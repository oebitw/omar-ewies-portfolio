import React from 'react';
import { SkillCategory } from '../types';

const getToolLogo = (toolName: string): string | null => {
  const logoMap: { [key: string]: string } = {
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    'Trello': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
    'Notion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
    'Confluence': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Figma Make': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'Swagger': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
    'Metabase': 'https://www.metabase.com/images/logo.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
    'Elasticsearch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
    'Cursor': 'https://www.cursor.com/favicon.ico',
    'GitHub': 'https://cdn.simpleicons.org/github/white',
    'Replit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/replit/replit-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
    'OpenAI': 'https://openai.com/favicon.ico',
    'Gemini': 'https://cdn.simpleicons.org/googlegemini/8E75B2',
    'Claude Code': 'https://cdn.simpleicons.org/anthropic/D4A27F',
    'Perplexity': 'https://cdn.simpleicons.org/perplexity/20B8CD',
    'Lovable': 'https://lovable.dev/favicon.ico',
    'n8n': 'https://cdn.simpleicons.org/n8n/EA4B71',
    'Zapier': 'https://cdn.simpleicons.org/zapier/FF4A00',
    'RudderStack': 'https://www.rudderstack.com/favicon.ico',
    'Stitch': 'https://www.google.com/s2/favicons?domain=stitch.withgoogle.com&sz=64',
    'Amplitude': 'https://amplitude.com/favicon.ico',
    'Mixpanel': 'https://cdn.simpleicons.org/mixpanel/7856FF',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg',
  };

  return logoMap[toolName] || null;
};

const skillsData: SkillCategory[] = [
  {
    id: 'product-ai',
    title: 'Product and AI',
    icon: 'smart_toy',
    skills: [
      'Product Strategy & Vision',
      'Product Development',
      'Product Discovery',
      'Roadmapping & Prioritization',
      'OKRs & Strategic Planning',
      'PRDs & Product Documentation',
      'Agile & Scrum Methodologies',
      'Experimentation & A/B Testing',
      'Data-Driven Decision Making',
      'Product Design & Wireframing',
      'Communication & Storytelling',
      'Stakeholder Management',
      'Team Leadership & Collaboration',
      'Scaling Startups',
      'Time Management & Execution',
      'Problem Solving & Critical Thinking',
      'Agentic AI Systems',
      'LLM Agents & Multi-Agent Systems',
      'ReAct Prompting',
      'Chain-of-Thought Prompting',
      'AI Prototyping',
      'Vibe Coding'
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'palette',
    skills: [
      'Supabase', 'Jira', 'Trello', 'Notion', 'Confluence', 'Figma', 'Figma Make',
      'Postman', 'Swagger', 'Metabase', 'MySQL', 'MongoDB', 'SQL', 'Elasticsearch',
      'Cursor', 'GitHub', 'Replit', 'Firebase', 'OpenAI', 'Gemini',
      'Claude Code', 'Perplexity', 'Lovable', 'n8n', 'Zapier',
      'RudderStack', 'Stitch', 'Amplitude', 'Mixpanel', 'Python', 'APIs'
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 bg-bg-base">
      <div className="max-w-[960px] mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Skills</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">Core Competencies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {skillsData.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-xl">{category.icon}</span>
                <h4 className="font-semibold text-sm text-text-primary">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const logoUrl = category.id === 'tools' ? getToolLogo(skill) : null;
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs bg-bg-surface text-text-secondary border border-border-subtle hover:border-accent/40 hover:text-text-primary transition-all duration-200"
                    >
                      {logoUrl ? (
                        <img
                          src={logoUrl}
                          alt={skill}
                          className="w-4 h-4 object-contain flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : null}
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
