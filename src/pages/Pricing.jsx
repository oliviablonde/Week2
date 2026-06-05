// Pricing.jsx — A PAGE COMPONENT
// Pages live in the "pages" folder and represent entire screens in the app.
// This page assembles PricingCard components and passes data to them.
// In Next.js, each file in the "pages" or "app" folder automatically becomes a route (URL).

// Import the PricingCard component from the components folder
import PricingCard from '../components/PricingCard/PricingCard';
import './Pricing.css';

function Pricing() {
    // DATA — each object holds all the content for one pricing card
    // Changing this data automatically updates what the cards display
    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };
    const teamsPlan = {
        title: 'Teams',
        priceAmount: '$40',
        pricePeriod: '/user/mo.',
        includesText: 'Everything in Individual, plus:',
        features: [
            'Team marketplace for internal rules, skills, and plugins',
            'Team marketplace for internal rules, skills, and plugins',
            'Agentic code reviews with Bugbot',
            'Cloud agents and automations with shared team context',
        ],
        buttonText: 'Get Teams',
        buttonVariant: 'primary',
    };
    const enterprisePlan = {
        title: 'Enterprise',
        priceAmount: 'Custom',
        pricePeriod: null,
        includesText: 'Everything on Teams, Plus.',
        features: [
            'Pooled usage to maximize budget efficiency',
            'Invoice/PO billing',
            'SCIM seat management',
            'Repository, model, and MCP access controls',
            'Auto-run, browser, and network controls',
            'Audit logs and service accounts',
            'AI code tracking API',
            'Priority support and account management',
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'tertiary',
    };

    return (
        // <> is a React Fragment — groups elements without adding extra HTML divs
        <>
            <p className="page-label"><strong>React App</strong> — running with Vite</p>
            <div className="cards-container">
                {/* The spread operator {...hobbyPlan} passes all object properties as individual props */}
                {/* This is the same as: title="Hobby" priceAmount="Free" includesText="Includes:" etc. */}
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
                <PricingCard {...teamsPlan} />
                <PricingCard {...enterprisePlan} />
            </div>
        </>
    );
}

export default Pricing;
