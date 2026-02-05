# GDSC Outreach - Boilerplate Template

**Minimal React + Vite boilerplate with routing and navigation setup.**

This template provides only the basic structure. Your teams will implement all the core functionality.

---

## 🎯 What's Included

✅ **Project structure** (folders organized)  
✅ **Vite + React setup** (dev server configured)  
✅ **React Router** (navigation between pages)  
✅ **Tailwind CSS** (utility-first styling)  
✅ **Navbar component** (navigation bar with active states)  
✅ **2 empty pages** (Dashboard, Compose)  
✅ **Firebase config template** (ready to add your credentials)  

❌ **NO business logic** - students implement everything  
❌ **NO mock data** - teams build from scratch  
❌ **NO Firebase integration** - teams set it up  
❌ **NO AI functionality** - Team 2 implements  

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to `http://localhost:5173`

You should see:
- Navigation bar with "Dashboard" and "Compose" links
- Empty Dashboard page
- Empty Compose page

---

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx           # Navigation bar (complete)
├── pages/
│   ├── Dashboard.jsx        # TODO: Implement nonprofit listing
│   └── Compose.jsx          # TODO: Implement email generation
├── lib/
│   └── firebase.js          # TODO: Add Firebase credentials
├── App.jsx                  # Routing setup (complete)
├── main.jsx                 # Entry point (complete)
└── index.css                # Global styles (complete)
```

---

## 👥 Team Responsibilities

### **Team 1 (Scraper) - Backend**

**YOUR TASKS:**

1. **Build Web Scraper**
   - Use Playwright to scrape nonprofit websites
   - Extract: name, mission, category, website, contact info
   - Run scraper on schedule (weekly)

2. **Firebase Integration**
   - Set up `nonprofits` collection in Firestore
   - Define data schema
   - Write scraped data to Firebase

3. **Data Structure Example:**
```javascript
// Firestore collection: nonprofits
{
  id: "auto-generated",
  name: "Local Food Bank",
  mission: "Fighting hunger in our community",
  category: "Hunger & Homelessness",
  website: "https://example.org",
  email: "contact@example.org",
  status: "new",  // new | contacted | responded
  scraped_at: timestamp
}
```

**FILES YOU'LL CREATE:**
- `functions/scraper.py` (Playwright scraper)
- `functions/main.py` (Cloud Functions)
- Firebase deployment config

**RESOURCES:**
- Playwright docs: https://playwright.dev/python/
- Firebase Admin SDK: https://firebase.google.com/docs/admin/setup

---

### **Team 2 (AI) - Email Generation**

**YOUR TASKS:**

1. **Implement Email Generation**
   - Use plain Python + OpenAI/Anthropic API
   - Generate personalized emails based on nonprofit data
   - NO frameworks needed (LangChain is overkill)

2. **Create API Endpoint**
   - Build Firebase Cloud Function or simple Flask API
   - Endpoint: `POST /api/generate-email`
   - Input: `{ nonprofit_id: "123" }`
   - Output: `{ email: "...", score: 8 }`

3. **Example Implementation:**
```python
# functions/email_agent.py
import anthropic  # or openai

client = anthropic.Anthropic(api_key="...")

def generate_email(nonprofit):
    """Generate personalized cold email"""
    
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1000,
        messages=[{
            "role": "user",
            "content": f"""Write a cold email to {nonprofit['name']}.
            
            Their mission: {nonprofit['mission']}
            
            GDSC can offer:
            - Free website development
            - Mobile app creation
            - Tech training
            
            Keep under 150 words. Be specific to their mission."""
        }]
    )
    
    return message.content[0].text

def score_email(email_text):
    """Score email quality 1-10"""
    # Similar API call to rate the email
    pass
```

**FILES YOU'LL CREATE:**
- `functions/email_agent.py` (AI logic)
- `functions/main.py` (API endpoint)
- Prompt templates

**RESOURCES:**
- Anthropic API: https://docs.anthropic.com/
- OpenAI API: https://platform.openai.com/docs

---

### **Team 3 (Frontend) - React Dashboard**

**YOUR TASKS:**

1. **Dashboard Page** (`src/pages/Dashboard.jsx`)
   - Fetch nonprofits from Firebase
   - Display in grid layout
   - Add search functionality
   - Add filter buttons (All, New, Contacted, Responded)
   - Show statistics

2. **Compose Page** (`src/pages/Compose.jsx`)
   - Fetch nonprofit data by ID
   - Display nonprofit information
   - Add "Generate Email" button (calls Team 2's API)
   - Create email editor (subject + body)
   - Add save/send functionality

3. **Example Firebase Integration:**
```jsx
// Dashboard.jsx
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

function Dashboard() {
  const [nonprofits, setNonprofits] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'nonprofits'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNonprofits(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {nonprofits.map(org => (
        <div key={org.id} className="bg-white p-6 rounded-lg shadow">
          <h3>{org.name}</h3>
          <p>{org.mission}</p>
          <button onClick={() => navigate(`/compose/${org.id}`)}>
            Generate Email
          </button>
        </div>
      ))}
    </div>
  );
}
```

**FILES YOU'LL EDIT:**
- `src/pages/Dashboard.jsx` (implement listing)
- `src/pages/Compose.jsx` (implement email editor)
- `src/lib/firebase.js` (add your Firebase config)

**OPTIONAL COMPONENTS TO CREATE:**
- `src/components/NonprofitCard.jsx`
- `src/components/SearchBar.jsx`
- `src/components/FilterButtons.jsx`

**RESOURCES:**
- Firebase Web SDK: https://firebase.google.com/docs/web/setup
- React Query (optional): https://tanstack.com/query/latest

---

## 🔧 Setup Instructions

### **Firebase Setup (All Teams)**

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com
   - Click "Add project"
   - Name it "gdsc-outreach"

2. **Enable Firestore**
   - In Firebase Console, go to "Firestore Database"
   - Click "Create database"
   - Start in test mode (we'll add security rules later)

3. **Add Web App**
   - In Project Settings, scroll to "Your apps"
   - Click web icon (</>)
   - Register app with nickname "GDSC Outreach Web"
   - Copy the firebaseConfig object

4. **Update Firebase Config**
   - Open `src/lib/firebase.js`
   - Uncomment the code
   - Paste your firebaseConfig values

5. **Install Firebase in Frontend**
```bash
npm install firebase
```

### **Team 1: Cloud Functions Setup**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize functions
firebase init functions
# Choose Python runtime

# Install dependencies
cd functions
pip install playwright firebase-admin anthropic
```

### **Team 2: API Setup**

Option A: Use Firebase Cloud Functions (same as Team 1)
Option B: Separate Flask API

```bash
# If using Flask
pip install flask anthropic firebase-admin
```

---

## 🎓 Learning Resources

### React Basics
- Official Tutorial: https://react.dev/learn
- React Router: https://reactrouter.com/en/main/start/tutorial

### Firebase
- Firestore Quickstart: https://firebase.google.com/docs/firestore/quickstart
- Cloud Functions: https://firebase.google.com/docs/functions/get-started

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet

### Python AI
- Anthropic API: https://docs.anthropic.com/
- Playwright: https://playwright.dev/python/

---

## 📝 Development Workflow

### Daily Standup Questions
1. What did you work on yesterday?
2. What are you working on today?
3. Any blockers?

### Weekly Milestones

**Week 1-2:**
- All teams: Setup Firebase, understand boilerplate
- Team 1: Build basic scraper
- Team 2: Implement simple email generation
- Team 3: Display static data on dashboard

**Week 3-4:**
- Team 1: Schedule scraper, populate Firestore
- Team 2: Add quality scoring, deploy API
- Team 3: Fetch real data from Firebase

**Week 5-6:**
- All teams: Integration testing
- Team 3: Polish UI, add search/filters

**Week 7-8:**
- Final testing and bug fixes
- Demo preparation

---

## 🐛 Common Issues

### "Cannot find module 'react'"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not working
```bash
npm run dev
# Restart the dev server
```

### Firebase errors
- Check that you've uncommented code in `src/lib/firebase.js`
- Verify your API keys are correct
- Make sure Firestore is enabled in Firebase Console

---

## ✅ How to Know You're Done

### Team 1 Checklist
- [ ] Scraper retrieves 20+ nonprofits
- [ ] Data appears in Firestore console
- [ ] Scraper runs automatically on schedule
- [ ] Data validation works (no empty fields)

### Team 2 Checklist
- [ ] API endpoint responds to requests
- [ ] Generates personalized emails
- [ ] Returns quality score
- [ ] Handles errors gracefully

### Team 3 Checklist
- [ ] Dashboard displays all nonprofits
- [ ] Search works
- [ ] Filters work
- [ ] "Generate Email" button calls Team 2's API
- [ ] Email editor saves drafts
- [ ] Mobile responsive

---

## 🚀 Deployment

### Frontend (Team 3)
```bash
npm run build
firebase deploy --only hosting
```

### Backend (Teams 1 & 2)
```bash
cd functions
firebase deploy --only functions
```

---

## 💬 Need Help?

1. Check this README first
2. Search Google/Stack Overflow for error messages
3. Ask in GDSC Slack channel
4. Schedule office hours with team lead
5. Pair program with experienced member

---

## 📚 What's Next?

Once basic features work:
- Add user authentication
- Implement email sending (SendGrid)
- Build analytics dashboard
- Add follow-up tracking
- Create campaign management

---

**Good luck! Start simple, iterate often, and ask questions early. 🚀**
