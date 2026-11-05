import { defineConfig } from 'vitepress'
export default defineConfig({
 title: 'AI Career Atlas', description: 'Find your place in the AI industry. Research roles, compare skills, and build evidence of your ability.',
 base: '/ai-career-atlas/', lastUpdated: true,
 themeConfig: {
  logo: undefined,
  nav: [{text:'Explore roles',link:'/roles/'},{text:'Compare',link:'/compare'},{text:'Build your path',link:'/roadmap'},{text:'Research notes',link:'/research'}],
  sidebar: [{text:'Start here',items:[{text:'Role directory',link:'/roles/'},{text:'Compare careers',link:'/compare'},{text:'Career roadmap',link:'/roadmap'}]},{text:'Role field guides',items:[{"text": "Forward Deployed Engineer", "link": "/roles/forward-deployed-engineer"}, {"text": "AI / Applied AI Engineer", "link": "/roles/ai-engineer"}, {"text": "Applied AI Architect", "link": "/roles/applied-ai-architect"}, {"text": "AI Evaluation Engineer", "link": "/roles/evaluation-engineer"}, {"text": "Research Engineer", "link": "/roles/research-engineer"}, {"text": "Inference / ML Systems Engineer", "link": "/roles/inference-engineer"}, {"text": "AI Security / Safeguards Engineer", "link": "/roles/ai-security-engineer"}]},{text:'Research',items:[{text:'Sources & methodology',link:'/research'},{text:'Contribute',link:'/contribute'}]}],
  search:{provider:'local'}, socialLinks:[{icon:'github',link:'https://github.com/vvm3-IT/ai-career-atlas'}],
  editLink:{pattern:'https://github.com/vvm3-IT/ai-career-atlas/edit/main/docs/:path',text:'Improve this page on GitHub'},
  footer:{message:'Independent career research. Titles vary; responsibilities matter.',copyright:'AI Career Atlas · Research reviewed November 5, 2026'}
 }
})
