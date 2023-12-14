const INSTRUCTIONS = {
        mission_statement: {

            statement: "Your mission statement is a concise explanation of the organization's reason for existence.",

            instruction: "Generate a 1-2 sentence mission statement for my business that reflects our purpose, values, and goals. Our business is [insert brief description of the business] and we aim to [insert desired outcome or impact of the business]. Please use clear and concise language that conveys our unique value proposition and resonates with our target audience.",

            reply: "It describes the organization's purpose and its overall intention. The mission statement supports the vision and serves to communicate purpose and direction to employees, customers, vendors and other stakeholders."

        },
        vision_statement: {

            statement: "What is your ideal long-term business goal, where are you going?",

            instruction: "Create a 1-2 sentence vision statement for my business that outlines our long-term aspirations and sets a compelling direction for our future. Our business is [insert brief description of the business] and we envision a future where [insert desired state or outcome for the business]. Please use inspiring and forward-thinking language that captures our ambitions and inspires our team, partners, and customers.",

            reply: "Your vision statement looks forward and creates a mental image of the ideal state that the organization wishes to achieve. It is inspirational and aspirational and should challenge employees."

        },
        value_statement: {

            statement: "Why would a customer choose your product or service?",

            instruction: "Craft a 1-2 sentence values statement for my business that articulates our core beliefs, principles, and ethics. Our business is [insert brief description of the business] and we are committed to [insert key values or guiding principles that define our company culture]. Please use authentic and meaningful language that reflects our organization's identity and guides our actions, decisions, and interactions with stakeholders.",

            reply: "Your values statement lists the core principles that guide and direct the organization and its culture. In a values-led organization, the values create a moral compass for the organization and its employees. It guides decision-making and establishes a standard against which actions can be assessed. For example, if one of the core values is based around “Responsibility,” the example could be something like “We take ownership in our work each and every day.” This helps everyone across the business understand exactly what the value statement looks like in action."

        },
        market_size: {
            statement: "Define the estimated size of the market/industry.",
            instruction: "What is the market size for business in the [insert your business’s industry] industry in the US. The estimated market size will be used to inform our business plan and growth strategy.",
        },

        target_market: {

            statement: "What group of potential customers can you identify to sell products or services?",

            instruction: "Define our target market for our business, which is [insert brief description of the business]. What group of potential customers can you identify to sell products or services?",


            reply: "A target market is a specific, well-defined segment of consumers that a company plans to target with its products, services and marketing activities. Target marketing orients all of the various components of the marketing function toward a single group, maximizing the appeal of brands to specific markets. Example: Women who like fine art."
        },
        target_audience: {
            statement: "Who are your ideal customers who will buy it?",

            instruction: "Define our target audience for our business, which is [insert brief description of the business]. Please provide a comprehensive profile of our ideal customer(s), including their demographics, psychographics, behaviors, preferences, and pain points. Consider factors such as age, gender, location, interests, values, motivations, purchasing habits, and any other relevant characteristics. This information will be used to better understand and connect with our customers, tailor our marketing messages, and create products/services that resonate with our target audience.",

            reply: "Define who your target audience is, where you will find customers, how you will reach them and, most importantly, how you will deliver your product or service to them. Provide a deep analysis of your ideal customer and how your business provides a solution for them. Example: Women who like fine art between the age of 30-35 living in New York."

        },
        pain_points: {
            statement: "What specific problem are customers of your business experiencing? List 3.",

            instruction: "Identify the top 3 pain points of our target audience for our business, which is [insert brief description of the business]. Please provide insights into the challenges, problems, or unmet needs that our target audience is facing, and that our products/services can potentially address. Consider factors such as customer feedback, market research, industry trends, and other relevant sources of information. Understanding the pain points of our target audience will help us better tailor our offerings and provide value-added solutions that meet their needs.",

            reply: "Focus on your customers’ perspective – and needs. What problem are you solving? What pain points will you resolve for your customers?"

        },
        solution: {
            statement: "What specific problem are customers of your business experiencing? List 3.",

            instruction: "Generate 3 potential solutions to the pain points of our target audience for our business, which is [insert brief description of the business]. Based on our understanding of our target audience's challenges and needs, please provide innovative and practical solutions that our products/services can offer. Consider factors such as the unique value proposition of our business, our strengths, resources, and expertise, and how our offerings can effectively address the pain points of our target audience. These solutions will guide our product/service development and marketing strategies to better serve our customers.",

            reply: "Demonstrate how your product or service solves the pain points of your customers"

        },
        competitive_analysis: {
            statement: "Who are your competitors? What is your competitive advantage?",

            instruction: "Conduct a competitive analysis for our business, which is [insert brief description of the business]. Please provide insights into our competitors, their strengths, weaknesses, opportunities, and threats (SWOT analysis). Include information on their products/services, pricing, marketing strategies, market share, customer base, and any other relevant factors. Also, identify potential competitive advantages that our business can leverage. The competitive analysis will help us better understand our competitive landscape and inform our business strategies to gain a competitive edge in the market.",

            reply: "What are the key factors to being successful in your industry?"

        },
        competitive_advantage: {
            statement: "What specific problem are customers of your business experiencing? List 3.",

            instruction: "Identify the competitive advantage of our business, which is [insert brief description of the business]. Please provide insights into the unique strengths, capabilities, resources, or value proposition that sets our business apart from competitors. Consider factors such as our unique selling proposition (USP), proprietary technology, brand reputation, customer relationships, cost leadership, differentiation, or innovation. The competitive advantage analysis will help us understand and leverage our unique strengths to gain a competitive edge and achieve business success in the market.",

            reply: "Explain what makes your product a better choice than your competitors. Mention market estimations and introduce the competitive landscape."

        },
        products_and_services: {
            statement: "Describe the product or service offered to the customer, focus on your customers’ perspective and needs.  Including what your product/service do, how they differ from your competitors' and what benefits they provide to your potential customers.",

            instruction: "Generate product and service ideas for our business, which is [insert brief description of the business]. Please provide innovative and practical ideas for new products or services that align with our business goals, target market, and customer needs. Consider factors such as market trends, customer feedback, industry gaps, and competitive analysis to generate ideas that have market potential and meet our business objectives. The generated ideas will help us explore new opportunities, expand our offerings, and stay competitive in the market.",

            reply: ""

        },
        pricing_strategy: {
            statement: "How will you price your product or service so that the price remains competitive while still allowing you to make a good profit?",

            instruction: "Develop a pricing strategy for our business, which is [insert brief description of the business]. How will you price your product or service so that the price remains competitive while still allowing you to make a good profit?",

            reply: "Example, Premium, Everyday low prices, frequent sale prices, meet competitor prices, etc. How will you compare with competition and how will they respond, why will customers pay your price, what will be your credit or payment terms"

        },
        place_distribution_sales_plan: {
            statement: "Indicate where your business will sell its products or services, and how it will get those products or services to consumers.",

            instruction: "Develop a place/distribution sales plan for our business, which is [insert brief description of the business]. Indicate where your business will sell its products or services, and how it will get those products or services to consumers. The place/distribution sales plan will help us optimize our distribution channels, enhance customer experience, and achieve our sales and distribution objectives.",

            reply: "For example, will you sell online? Will you consign your products into local stores?"

        },
        promotion_marketing_plan: {
            statement: "What methods of promotion will you use to communicate the features and benefits of your products or services to your target customers?",

            instruction: "Develop a promotion marketing plan for our business, which is [insert brief description of the business]. Please provide insights and recommendations on how we should promote our products or services to our target customers effectively. Consider factors such as marketing goals, target audience, marketing channels (e.g., digital, social media, print, events), advertising, public relations, content marketing, influencer marketing, email marketing, and promotions. Also, provide recommendations on budget allocation, messaging, creative elements, timing, and measurement metrics. The promotion marketing plan will help us optimize our marketing efforts, drive brand awareness, attract customers, and achieve our marketing objectives.",

            reply: "Will you advertise? If so, where? What percentage of advertising will be handled by each advertising option? How much business do you anticipate each form of advertising will result in? How much is this all going to cost?"

        },
        people: {
            statement: "Decide on the people who will provide sales and service that will be used in marketing your products or services to the customer",

            instruction: "Develop a people plan for our business, which is [insert brief description of the business]. Please provide insights and recommendations on how we should manage our human resources effectively to achieve our business goals. Consider factors such as organizational structure, roles and responsibilities, recruitment, hiring, onboarding, training, performance management, employee engagement, retention, succession planning, and diversity and inclusion. Also, provide recommendations on compensation, benefits, policies, culture, leadership, and employee development. The people's plan will help us optimize our workforce, build a high-performing team, and achieve our business objectives.",

            reply: "Who are the people or sales team that will be selling or providing customer service, and what kind of training will they receive? Do you plan to offer any incentives to your customer service representatives and how do you plan to measure customer satisfaction?"

        },
projected_revenue: {
            statement: "Indicate where your business will sell its products or services, and how it will get those products or services to consumers.",

            instruction: "Generate a revenue projection for our business, which is [insert brief description of the business]. Please provide insights and recommendations on how our revenue is expected to evolve over the next 3 years. Consider factors such as historical sales data, market trends, pricing strategy, customer acquisition, customer retention, product or service demand, seasonality, and industry benchmarks. Also, provide recommendations on revenue drivers, sales goals, pricing adjustments, marketing strategies, and expansion opportunities. The revenue projection will help us make informed decisions, set realistic targets, and monitor our financial performance to achieve our revenue objectives.",

            reply: "For example, will you sell online? Will you consign your products into local stores?"

        },
projected_expenses: {
            statement: "How much will you spend every year?",

            instruction: "Generate an expense projection for our business, which is [insert brief description of the business]. Please provide insights and recommendations on how our expenses are expected to evolve over the next 3 years. Consider factors such as historical expense data, anticipated cost increases, inflation, staffing costs, overheads, marketing expenses, inventory costs, production costs, and other relevant costs specific to the business. Also, provide recommendations on expense reduction strategies, cost control measures, and cost optimization opportunities. The expense projection will help us plan and manage our expenses effectively, optimize our cost structure, and monitor our financial performance to achieve our expense management objectives.",

            reply: ""

        },
projected_profit: {
            statement: "How much will you have after expenses are subtracted from revenue?",

            instruction: "Generate a profit projection for our business, which is [insert brief description of the business]. Please provide insights and recommendations on how our profits are expected to evolve over the next 3 years. Consider factors such as projected revenue, projected expenses, gross profit margins, net profit margins, cost of goods sold, operating expenses, taxes, interest, depreciation, and other relevant financial metrics. Also, provide recommendations on profit improvement strategies, pricing strategies, cost optimization opportunities, and revenue growth initiatives. The profit projection will help us set realistic profit targets, monitor our financial performance, and make informed decisions to achieve our profitability objectives.",

            reply: ""

        },
funding_needs: {
            statement: "How much money do you need to both start and operate your business? How will you use the money?",

            instruction: "Assess our funding needs for our business, which is [insert brief description of the business]. Please provide insights and recommendations on how much funding we may require to start, operate, or expand our business. Consider factors such as startup costs, working capital requirements, fixed and variable expenses, capital expenditures, marketing expenses, salaries and wages, inventory costs, rent or lease payments, loan repayments, interest expenses, and other relevant financial metrics. Also, provide recommendations on funding sources, such as equity financing, debt financing, grants, crowdfunding, or other funding options, and provide insights on the optimal funding mix for our business. The funding needs assessment will help us understand our capital requirements, plan our financing strategy, and ensure that we have adequate funding to support our business operations and growth.",

            reply: "Funding required is the total amount of money you need to start and operate your business for at least six months. You typically should have more funding than just the amount to start. What if the company doesn’t get the sales you initially predicted? Or a natural disaster hits such as a hurricane or pandemic? Does your business have enough funds saved up to get through a difficult time?"

        }
        
        
}