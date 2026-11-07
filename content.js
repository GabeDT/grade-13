/* Content lives separately from the UI so new lessons can be added without changing templates. */
const subjects = [
  { id: 'finance', name: 'Finance', icon: '$', intro: 'Money is a tool. Learn the basics that make it easier to use with confidence.', topics: ['Getting started', 'Saving', 'Investing', 'Canadian accounts'], tone: 'finance' },
  { id: 'career', name: 'Career', icon: '↗', intro: 'Find your direction, build useful skills and make work fit your life.', topics: ['Direction', 'Workplace skills', 'Growth'], tone: 'career' },
  { id: 'health', name: 'Health', icon: '✦', intro: 'A practical, no-shame guide to caring for your body and energy.', topics: ['Movement', 'Food', 'Sleep'], tone: 'health' },
  { id: 'relationships', name: 'Relationships', icon: '♡', intro: 'Build healthier connections through clearer communication and care.', topics: ['Communication', 'Friendship', 'Dating'], tone: 'relationships' },
  { id: 'life-skills', name: 'Life Skills', icon: '⌂', intro: 'The systems and decisions that make everyday adulthood less mysterious.', topics: ['Housing', 'Insurance', 'Decisions'], tone: 'skills' },
  { id: 'mindset', name: 'Mindset & Productivity', icon: '◒', intro: 'Make room for focused work, useful habits and meaningful progress.', topics: ['Habits', 'Focus', 'Learning'], tone: 'mindset' }
];

const articles = [
  {
    slug: 'personal-finance-where-to-start', subject: 'finance', topic: 'Getting started', minutes: 6, featured: true, added: '2026-11-07',
    title: 'Understanding personal finance: Where do you start?',
    description: 'A simple way to look at your money before you worry about investing, credit scores or the “perfect” budget.',
    keywords: ['budget', 'money basics', 'cash flow', 'saving', 'financial goals'],
    intro: 'Personal finance can sound like it requires a spreadsheet, a side hustle and a very strong opinion about credit cards. It does not. It starts with knowing what comes in, what goes out and what you want your money to make possible.',
    sections: [
      { heading: 'Start with the three jobs of money', body: '<p>Every dollar you receive can do one of three things: cover life today, prepare for a known future cost, or give future-you more options. There is no prize for doing all three perfectly right away.</p><ul><li><strong>Today:</strong> rent, groceries, transportation and bills.</li><li><strong>Soon:</strong> a trip, tuition, a phone replacement or annual insurance.</li><li><strong>Later:</strong> an emergency fund, retirement or a goal that is years away.</li></ul>' },
      { heading: 'Find your starting number', body: '<p>For one month, write down your take-home income and your spending. Your starting number is simply income minus spending. A positive number gives you choices; a negative one is useful information, not a personal failure.</p><div class="article-example"><b>Example</b><p>Sam brings home $2,400 a month and spends $2,150. Their first opportunity is the $250 gap—not an elaborate investment plan.</p></div>' },
      { heading: 'Choose one next move', body: '<p>Pick the smallest useful action: automate $25 into savings, list your subscriptions, or set a weekly spending check-in. Small systems beat grand plans you abandon in February.</p>' }
    ],
    takeaways: ['Personal finance is about choices, not being “good” at math.', 'Track one ordinary month before changing everything.', 'Build from your cash-flow gap, however small it is.']
  },
  {
    slug: 'build-an-emergency-fund', subject: 'finance', topic: 'Saving', minutes: 7, featured: true, added: '2026-11-06',
    title: 'How to build an emergency fund', description: 'A calm, realistic plan for creating a financial buffer—even if you are starting with very little.', keywords: ['emergency savings', 'high interest savings', 'unexpected expense', 'buffer'],
    intro: 'An emergency fund is money set aside for the parts of life you cannot schedule: a broken laptop, a dental bill, a job gap or an urgent trip. Its job is not to earn the highest return. Its job is to be there when you need it.',
    sections: [
      { heading: 'What counts as an emergency?', body: '<p>Think “important, unplanned and hard to delay.” A sale, a concert or a predictable annual bill are not emergencies. Separating surprises from wants helps you protect this money when temptation shows up.</p>' },
      { heading: 'Pick a first target, then a fuller one', body: '<p>A common long-term target is three to six months of essential expenses. That can feel enormous, so start with a smaller milestone: $500 or one month of essentials. Momentum matters.</p><ol><li>Add up your must-pay monthly costs.</li><li>Choose a first milestone that feels challenging but possible.</li><li>Set up an automatic transfer after payday.</li></ol>' },
      { heading: 'Keep it boring and easy to reach', body: '<p>For Canadians, a high-interest savings account is usually a sensible home for emergency money: it is separate from spending, accessible, and eligible deposits at member institutions may be protected by CDIC coverage limits. Check your provider’s details before relying on that protection.</p><div class="article-example"><b>Try this</b><p>If $50 per payday is manageable, automate it. Treat it like a bill to your future self.</p></div>' }
    ], takeaways: ['An emergency fund buys time and choices.', 'A smaller first goal is still a real fund.', 'Use a separate, accessible savings account.']
  },
  {
    slug: 'how-investing-actually-works', subject: 'finance', topic: 'Investing', minutes: 8, featured: true, added: '2026-11-05',
    title: 'How investing actually works', description: 'The plain-English version of what happens after you put money into an investment.', keywords: ['stocks', 'bonds', 'compound growth', 'ETF', 'investing basics'],
    intro: 'Investing means putting money into assets that may grow or produce income over time. It is not a guarantee, a shortcut or a personality type. It is one way to give long-term money a chance to do more than sit in cash.',
    sections: [
      { heading: 'You are buying a piece of something', body: '<p>A stock is a small ownership piece of a company. A bond is money you lend to a government or company. A fund can hold many stocks and bonds at once. An ETF is a fund that trades on an exchange, much like a stock.</p>' },
      { heading: 'Growth needs time', body: '<p>Returns can come from an asset rising in value, dividends, or interest. The important word is <em>can</em>: markets move in both directions, especially in the short term. Time gives you more room to ride out ordinary volatility.</p><div class="article-example"><b>Example</b><p>Money needed for rent next month should stay in cash. Money for a goal 15 years away may have more time to recover from market drops.</p></div>' },
      { heading: 'Diversification is a seatbelt, not a crystal ball', body: '<p>Owning a broad mix of investments means one company or sector matters less to your whole plan. It cannot remove risk, but it can reduce the damage from putting all your hopes in one bet.</p>' }
    ], takeaways: ['Investing is ownership or lending, not magic.', 'Short-term needs and long-term goals deserve different homes.', 'Diversification reduces concentration risk.']
  },
  {
    slug: 'tfsa-fhsa-rrsp-differences', subject: 'finance', topic: 'Canadian accounts', minutes: 9, featured: true, added: '2026-11-04',
    title: 'TFSA vs. FHSA vs. RRSP: Understanding the differences', description: 'A beginner-friendly comparison of three Canadian registered accounts and the jobs they are designed to do.', keywords: ['Canada', 'TFSA', 'FHSA', 'RRSP', 'registered accounts', 'retirement', 'first home'],
    intro: 'A TFSA, FHSA and RRSP are not investments themselves. They are account types—containers with different tax rules. Inside them, you may hold cash, GICs, mutual funds, ETFs or other investments, depending on the provider.',
    sections: [
      { heading: 'The short version', body: '<ul><li><strong>TFSA:</strong> contributions are not deducted from income; qualified withdrawals are generally tax-free. Useful for many goals.</li><li><strong>FHSA:</strong> designed for eligible first-time home buyers; contributions may be deductible and qualifying home withdrawals are tax-free.</li><li><strong>RRSP:</strong> contributions may reduce taxable income now; withdrawals are generally taxable later, with special programs such as the Home Buyers’ Plan having their own rules.</li></ul>' },
      { heading: 'Choose based on the goal and your tax picture', body: '<p>If flexibility matters most, a TFSA is often the simplest starting point. If you are an eligible first-time buyer, an FHSA can be especially valuable. An RRSP can be compelling when your current taxable income is higher than you expect it to be in retirement.</p><div class="article-example"><b>A note on limits</b><p>Contribution room and program rules change. Check your CRA account and current government guidance before contributing or withdrawing.</p></div>' },
      { heading: 'Avoid the “best account” trap', body: '<p>The best account is the one that matches your goal, timeline and current situation. You do not need every account before you start saving.</p>' }
    ], takeaways: ['These accounts are containers, not investments.', 'TFSA flexibility, FHSA home-buying rules and RRSP tax deferral serve different jobs.', 'Check your personal contribution room before acting.']
  },
  {
    slug: 'risk-and-investment-time-horizons', subject: 'finance', topic: 'Investing', minutes: 6, featured: false, added: '2026-11-03',
    title: 'Understanding risk and investment time horizons', description: 'How to match the risk you take with the date you will actually need your money.', keywords: ['risk tolerance', 'time horizon', 'market volatility', 'investing'],
    intro: 'Investment risk is not just how much a chart wiggles. It is the chance that your money is worth less when you need it. Your time horizon—the date a goal needs its money—changes what “too risky” looks like.',
    sections: [
      { heading: 'Time changes the question', body: '<p>For a goal next year, a market drop could force you to sell at a bad time. For a retirement goal decades away, a drop may be uncomfortable but less immediately damaging. That is why “your friend invests this way” is not a plan.</p>' },
      { heading: 'Know your three kinds of comfort', body: '<ul><li><strong>Need:</strong> can you afford losses on this money?</li><li><strong>Time:</strong> when will you spend it?</li><li><strong>Temperament:</strong> could you stay invested during a downturn?</li></ul><p>An option is only suitable if all three line up.</p>' },
      { heading: 'Make a simple bucket list', body: '<p>Label each goal with a date: near-term (0–3 years), medium-term (3–7 years), or long-term (7+ years). This does not choose investments for you, but it makes the right questions visible.</p>' }
    ], takeaways: ['Risk includes needing money during a downturn.', 'A goal’s date matters as much as its return potential.', 'Separate short-term cash needs from long-term investing.']
  },
  {
    slug: 'choose-your-first-investment-platform', subject: 'finance', topic: 'Investing', minutes: 7, featured: false, added: '2026-11-02',
    title: 'How to choose your first investment platform', description: 'A practical checklist for comparing Canadian investment platforms without getting lost in marketing.', keywords: ['brokerage', 'robo advisor', 'fees', 'platform', 'Canada'],
    intro: 'The “best” platform depends on what you need help with. A good first platform should make the next sensible step easy—not pressure you into trading more often than your plan requires.',
    sections: [
      { heading: 'Start with the level of support you want', body: '<p>A robo-advisor typically builds and manages a portfolio based on your answers. A self-directed brokerage lets you choose investments yourself. A bank or credit union may offer guided options. None is automatically better; choose the support you will actually use.</p>' },
      { heading: 'Compare the things that affect your real experience', body: '<ul><li>Account and trading fees, plus management fees on investments.</li><li>Available account types, such as TFSA, FHSA and RRSP.</li><li>How easy it is to move money, find statements and get help.</li><li>Security features and whether the firm is registered with appropriate Canadian regulators.</li></ul>' },
      { heading: 'Do a small dry run', body: '<p>Read the fee schedule, open only the account you understand, and start with an amount that lets you learn calmly. If you are unsure about suitability or tax consequences, a qualified professional can help.</p>' }
    ], takeaways: ['Choose the amount of guidance you genuinely want.', 'Fees and account availability matter more than flashy features.', 'Start slowly enough to understand what you are doing.']
  }
];

