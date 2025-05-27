import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | CardConnect Hub',
  description: 'Privacy policy and data handling practices for CardConnect Hub website and services.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto prose prose-blue">
          <p className="text-gray-600 italic">Last updated: May 1, 2023</p>
          
          <h2>1. Introduction</h2>
          <p>
            CardConnect Hub ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website at 
            cardconnecthub.com (the "Site") and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2>2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, 
              time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology 
              on the devices you use to access this Site.</li>
            <li><strong>Usage Data</strong> includes information about how you use our Site and services.</li>
            <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our 
              third parties and your communication preferences.</li>
          </ul>
          
          <h2>3. How We Collect Your Data</h2>
          <p>
            We use different methods to collect data from and about you including through:
          </p>
          <ul>
            <li><strong>Direct interactions.</strong> You may give us your Identity, Contact and Financial Data by filling in forms 
              or by corresponding with us by post, phone, email or otherwise.</li>
            <li><strong>Automated technologies or interactions.</strong> As you interact with our Site, we may automatically collect 
              Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server 
              logs and other similar technologies.</li>
            <li><strong>Third parties or publicly available sources.</strong> We may receive personal data about you from various 
              third parties and public sources, such as analytics providers like Google.</li>
          </ul>
          
          <h2>4. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the 
            following circumstances:
          </p>
          <ul>
            <li>To register you as a new customer.</li>
            <li>To process and deliver your order.</li>
            <li>To manage our relationship with you.</li>
            <li>To improve our Site, products/services, marketing or customer relationships.</li>
            <li>To recommend products or services which may be of interest to you.</li>
          </ul>
          
          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
          </p>
          <p>
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to 
            your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags, 
            and scripts to collect and track information and to improve and analyze our Service.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not 
            accept cookies, you may not be able to use some portions of our Service.
          </p>
          
          <h2>6. Third-Party Disclosure</h2>
          <p>
            We may disclose your personal data to third parties in the following circumstances:
          </p>
          <ul>
            <li>To our service providers who perform services on our behalf.</li>
            <li>To CardConnect Hub, as we are an affiliate partner.</li>
            <li>To comply with a legal obligation.</li>
            <li>To protect our rights, property, or safety, or that of our customers or others.</li>
          </ul>
          
          <h2>7. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or 
            accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, 
            agents, contractors and other third parties who have a business need to know.
          </p>
          
          <h2>8. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update 
            the "Last updated" date at the top of this Privacy Policy.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@cardconnecthub.com.
          </p>
        </div>
      </div>
    </div>
  )
}