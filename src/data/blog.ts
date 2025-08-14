export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishedDate: string;
  image?: string;
  readTime: number; // minutes
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Right Contractor for Your Home Renovation',
    slug: 'how-to-choose-right-contractor-home-renovation',
    excerpt: 'Essential tips for finding, vetting, and hiring the perfect contractor for your next home improvement project.',
    content: `
# How to Choose the Right Contractor for Your Home Renovation

Planning a home renovation can be exciting, but choosing the right contractor is crucial for success. Here's your comprehensive guide to finding and hiring the perfect contractor for your project.

## 1. Define Your Project Scope

Before reaching out to contractors, clearly define what you want to accomplish:
- List all work that needs to be done
- Set a realistic budget range
- Establish your timeline
- Gather inspiration photos and materials preferences

## 2. Research and Get Referrals

**Ask for recommendations from:**
- Friends, family, and neighbors
- Local hardware stores
- Real estate agents
- Online review platforms

## 3. Verify Credentials

**Essential checks:**
- Valid contractor's license
- Current insurance (liability and workers' comp)
- Better Business Bureau rating
- References from recent projects

## 4. Get Multiple Quotes

Obtain at least 3 detailed quotes that include:
- Materials specifications
- Labor costs
- Timeline
- Cleanup responsibilities
- Change order procedures

## 5. Check References

Contact at least 3 recent customers:
- Quality of work
- Timeline adherence
- Communication style
- Problem resolution
- Overall satisfaction

## 6. Review the Contract Carefully

Ensure your contract includes:
- Detailed scope of work
- Materials specifications
- Timeline with milestones
- Payment schedule
- Change order procedures
- Warranty information

## Red Flags to Avoid

- Door-to-door solicitors
- Requests for full payment upfront
- No written contract
- Significantly low bids
- Pressure to sign immediately
- No local address or references

## Questions to Ask Potential Contractors

1. How long have you been in business?
2. Are you licensed and insured?
3. Who will supervise the daily work?
4. What's your typical timeline for this type of project?
5. How do you handle unexpected issues or changes?
6. What warranty do you provide?

Taking time to properly vet contractors will save you money, stress, and ensure your project is completed to your satisfaction.
    `,
    author: 'Sarah Mitchell',
    category: 'Home Improvement',
    tags: ['contractor selection', 'home renovation', 'hiring tips'],
    publishedDate: '2024-01-15',
    image: '/images/blog/choosing-contractor.jpg',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: '10 Signs You Need Electrical Work Done in Your Home',
    slug: '10-signs-you-need-electrical-work-done',
    excerpt: 'Recognize the warning signs that indicate your home needs professional electrical attention before problems become dangerous.',
    content: `
# 10 Signs You Need Electrical Work Done in Your Home

Your home's electrical system is crucial for safety and functionality. Here are key warning signs that indicate you need professional electrical work.

## 1. Frequent Circuit Breaker Trips

If your circuit breakers trip regularly, it's often a sign of:
- Overloaded circuits
- Faulty wiring
- Outdated electrical panel
- Damaged appliances

## 2. Flickering or Dimming Lights

Lights that flicker or dim when you turn on appliances may indicate:
- Overloaded circuits
- Loose wiring connections
- Inadequate electrical supply

## 3. Burning Smell

A burning odor, especially near outlets or the electrical panel, is a serious warning sign requiring immediate attention.

## 4. Outlets That Don't Work

Non-functioning outlets could indicate:
- Tripped GFCI outlets
- Loose wiring
- Damaged outlets
- Circuit problems

## 5. Hot Outlets or Switch Plates

Outlets or switches that feel warm or hot to the touch are dangerous and need immediate professional attention.

## 6. Sparks from Outlets

Any sparking from outlets when plugging in devices is a serious safety hazard.

## 7. Old or Inadequate Wiring

Homes over 20 years old may have:
- Aluminum wiring (fire hazard)
- Knob-and-tube wiring
- Insufficient capacity for modern needs

## 8. No GFCI Protection

Kitchens, bathrooms, and outdoor areas should have GFCI (Ground Fault Circuit Interrupter) protection.

## 9. Extension Cord Overuse

If you're constantly using extension cords, you likely need more outlets installed.

## 10. High Electricity Bills

Sudden spikes in electrical bills may indicate:
- Faulty wiring causing energy loss
- Overworked electrical system
- Need for energy-efficient upgrades

## When to Call a Professional

**Call an electrician immediately if you experience:**
- Any burning smells
- Sparks or electrical shocks
- Frequently tripping breakers
- Hot outlets or switches

**Schedule an electrical inspection if:**
- Your home is over 20 years old
- You're planning major renovations
- You're buying or selling a home
- You notice multiple warning signs

Don't ignore electrical problems – they can lead to fires, electrocution, or expensive damage. Always hire a licensed electrician for electrical work.
    `,
    author: 'Mike Rodriguez',
    category: 'Electrical',
    tags: ['electrical safety', 'warning signs', 'home maintenance'],
    publishedDate: '2024-01-10',
    image: '/images/blog/electrical-warning-signs.jpg',
    readTime: 6
  },
  {
    id: '3',
    title: 'Spring Plumbing Maintenance Checklist',
    slug: 'spring-plumbing-maintenance-checklist',
    excerpt: 'Prepare your plumbing system for warmer weather with this comprehensive spring maintenance checklist.',
    content: `
# Spring Plumbing Maintenance Checklist

Spring is the perfect time to give your plumbing system some attention after winter. Follow this checklist to prevent problems and ensure everything is working properly.

## Exterior Plumbing Tasks

### 1. Check Outdoor Faucets
- Turn on each outdoor faucet
- Look for leaks or drips
- Check for frost damage
- Replace washers if needed

### 2. Inspect Hose Bibs
- Remove any winter covers
- Check for cracks or damage
- Test water flow and pressure
- Reconnect garden hoses

### 3. Clear Gutters and Downspouts
- Remove debris and leaves
- Check for proper drainage
- Ensure downspouts direct water away from foundation
- Look for loose or damaged gutters

## Interior Plumbing Tasks

### 4. Test All Faucets
- Check kitchen and bathroom faucets
- Look for leaks or drips
- Test water pressure
- Clean aerators if flow is reduced

### 5. Inspect Toilets
- Check for leaks around the base
- Test flush mechanisms
- Look for cracks in tank or bowl
- Ensure toilet isn't rocking

### 6. Examine Exposed Pipes
- Look for signs of leaks
- Check pipe insulation
- Inspect pipe supports and hangers
- Note any corrosion or damage

### 7. Test Water Heater
- Check temperature setting (120°F recommended)
- Look for leaks around connections
- Test pressure relief valve
- Consider flushing if sediment buildup is suspected

### 8. Clean Drains
- Run water in all drains
- Use drain cleaner or baking soda/vinegar
- Check for slow drainage
- Install drain screens to prevent clogs

## Appliance Connections

### 9. Washing Machine
- Check hoses for bulges or cracks
- Ensure connections are tight
- Clean lint trap if applicable
- Test hot and cold water supply

### 10. Dishwasher
- Inspect connections under sink
- Check for leaks around door seals
- Clean filter and spray arms
- Run empty cycle with dishwasher cleaner

## When to Call a Professional

**Call a plumber if you find:**
- Any water leaks
- Low water pressure throughout house
- Discolored water
- Strange noises from pipes
- Water heater issues
- Sewer odors

## Prevention Tips

- Know where your main water shutoff valve is located
- Keep emergency plumber contact information handy
- Address small issues before they become big problems
- Consider annual professional inspection

Regular spring maintenance can prevent costly repairs and extend the life of your plumbing system. When in doubt, don't hesitate to call a professional plumber.
    `,
    author: 'Jennifer Chen',
    category: 'Plumbing',
    tags: ['plumbing maintenance', 'spring cleaning', 'preventive care'],
    publishedDate: '2024-01-08',
    image: '/images/blog/spring-plumbing-maintenance.jpg',
    readTime: 7
  },
  {
    id: '4',
    title: 'HVAC Energy Efficiency Tips for Triangle Homeowners',
    slug: 'hvac-energy-efficiency-tips-triangle-homeowners',
    excerpt: 'Save money on energy bills and improve comfort with these HVAC efficiency tips specifically for North Carolina climate.',
    content: `
# HVAC Energy Efficiency Tips for Triangle Homeowners

North Carolina's climate presents unique challenges for home heating and cooling. Here are practical tips to improve your HVAC system's efficiency and reduce energy costs.

## Understanding the Triangle Climate

The Triangle area experiences:
- Hot, humid summers
- Mild winters with occasional cold snaps
- High humidity year-round
- Seasonal pollen and allergens

## Summer Cooling Efficiency

### 1. Optimal Temperature Settings
- Set thermostat to 78°F when home
- Raise temperature by 7-10°F when away
- Use programmable thermostat for automatic adjustments
- Consider smart thermostats for advanced scheduling

### 2. Humidity Control
- Keep indoor humidity between 30-50%
- Use bathroom and kitchen exhaust fans
- Consider whole-house dehumidifier
- Proper humidity reduces "feels like" temperature

### 3. Air Circulation
- Use ceiling fans to create wind-chill effect
- Ensure proper airflow around outdoor unit
- Keep interior doors open for air circulation
- Install attic fans to reduce heat buildup

## Winter Heating Efficiency

### 4. Heating Temperature Settings
- Set thermostat to 68°F during day
- Lower to 60-65°F at night and when away
- Layer clothing and use blankets
- Take advantage of solar heat through south-facing windows

### 5. Seal Air Leaks
- Caulk around windows and doors
- Weatherstrip exterior doors
- Seal gaps around pipes and wires
- Consider professional energy audit

## Year-Round Maintenance

### 6. Filter Replacement
- Change filters every 1-3 months
- Use high-quality pleated filters
- Check monthly during peak seasons
- Consider HEPA filters for allergies

### 7. Professional Maintenance
- Schedule bi-annual HVAC tune-ups
- Spring check before cooling season
- Fall check before heating season
- Address issues promptly

### 8. Ductwork Inspection
- Seal duct leaks with mastic or foil tape
- Insulate ducts in unconditioned spaces
- Ensure proper ductwork sizing
- Clean ducts every 3-5 years

## System Upgrades

### 9. Energy-Efficient Equipment
- Look for ENERGY STAR certified units
- Consider heat pumps for mild climate
- Variable-speed systems for better efficiency
- Proper sizing is crucial for efficiency

### 10. Insulation and Windows
- Upgrade attic insulation to R-38 or higher
- Install energy-efficient windows
- Use window treatments to block summer sun
- Seal and insulate crawl spaces

## Smart Home Integration

### 11. Smart Thermostats
- Learn your schedule and preferences
- Remote control via smartphone
- Energy usage reports
- Integration with other smart home devices

### 12. Zoning Systems
- Heat and cool only occupied areas
- Reduce energy waste in unused rooms
- Better temperature control throughout home
- Works well with multi-story homes

## Local Considerations

### Triangle-Specific Tips:
- Plan for high pollen seasons - change filters more frequently
- Prepare for occasional ice storms affecting heat pumps
- Take advantage of Duke Energy rebates and programs
- Consider local humidity when sizing systems

## Signs You Need Professional Help

**Call an HVAC professional if:**
- Energy bills suddenly increase
- Uneven temperatures throughout home
- System runs constantly
- Strange noises or odors
- Poor air quality

## Cost-Saving Programs

**Take advantage of:**
- Duke Energy rebates for efficient equipment
- Federal tax credits for qualifying systems
- Local utility weatherization programs
- Energy audit incentives

Implementing these efficiency tips can reduce your energy bills by 15-30% while improving comfort. Start with simple, low-cost measures and consider professional upgrades for maximum savings.
    `,
    author: 'David Thompson',
    category: 'HVAC',
    tags: ['energy efficiency', 'HVAC tips', 'Triangle area', 'cost savings'],
    publishedDate: '2024-01-05',
    image: '/images/blog/hvac-efficiency-tips.jpg',
    readTime: 10
  }
];