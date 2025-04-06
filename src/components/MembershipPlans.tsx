
import { Check } from 'lucide-react';

const plans = [
  {
    title: "Premium Membership",
    price: "₹2,499",
    period: "per month",
    features: [
      "Full access to Premium Gym",
      "Personalized training program",
      "Free fitness assessment",
      "Nutrition consultation",
      "Access to all group classes",
      "Sauna & recovery facilities"
    ],
    highlighted: true
  },
  {
    title: "Women's Gym",
    price: "₹1,999",
    period: "per month",
    features: [
      "Full access to Women's Gym",
      "Women-specific training programs",
      "Female trainers available",
      "Dedicated workout spaces",
      "Women's fitness classes",
      "Monthly progress tracking"
    ],
    highlighted: false
  },
  {
    title: "Student Plan",
    price: "₹1,499",
    period: "per month",
    features: [
      "Access to Student Gym",
      "Flexible hours",
      "Basic training program",
      "Group fitness classes",
      "Student community events",
      "Study & workout spaces"
    ],
    highlighted: false
  }
];

const MembershipPlans = () => {
  return (
    <section id="membership" className="section-padding bg-rebuild-darkgray">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">MEMBERSHIP PLANS</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Choose the membership that fits your needs. All plans include our core commitment to natural training and transformation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${
                plan.highlighted 
                  ? 'border-2 border-rebuild-yellow transform scale-105' 
                  : 'border border-rebuild-gray'
              }`}
            >
              <div className={`
                p-6 text-center
                ${plan.highlighted ? 'bg-rebuild-yellow' : 'bg-rebuild-gray'}
              `}>
                <h3 className={`text-2xl font-bebas mb-1 ${plan.highlighted ? 'text-rebuild-black' : 'text-white'}`}>
                  {plan.title}
                </h3>
                <div className={`text-3xl font-bold mt-2 ${plan.highlighted ? 'text-rebuild-black' : 'text-white'}`}>
                  {plan.price}
                  <span className={`text-sm font-normal ${plan.highlighted ? 'text-rebuild-black opacity-70' : 'text-gray-300'}`}>
                    {" "}{plan.period}
                  </span>
                </div>
              </div>
              
              <div className="bg-rebuild-gray p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mt-1">
                        <Check size={16} className="text-rebuild-yellow mr-2" />
                      </div>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block text-center py-3 px-4 rounded font-bold transition-colors ${
                    plan.highlighted 
                      ? 'bg-rebuild-yellow text-rebuild-black hover:bg-yellow-400' 
                      : 'bg-rebuild-black text-white hover:bg-rebuild-lightgray'
                  }`}
                >
                  Select Plan
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white text-lg">Looking for corporate or group plans?</p>
          <a href="#contact" className="text-rebuild-yellow hover:underline">Contact us for special rates</a>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
