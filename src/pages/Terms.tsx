import React from 'react';
import CCVNavbar from '@/components/CCV/CCVNavbar';
import CCVFooter from '@/components/CCV/CCVFooter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <CCVNavbar />
      <main className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="mb-8 border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-12 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">1. Website Usage Terms</h2>
              <p className="mb-4">
                This website is operated by Crowley Capital ("the Firm"). By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined herein. If you do not agree to these terms, please do not use this website.
              </p>
              <p>
                The content provided on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">2. Confidentiality</h2>
              <p className="mb-4">
                All information contained on this website, including but not limited to investment strategies, portfolio composition, research reports, and market commentary, is confidential and proprietary to Crowley Capital.
              </p>
              <p className="mb-4">
                Users may not reproduce, distribute, publish, or otherwise disseminate any content from this website without prior written consent from the Firm. Unauthorized use or disclosure of confidential information may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">3. Investment Disclaimers</h2>
              <p className="mb-4">
                <strong>No Investment Advice:</strong> The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice. Nothing on this website should be construed as a recommendation to buy, sell, or hold any security or investment product.
              </p>
              <p className="mb-4">
                <strong>Risk of Loss:</strong> Investments in private markets, including venture capital, private equity, and growth-stage companies, involve substantial risk of loss. Past performance is not indicative of future results. Investors should carefully consider their investment objectives, risk tolerance, and financial circumstances before making any investment decisions.
              </p>
              <p className="mb-4">
                <strong>Forward-Looking Statements:</strong> This website may contain forward-looking statements regarding market trends, investment opportunities, and economic projections. These statements are based on current expectations and assumptions and are subject to significant business, economic, and competitive uncertainties. Actual results may differ materially from those expressed or implied.
              </p>
              <p>
                <strong>Professional Consultation:</strong> Before making any investment decision, individuals should consult with their own legal, tax, and financial advisors to assess the suitability of any investment opportunity presented.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">4. Investor Eligibility</h2>
              <p className="mb-4">
                The investment opportunities referenced on this website are generally available only to accredited investors as defined under Rule 501 of Regulation D of the Securities Act of 1933, as amended, or qualified purchasers as defined under Section 2(a)(51) of the Investment Company Act of 1940, as amended.
              </p>
              <p className="mb-4">
                By using this website, you represent and warrant that you meet the applicable investor eligibility requirements in your jurisdiction. Crowley Capital reserves the right to verify investor accreditation status before engaging in any investment discussions or transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">5. Jurisdiction and Governing Law</h2>
              <p className="mb-4">
                This website is controlled and operated from the State of Texas, United States. The Firm makes no representation that materials on this website are appropriate or available for use in other locations. Access to this website from jurisdictions where its contents are illegal is prohibited.
              </p>
              <p className="mb-4">
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising from or relating to the use of this website shall be subject to the exclusive jurisdiction of the state and federal courts located in Travis County, Texas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                Crowley Capital shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or relating to the use of this website or the information contained herein, including but not limited to investment losses, lost profits, or business interruption.
              </p>
              <p>
                The Firm makes no warranties or representations regarding the accuracy, completeness, timeliness, or reliability of any information on this website. All information is provided "as is" without warranty of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content on this website, including text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Crowley Capital or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                Users are granted a limited, non-exclusive, non-transferable license to access and use this website for personal, non-commercial purposes only. Any other use requires prior written permission from the Firm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">8. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites or resources. Crowley Capital does not endorse and is not responsible for the content, products, services, or practices of any third-party websites. Users access third-party links at their own risk and should review the applicable terms and privacy policies of such websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">9. Modifications to Terms</h2>
              <p className="mb-4">
                Crowley Capital reserves the right to modify, amend, or update these Terms & Conditions at any time without prior notice. Continued use of this website following any changes constitutes acceptance of the modified terms.
              </p>
              <p>
                Users are encouraged to review these Terms & Conditions periodically to stay informed of any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">10. Contact Information</h2>
              <p className="mb-4">
                For questions regarding these Terms & Conditions or any other matters related to this website, please contact:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="font-semibold text-black mb-2">Crowley Capital</p>
                <p>Email: <a href="mailto:jakecrowley05@gmail.com" className="text-blue-600 hover:underline">jakecrowley05@gmail.com</a></p>
                <p>Location: Austin, Texas</p>
              </div>
            </section>

            <section className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                These Terms & Conditions constitute the entire agreement between users and Crowley Capital regarding the use of this website. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>
          </div>
        </div>
      </main>
      <CCVFooter />
    </div>
  );
};

export default Terms;
