// filepath: src/app/terms/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | CardConnect Hub',
  description: 'Terms of service and user agreement for CardConnect Hub website and services.',
}

export default function TermsPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
        
        <div className="max-w-3xl mx-auto prose prose-blue">
          <p className="text-gray-600 italic">Last updated: May 1, 2023</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to CardConnect Hub ("we", "our", or "us"). These Terms of Service govern your use of our website, 
            located at beckettcollectibles.com (the "Service"), and any related services offered by us.
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the 
            terms, then you may not access the Service.
          </p>
          
          <h2>2. Affiliate Disclosure</h2>
          <p>
            CardConnect Hub is an independently operated affiliate site. We participate in the Beckett Media affiliate program, 
            which means we earn commissions for purchases made through our links to Beckett Media products and services.
          </p>
          <p>
            We strive to provide honest, unbiased recommendations, but you should be aware that we may receive compensation 
            for products and services featured on this website.
          </p>
          
          <h2>3. Use of Service</h2>
          <p>
            You agree to use the Service only for purposes that are lawful and in accordance with these Terms. 
            You agree not to use the Service:
          </p>
          <ul>
            <li>In any way that violates any applicable local, state, national, or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit any material that is defamatory, obscene, or otherwise objectionable.</li>
            <li>To impersonate or attempt to impersonate us, our employees, or other users.</li>
            <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
          </ul>
          
          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of 
            CardConnect Hub and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without the prior 
            written consent of CardConnect Hub.
          </p>
          
          <h2>5. Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by us.
          </p>
          <p>
            We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
            third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
          </p>
          
          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, 
            including without limitation if you breach the Terms.
          </p>
          
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall CardConnect Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, be 
            liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of 
            profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Service;</li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>Unauthorized access, use or alteration of your transmissions or content.</li>
          </ul>
          
          <h2>8. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
            we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at terms@beckettcollectibles.com.
          </p>
        </div>
      </div>
    </div>
  )
}