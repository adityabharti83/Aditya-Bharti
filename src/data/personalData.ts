import { PersonalInfo, Skill, Project, BlogPost, ResumeItem } from '../types';

export const aboutData = {
  education: [
    {
      degree: "B.E. – Computer Science Engineering",
      institution: "P.R. Pote Patil College of Engineering & Management, Amravati",
      period: "2021–2025",
      grade: "CGPA: 8.75 | Percentage: 83.12%"
    },
    {
      degree: "HSC – Science",
      institution: "",
      period: "2020–2021",
      grade: "Percentage: 82%"
    },
    {
      degree: "SSC",
      institution: "",
      period: "2018–2019",
      grade: "Percentage: 74%"
    }
  ],
  experience: [
    {
      title: "Data Analyst Intern",
      company: "Cluster Computing",
      period: "Jan 2025 – Present",
      description: "Analyzed & visualized large datasets, improved SQL/Python scripts, and designed data-driven solutions."
    },
    {
      title: "Project Intern",
      company: "Physics Wallah",
      period: "Nov 2024 – Apr 2025",
      description: "Developed Flask/Django applications with personalization, scalability, and optimized deployment."
    }
  ],
  certifications: [
    "Data Science Pro Certification – Physics Wallah",
    "HackerRank 5-Star Rating in Python & SQL"
  ],
  leadership: [
    "Vice-President, Coding Club PRPCEM (Jul 2023 – Aug 2024)",
    "Core Member, GDSC PRPCEM (Aug 2023 – Aug 2024)",
    "Student Lead Coordinator, Smart India Hackathon 2023"
  ]
};

export const contactData = {
  address: "Pune, Maharashtra",
  profiles: {
    hackerrank: "@adityabharti6088"
  }
};

export const personalInfo: PersonalInfo = {
  name: "Aditya Bharti",
  title: "Aspiring Data Analyst | Python Developer | Data Visualization",
  bio: "Computer Science Engineering student (B.E., 2025) specializing in data analysis and visualization. Skilled in Python, SQL, Power BI, and machine learning. Passionate about transforming data into actionable business insights.",
  email: "adityabharti6088@gmail.com",
  phone: "+91 8379084993",
  linkedin: "https://linkedin.com/in/aditya-bharti",
  github: "https://github.com/adityabharti83",
  profileImage: "/Profile Picture.jpg",
};

export const skills: Skill[] = [
  // Programming & Analysis
  { name: "Python", level: 90, category: "technical" },
  { name: "SQL", level: 85, category: "technical" },
  { name: "Pandas", level: 85, category: "technical" },
  { name: "NumPy", level: 80, category: "technical" },
  { name: "scikit-learn", level: 75, category: "technical" },
  
  // Visualization & BI
  { name: "Power BI", level: 90, category: "technical" },
  { name: "Matplotlib", level: 80, category: "technical" },
  { name: "Seaborn", level: 80, category: "technical" },
  { name: "Tableau", level: 65, category: "technical" },
  
  // Data Tools & Processes
  { name: "Data Cleaning", level: 85, category: "technical" },
  { name: "ETL", level: 80, category: "technical" },
  { name: "Statistical Analysis", level: 75, category: "technical" },
  { name: "Excel", level: 85, category: "technical" },
  
  // Databases & Development
  { name: "MySQL", level: 80, category: "technical" },
  { name: "MongoDB", level: 60, category: "technical" },
  { name: "Flask", level: 70, category: "technical" },
  { name: "Django", level: 65, category: "technical" },
  { name: "Git", level: 80, category: "technical" },
  
  // Soft Skills
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Leadership", level: 85, category: "soft" },
  { name: "Team Collaboration", level: 85, category: "soft" },
  { name: "Communication", level: 80, category: "soft" },
  { name: "Project Management", level: 75, category: "soft" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Transaction Fraud Detection Dashboard",
    description: "Built anomaly detection using Isolation Forest, Local Outlier Factor, and rule-based methods on 100K+ transactions. Created Power BI dashboard with automated refresh, heatmaps, and interactive filters. Reduced manual review time by 40%, identified that 78% of frauds occurred at night, enabling targeted monitoring.",
    technologies: ["Python", "scikit-learn", "Power BI", "Isolation Forest", "Pandas", "NumPy"],
    githubUrl: "https://github.com/adityabharti83/fraud-detection-dashboard",
    featured: true,
  },
  {
    id: "2",
    title: "Retail Sales Analysis & Visualization Dashboard",
    description: "Analyzed 50K+ retail records to uncover sales trends and customer behaviors. Built Power BI dashboard with KPIs, geo maps, and filters. Identified top-performing products and regions, optimized discount strategy using insights.",
    technologies: ["Python", "Power BI", "Pandas", "SQL", "Data Visualization"],
    githubUrl: "https://github.com/adityabharti83/retail-sales-analysis",
    featured: true,
  },
  {
    id: "3",
    title: "Customer Churn Prediction Case Study",
    description: "Analyzed 10K+ records to identify factors influencing churn. Trained Logistic Regression model achieving 82% accuracy. Provided insights for improving customer retention strategies.",
    technologies: ["Python", "scikit-learn", "Logistic Regression", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/adityabharti83/customer-churn-prediction",
    featured: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Fraud Detection: How Night-Time Patterns Revealed 78% of Fraudulent Transactions",
    excerpt: "A deep dive into temporal analysis that uncovered critical fraud patterns, leading to targeted monitoring strategies.",
    content: "During my fraud detection project, I discovered that 78% of fraudulent transactions occurred during night hours (10 PM - 6 AM). This insight came from analyzing 100K+ transactions using time-series analysis and clustering algorithms. The pattern was so strong that we implemented time-based risk scoring, reducing false positives by 35% while maintaining 95% fraud detection accuracy.",
    category: "case-study",
    date: "2024-12-15",
    readTime: 5,
    tags: ["Fraud Detection", "Time Series", "Machine Learning", "Business Impact"]
  },
  {
    id: "2",
    title: "Power BI Pro Tip: Dynamic KPI Cards That Adapt to User Selection",
    excerpt: "Learn how to create KPI cards that automatically adjust metrics based on user filters and selections.",
    content: "One of the most powerful features in Power BI is creating dynamic KPI cards using DAX measures. By combining SELECTEDVALUE() with conditional logic, you can create cards that show different metrics based on user selections. This technique improved dashboard usability by 60% in my retail analysis project.",
    category: "tip",
    date: "2024-11-28",
    readTime: 3,
    tags: ["Power BI", "DAX", "Dashboard Design", "UX"]
  },
  {
    id: "3",
    title: "The Rise of Automated Data Cleaning: Why Manual Processes Are Becoming Obsolete",
    excerpt: "Industry trends showing how automated data preprocessing is transforming data analysis workflows.",
    content: "The data industry is rapidly moving towards automated data cleaning solutions. Tools like Great Expectations, Pandas Profiling, and cloud-native solutions are reducing data preprocessing time by 70%. As someone who's spent countless hours on manual data cleaning, I've seen firsthand how automation allows analysts to focus on insights rather than data preparation.",
    category: "trend",
    date: "2024-10-20",
    readTime: 4,
    tags: ["Data Cleaning", "Automation", "Industry Trends", "Productivity"]
  },
  {
    id: "4",
    title: "Customer Churn Prediction: The Feature That Surprised Everyone",
    excerpt: "How customer support interaction frequency became our strongest predictor of churn.",
    content: "While building a churn prediction model, we expected features like purchase frequency and account age to be top predictors. Surprisingly, the number of customer support interactions in the last 30 days emerged as the strongest predictor (correlation: 0.73). This led to a proactive customer success strategy that reduced churn by 22%.",
    category: "case-study",
    date: "2024-09-15",
    readTime: 4,
    tags: ["Churn Prediction", "Feature Engineering", "Customer Success", "Insights"]
  },
  {
    id: "5",
    title: "SQL Performance Hack: Window Functions vs Subqueries",
    excerpt: "A practical comparison showing when window functions can improve query performance by 300%.",
    content: "When analyzing large datasets, choosing between window functions and subqueries can dramatically impact performance. In my recent project with 2M+ records, replacing correlated subqueries with window functions improved query execution time from 45 seconds to 12 seconds - a 275% improvement. Here's when to use each approach.",
    category: "tip",
    date: "2024-08-30",
    readTime: 6,
    tags: ["SQL", "Performance", "Window Functions", "Optimization"]
  }
];

export const resumeItems: ResumeItem[] = [
  {
    id: "1",
    title: "Data Analyst Intern",
    organization: "Cluster Computing",
    period: "Jan 2025 – Present",
    description: "Analyzing large datasets, improving SQL/Python scripts, and designing data-driven solutions for business optimization.",
    type: "experience",
    skills: ["Python", "SQL", "Data Analysis", "ETL", "Business Intelligence"],
    achievements: [
      "Optimized data processing pipelines reducing execution time by 40%",
      "Created automated reporting dashboards saving 15 hours/week",
      "Implemented data quality checks improving accuracy by 25%"
    ]
  },
  {
    id: "2",
    title: "Project Intern",
    organization: "Physics Wallah",
    period: "Nov 2024 – Apr 2025",
    description: "Developing Flask/Django applications with personalization features, scalability optimization, and deployment strategies.",
    type: "experience",
    skills: ["Flask", "Django", "Python", "Web Development", "Database Design"],
    achievements: [
      "Built personalized learning recommendation system",
      "Improved application performance by 60% through optimization",
      "Deployed scalable solutions handling 10K+ concurrent users"
    ]
  },
  {
    id: "3",
    title: "B.E. – Computer Science Engineering",
    organization: "P.R. Pote Patil College of Engineering & Management, Amravati",
    period: "2021–2025",
    description: "Specializing in data structures, algorithms, machine learning, and database management systems.",
    type: "education",
    skills: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "Software Engineering"],
    achievements: [
      "CGPA: 8.75 (83.12%)",
      "Relevant Coursework: Data Mining, AI/ML, Database Systems",
      "Final Year Project: Advanced Fraud Detection System"
    ]
  },
  {
    id: "4",
    title: "HSC – Science",
    organization: "Maharashtra State Board",
    period: "2020–2021",
    description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science.",
    type: "education",
    skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    achievements: ["Percentage: 82%"]
  },
  {
    id: "5",
    title: "Data Science Pro Certification",
    organization: "Physics Wallah",
    period: "2024",
    description: "Comprehensive certification covering Python, machine learning, data visualization, and statistical analysis.",
    type: "certification",
    skills: ["Python", "Machine Learning", "Statistics", "Data Visualization", "Pandas", "NumPy"]
  },
  {
    id: "6",
    title: "HackerRank 5-Star Rating",
    organization: "HackerRank",
    period: "2024",
    description: "Achieved 5-star proficiency ratings in Python programming and SQL database management.",
    type: "certification",
    skills: ["Python", "SQL", "Problem Solving", "Algorithms"]
  },
  {
    id: "7",
    title: "Vice-President",
    organization: "Coding Club PRPCEM",
    period: "Jul 2023 – Aug 2024",
    description: "Led coding club activities, organized hackathons, and mentored junior students in programming and data science.",
    type: "leadership",
    skills: ["Leadership", "Event Management", "Mentoring", "Team Building"],
    achievements: [
      "Organized 5+ technical workshops with 200+ participants",
      "Led team of 15 core members",
      "Increased club membership by 150%"
    ]
  },
  {
    id: "8",
    title: "Core Member",
    organization: "GDSC PRPCEM",
    period: "Aug 2023 – Aug 2024",
    description: "Active contributor to Google Developer Student Club, focusing on cloud technologies and data science initiatives.",
    type: "leadership",
    skills: ["Google Cloud", "Community Building", "Technical Writing", "Project Management"]
  },
  {
    id: "9",
    title: "Student Lead Coordinator",
    organization: "Smart India Hackathon 2023",
    period: "2023",
    description: "Coordinated college participation in national-level hackathon, managing team registrations and mentoring participants.",
    type: "leadership",
    skills: ["Project Coordination", "Team Management", "Problem Solving", "Innovation"],
    achievements: [
      "Coordinated 20+ team registrations",
      "Mentored teams in problem statement analysis",
      "Achieved 80% team advancement to next round"
    ]
  }
];

export const resumeCategories = [
  { id: 'all', label: 'All', icon: '📋' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'certification', label: 'Certifications', icon: '🏆' },
  { id: 'leadership', label: 'Leadership', icon: '👥' }
];

export const blogCategories = [
  { id: 'all', label: 'All Posts', icon: '📚' },
  { id: 'case-study', label: 'Case Studies', icon: '🔍' },
  { id: 'tip', label: 'Tips & Tricks', icon: '💡' },
  { id: 'trend', label: 'Industry Trends', icon: '📈' }
];
