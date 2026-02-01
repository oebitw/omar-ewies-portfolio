import React, { useState } from 'react';
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
    'Miro': 'https://cdn.simpleicons.org/miro/050038',
    'Loom': 'https://cdn.simpleicons.org/loom/625DF5',
    'Slack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
    'Google Analytics': 'https://cdn.simpleicons.org/googleanalytics/E37400',
    'Hotjar': 'https://cdn.simpleicons.org/hotjar/FF3C00',
    'Looker': 'https://cdn.simpleicons.org/looker/4285F4',
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
      'Product Discovery',
      'Roadmapping & Prioritization',
      'Agile & Scrum Methodologies',
      'Data-Driven Decision Making',
      'Stakeholder Management',
      'A/B Testing & Experimentation',
      'PRDs & Documentation',
      'User Research & Interviews',
      'Market Analysis',
      'Competitive Analysis',
      'Go-to-Market Strategy',
      'OKRs & KPIs',
      'Cross-functional Leadership',
      'Technical Requirements',
      'API Product Management',
      'Agentic AI Systems',
      'AI Prototyping',
      'Prompt Engineering',
      'LLM Integration',
      'AI/ML Product Strategy',
      'Conversational AI Design'
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'palette',
    skills: [
      'Cursor',
      'Supabase',
      'Jira',
      'Mixpanel',
      'Claude Code',
      'Figma',
      'Stitch',
      'Amplitude',
      'APIs',
      'Lovable',
      'Metabase',
      'Elasticsearch',
      'Trello',
      'Notion',
      'Confluence',
      'Figma Make',
      'Miro',
      'Loom',
      'Slack',
      'Postman',
      'Swagger',
      'SQL',
      'MySQL',
      'MongoDB',
      'Looker',
      'Google Analytics',
      'Hotjar',
      'GitHub',
      'Python',
      'OpenAI',
      'Gemini',
      'Perplexity',
      'Replit',
      'n8n',
      'Zapier',
      'RudderStack',
      'Firebase'
    ]
  }
];

const VISIBLE_COUNT_PRODUCT_AI = 6;
const VISIBLE_COUNT_TOOLS = 12;

const Skills: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-6 bg-bg-base">
      <div className="max-w-[960px] mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Skills</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">Core Competencies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {skillsData.map((category) => {
            const isExpanded = expandedCategories.has(category.id);
            const visibleCount = category.id === 'product-ai' ? VISIBLE_COUNT_PRODUCT_AI : VISIBLE_COUNT_TOOLS;
            const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, visibleCount);
            const hasMore = category.skills.length > visibleCount;

            return (
              <div key={category.id} className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-xl">{category.icon}</span>
                  <h4 className="font-semibold text-sm text-text-primary">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {visibleSkills.map((skill) => {
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
                {hasMore && (
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                    <span>{isExpanded ? 'View less' : `View more (${category.skills.length - visibleCount})`}</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
