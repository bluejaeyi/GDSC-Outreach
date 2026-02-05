/**
 * Firebase Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project or select existing project
 * 3. Add a web app to your project
 * 4. Copy your Firebase configuration
 * 5. Replace the placeholder values below
 * 6. Enable Firestore Database in Firebase Console
 * 7. Set up Firestore security rules
 * 
 * TEAM 1 (Scraper) TODO:
 * - Create 'nonprofits' collection schema
 * - Document Firestore data structure
 * 
 * TEAM 2 (AI) TODO:
 * - Create 'emails' collection for generated drafts
 * - Store prompt templates if needed
 * 
 * TEAM 3 (Frontend) TODO:
 * - Set up Firebase Authentication
 * - Configure Firestore queries
 */

// Uncomment and use when ready to integrate Firebase
/*
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
*/

// Placeholder exports for development
export const auth = null;
export const db = null;
export default null;
