export const PERSONAL = {
    name: "Rúben Albuquerque",
    title: "Data Engineer",
    location: "Gland, Vaud, Switzerland",
    linkedin: "https://www.linkedin.com/in/rubenalbuquerque/",
    github: "https://github.com/rubenAlbuquerque",
    portfolio: "https://rubenalbuquerque.github.io/Portfolio",
};

export const LANGUAGES = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "B2" },
    { name: "French", level: "A2" },
];

export const SKILLS = {
    programming: ["Python", "Pandas", "PySpark", "SQL", "OpenCypher"],
    dataEngineering: [
        "ETL Pipelines",
        "Data Modeling",
        "Data Lakes",
        "Data Quality",
        "Batch Processing",
        "Metadata-driven Architectures",
    ],
    cloudPlatforms: [
        "Databricks",
        "Azure Data Factory",
        "Azure Blob Storage",
        "AWS S3",
        "AWS Aurora",
        "AWS Neptune",
        "AWS EKS",
    ],
    orchestration: ["Apache Airflow", "Argo Workflows"],
    devops: ["Docker", "Kubernetes", "Git", "CI/CD"],
};

export const EXPERIENCE = [
    {
        company: "Affinity (through Celfocus)",
        role: "Data Engineer",
        period: "2024 – Present",
        highlights: [
            "Developed and deployed scalable ETL pipelines using Python and PySpark on Databricks.",
            "Processed approximately 60–70 GB of telecom data across more than 30 datasets.",
            "Built multi-task workflows using Databricks Jobs and Asset Bundles.",
            "Implemented metadata-driven data quality and auditing solutions.",
            "Designed cloud-native event-driven architectures on AWS.",
            "Improved platform reliability and scalability.",
            "Automated workflows using Docker, Kubernetes, and CI/CD.",
        ],
        technologies: ["Python", "PySpark", "Databricks", "AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
        company: "BNP Paribas",
        role: "Data Engineer",
        period: "",
        highlights: [
            "Built batch ingestion pipelines using Python, Amazon S3, and Apache Airflow.",
            "Integrated APIs, CSV files, and database sources.",
            "Processed over 1 TB of data through daily and weekly workloads.",
            "Designed Airflow DAGs with retries, dependencies, and automated error handling.",
            "Created configurable business-rule-based data quality frameworks.",
            "Improved reliability, consistency, and scalability of enterprise data processing.",
        ],
        technologies: ["Python", "Amazon S3", "Apache Airflow", "SQL"],
    },
    {
        company: "Jobbex Group / Touch Inflight Entertainment",
        role: "Data Engineer",
        period: "2023 – 2024",
        highlights: [
            "Developed analytical solutions using Python, SQL, and Databricks.",
            "Improved operational reporting in the aviation sector.",
            "Collaborated in Azure Data Factory pipeline optimization.",
            "Reduced processing times for onboard experience analytics.",
        ],
        technologies: ["Python", "SQL", "Databricks", "Azure Data Factory"],
    },
    {
        company: "Centro de Medicina Laboratorial Germano de Sousa",
        role: "Data Analyst",
        period: "2020 – 2021",
        highlights: [
            "Compared manual and automated genetic test annotations.",
            "Worked with IBM Watson for Genomics.",
            "Used Python and SQL for data analysis.",
            "Built Power BI dashboards.",
            "Conducted statistical analysis supporting AI adoption decisions.",
        ],
        technologies: ["Python", "SQL", "Power BI", "IBM Watson for Genomics"],
    },
];

export const EDUCATION = [
    {
        institution: "Instituto Politécnico de Lisboa (ISEL)",
        degree: "Master's Degree in Computer Engineering and Multimedia",
        period: "2021 – 2024",
    },
    {
        institution: "Instituto Politécnico de Setúbal (ESTB)",
        degree: "Bachelor's Degree in Bioinformatics",
        period: "2018 – 2021",
    },
];

export const CERTIFICATIONS = [
    {
        name: "Mastering Azure Databricks for Data Engineers Specialization",
        issuer: "Packt",
        year: "2025",
    },
    { name: "Intro to SQL", issuer: "Kaggle", year: "2023" },
    { name: "Advanced SQL", issuer: "Kaggle", year: "2023" },
    {
        name: "Machine Learning with TensorFlow",
        issuer: "FreeCodeCamp",
        year: "2023",
    },
    {
        name: "Python Fundamentals for Data Analysis",
        issuer: "Data Science Academy",
        year: "2021",
    },
];

export const PROJECTS = [
    {
        title: "AI-Powered Real Estate Analytics for Investors",
        category: "Machine Learning",
        description:
            "End-to-end analytics platform for real estate investors — property valuation, market trend analysis, price forecasting, and economic drivers of housing markets.",
        technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "SQL"],
        challenges: [
            "Building a full data pipeline from raw sources to model-ready datasets",
            "Comparing multiple ML approaches for price prediction accuracy",
            "Connecting model outputs to a product-oriented workflow",
        ],
        results: [
            "Evaluated Linear Regression, Random Forest, and neural network models",
            "Measured performance using R², MAE, and RMSE",
            "Designed an end-to-end workflow from data processing to deployment",
        ],
        accent: "from-amber-600 to-orange-800",
    },
    {
        title: "Data Mining System for MedKnow",
        category: "Data Mining",
        description:
            "Data mining system built to support MedKnow's ophthalmology team with strategic insights and operational decision-making.",
        technologies: ["Python", "SQL", "Orange"],
        challenges: [
            "Extracting actionable patterns from clinical ophthalmology data",
            "Designing workflows accessible to non-technical stakeholders",
            "Translating mining outputs into operational support",
        ],
        results: [
            "Built data mining pipelines with Orange and SQL",
            "Delivered insights to support strategic team decisions",
            "Improved operational visibility for the ophthalmology unit",
        ],
        accent: "from-sky-600 to-blue-800",
    },
    {
        title: "Red Wine Portugal Analysis",
        category: "Big Data",
        description:
            "Big Data analysis of the Portuguese red wine dataset — exploring quality patterns and key physicochemical drivers across regions.",
        technologies: ["Python", "PySpark", "Pandas"],
        challenges: [
            "Processing and exploring the wine dataset at scale",
            "Identifying physicochemical variables linked to wine quality",
            "Handling distributed analysis with PySpark",
        ],
        results: [
            "Analyzed quality trends across Portuguese red wine samples",
            "Explored feature relationships using Pandas and PySpark",
            "Generated data-driven insights from a Big Data workflow",
        ],
        accent: "from-rose-600 to-red-800",
    },
    {
        title: "Oxford Pets Classification",
        category: "Deep Learning",
        description:
            "Binary and multi-class image classification of the Oxford-IIIT Pet Dataset using CNNs and transfer learning.",
        technologies: ["Python", "TensorFlow", "Matplotlib"],
        challenges: [
            "Training CNNs for binary and multi-class pet classification",
            "Applying transfer learning on the Oxford-IIIT Pet Dataset",
            "Evaluating and visualizing model performance",
        ],
        results: [
            "Implemented convolutional neural network architectures in TensorFlow",
            "Compared binary and multi-class classification approaches",
            "Visualized results and model behaviour with Matplotlib",
        ],
        accent: "from-violet-600 to-purple-800",
    },
];

export const ABOUT_STATS = [
    { value: "4", label: "Industries" },
    { value: "1 TB+", label: "Data Processed" },
    { value: "30+", label: "Datasets Managed" },
    { value: "5", label: "Certifications" },
];

export const NAV_LINKS = [
    { name: "Home", href: "#home", note: "Introduction" },
    { name: "About", href: "#about", note: "Background & skills" },
    { name: "Experience", href: "#experience", note: "Professional roles" },
    { name: "Projects", href: "#projects", note: "Portfolio work" },
];
