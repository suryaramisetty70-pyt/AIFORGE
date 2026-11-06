export const curriculumTracks = [
  {
    id: "track-1",
    number: "01",
    title: "Python & Programming Foundations",
    shortDesc: "Master clean, idiomatic Python from absolute scratch to object-oriented and modular production code.",
    badge: "Foundation Level",
    duration: "4 Weeks",
    level: "Beginner to Intermediate",
    tools: ["Python 3.12+", "VS Code", "Git", "Pipenv", "PyTest"],
    project: "Interactive CLI Data Analytics & Automated Web Scraper",
    projectDesc: "Build an end-to-end command line application that parses unstructured web data, validates schemas, handles exceptions gracefully, and exports structured CSV/JSON reports.",
    modules: [
      {
        name: "Core Syntax & Algorithmic Thinking",
        topics: ["Variables, Data Types & Type Hints", "Control Flow & Loops", "Memory Model & Pass-by-Reference", "Writing Clean Functions"]
      },
      {
        name: "Advanced Data Structures & Comprehensions",
        topics: ["Lists, Tuples, Dictionaries & Sets in Depth", "List/Dict Comprehensions", "Generators & Iterators", "Built-in collections module"]
      },
      {
        name: "Object-Oriented Programming (OOP)",
        topics: ["Classes, Instances & Attributes", "Inheritance & Polymorphism", "Dunder/Magic Methods", "Abstract Base Classes & Interfaces"]
      },
      {
        name: "Production Habits & Tooling",
        topics: ["Exception Handling & Custom Errors", "Virtual Environments", "Git Branching & GitHub Workflows", "Unit Testing with PyTest"]
      }
    ]
  },
  {
    id: "track-2",
    number: "02",
    title: "Applied Mathematics & Statistics for AI",
    shortDesc: "Demystify linear algebra, calculus, and probability without painful proofs—only what directly powers AI algorithms.",
    badge: "Core Theory",
    duration: "3 Weeks",
    level: "Foundational",
    tools: ["NumPy", "SymPy", "Matplotlib", "Desmos", "JupyterLab"],
    project: "Neural Matrix Multiplier & Gradient Descent Visualizer",
    projectDesc: "Code vector dot products, matrix transformations, and gradient descent optimization from first mathematical principles without external ML libraries.",
    modules: [
      {
        name: "Linear Algebra for Neural Networks",
        topics: ["Scalars, Vectors, Matrices & Tensors", "Dot Products, Matrix Multiplications & Transposition", "Eigenvalues, Eigenvectors & Dimensionality", "Vector Spaces & Latent Projections"]
      },
      {
        name: "Calculus for Backpropagation",
        topics: ["Derivatives & Rate of Change", "Partial Derivatives & The Gradient Vector", "The Chain Rule in Computational Graphs", "Loss Surfaces & Convex/Non-Convex Gradients"]
      },
      {
        name: "Probability & Inferential Statistics",
        topics: ["Random Variables & Expectation", "Normal, Bernoulli & Poisson Distributions", "Bayes' Theorem & Conditional Probabilities", "Maximum Likelihood Estimation (MLE)"]
      }
    ]
  },
  {
    id: "track-3",
    number: "03",
    title: "Data Science & Machine Learning from Scratch to Pro",
    shortDesc: "Transform raw data into predictive intelligence with standard industry tabular algorithms and rigorous evaluation.",
    badge: "Applied ML",
    duration: "5 Weeks",
    level: "Intermediate",
    tools: ["Pandas", "Scikit-Learn", "Seaborn", "XGBoost", "LightGBM"],
    project: "Predictive Campus Placement & Academic Performance Engine",
    projectDesc: "Clean real institutional dataset, engineer high-impact features, train competing classification models, tune hyperparameters, and deploy an inference pipeline.",
    modules: [
      {
        name: "Exploratory Data Analysis (EDA) & Wrangling",
        topics: ["Data Ingestion & Cleaning in Pandas", "Handling Missing Values, Outliers & Skewness", "Feature Encoding (One-Hot, Ordinal, Target)", "Statistical Visualizations with Seaborn"]
      },
      {
        name: "Supervised Learning Algorithms",
        topics: ["Linear & Polynomial Regression", "Logistic Regression & Decision Boundaries", "Decision Trees, Bagging & Random Forests", "Gradient Boosted Trees (XGBoost & LightGBM)"]
      },
      {
        name: "Unsupervised Learning & Clustering",
        topics: ["K-Means Clustering & Elbow Method", "Principal Component Analysis (PCA)", "Hierarchical Clustering & Anomaly Detection"]
      },
      {
        name: "Model Validation & Production Metrics",
        topics: ["Cross-Validation Strategies", "Precision, Recall, F1-Score & ROC-AUC", "Hyperparameter Tuning (GridSearch & Optuna)", "Model Serialization & Pickle/Joblib Exports"]
      }
    ]
  },
  {
    id: "track-4",
    number: "04",
    title: "Deep Learning & Neural Network Architectures",
    shortDesc: "Build multi-layer perceptrons, convolutional vision networks, and sequence models using modern PyTorch.",
    badge: "Deep Learning",
    duration: "5 Weeks",
    level: "Advanced",
    tools: ["PyTorch", "Torchvision", "CUDA / Google Colab", "TensorBoard", "Weights & Biases"],
    project: "Real-Time Computer Vision Defect & Object Recognition System",
    projectDesc: "Train custom convolutional neural network with transfer learning on a specialized dataset, optimizing inference speed on GPU/Edge hardware.",
    modules: [
      {
        name: "Perceptrons & Multi-Layer Networks",
        topics: ["Artificial Neurons & Activation Functions (ReLU, GELU, Softmax)", "Forward Pass & Loss Calculation (MSE, Cross-Entropy)", "Backpropagation & AutoDiff in PyTorch", "Optimizers (SGD, Adam, AdamW, Learning Rate Schedules)"]
      },
      {
        name: "Convolutional Neural Networks (CNNs)",
        topics: ["Convolution Kernels, Stride & Padding", "Pooling Layers & Feature Hierarchy", "Modern Vision Backbones (ResNet, EfficientNet)", "Data Augmentation & Regularization (Dropout, BatchNorm)"]
      },
      {
        name: "Sequence Modeling & Foundations of Attention",
        topics: ["Recurrent Neural Networks (RNN) & LSTMs", "Vanishing Gradient Problem in Sequences", "Introduction to Self-Attention Mechanisms", "Embedding Layers & Positional Encoding"]
      }
    ]
  },
  {
    id: "track-5",
    number: "05",
    title: "Foundation Models, Generative AI & RAG",
    shortDesc: "Master Transformer models, prompt engineering, vector databases, and production Retrieval-Augmented Generation.",
    badge: "GenAI & LLMs",
    duration: "4 Weeks",
    level: "Advanced / Cutting-Edge",
    tools: ["Gemini 2.5 API", "OpenAI / Claude APIs", "LangChain", "ChromaDB", "FAISS", "HuggingFace"],
    project: "University Syllabus & Campus Knowledge Assistant with RAG",
    projectDesc: "Ingest thousands of pages of college handbooks and notes into a vector database, build hybrid search retrieval, and generate cited, hallucination-free answers.",
    modules: [
      {
        name: "Transformer Architectures & Attention",
        topics: ["Multi-Head Self-Attention Explained", "Encoder-Only vs Decoder-Only Models", "Tokenization (BPE, WordPiece)", "Context Windows & KV Caching"]
      },
      {
        name: "Professional Prompt Engineering & Structured Outputs",
        topics: ["Zero-Shot, Few-Shot & Chain-of-Thought Prompting", "System Prompts & Persona Steering", "Structured JSON Schema Generation", "Prompt Injection & Safety Guardrails"]
      },
      {
        name: "Vector Databases & Semantic Embeddings",
        topics: ["Dense Vector Representations & Cosine Similarity", "Chunking Strategies (Recursive, Semantic)", "Vector Indexing in ChromaDB & FAISS", "Metadata Filtering & Hybrid Search"]
      },
      {
        name: "Production RAG Architecture",
        topics: ["Query Rewriting & Multi-Query Expansion", "Re-ranking Models (Cohere / Cross-Encoders)", "Context Compression & Token Optimization", "Evaluation Metrics for RAG (Faithfulness, Relevance)"]
      }
    ]
  },
  {
    id: "track-6",
    number: "06",
    title: "Autonomous AI Agents & Full-Stack Cloud Deployment",
    shortDesc: "Orchestrate multi-agent autonomous teams, integrate FastAPI backends with React frontends, and deploy live to the cloud.",
    badge: "Product Engineering",
    duration: "5 Weeks",
    level: "Mastery & Production",
    tools: ["CrewAI", "LangGraph", "FastAPI", "React", "Tailwind CSS", "Docker", "Render / Vercel"],
    project: "Autonomous Multi-Agent Collaborative Research & Deployment Hub",
    projectDesc: "Deploy a team of collaborative AI agents (Researcher, Coder, Critic, Documenter) with a real-time reactive UI, streamed responses, and public cloud URL.",
    modules: [
      {
        name: "Autonomous Agent Architectures",
        topics: ["ReAct Framework (Reasoning + Acting)", "Multi-Agent Orchestration with CrewAI & LangGraph", "Tool Calling & External API Execution", "Short-Term & Long-Term Agent Memory Loops"]
      },
      {
        name: "High-Performance Backend API with FastAPI",
        topics: ["Asynchronous Request Handling in Python", "Pydantic Data Validation & Schemas", "Server-Sent Events (SSE) & Token Streaming", "Background Tasks & Rate Limiting"]
      },
      {
        name: "Modern Frontend Integration in React",
        topics: ["Connecting React to Async AI Endpoints", "Streaming Markdown & Code Block Renderers", "Optimistic UI Updates & Error Boundaries", "State Management & Responsive Design"]
      },
      {
        name: "Production Deployment & ₹0 Cloud Hosting",
        topics: ["Containerization with Docker", "Continuous Deployment via GitHub Actions", "Zero-Cost Hosting on Vercel, Render & HuggingFace", "Monitoring, Logging & Cost Optimization"]
      }
    ]
  }
];
