import Footer from "../components/ui/Footer";
import MainWrapper from "../components/ui/Main";

const meta = {
  title: "Privacy Policy - Exquisite Wood Floors",
  description: "Privacy policy for Exquisite Wood Floors",
  url: "https://www.exquisitewoodfloors.com/privacy",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.jpeg",
  imageAlt: "Exquisite Wood Floors",
};

export default function privacy() {
  return (
    <>
      <MainWrapper
        heading={meta}
        styling="pt-48 px-4 max-w-screen-xl mx-auto flex flex-col gap-8 pb-20"
      >
        <div>
          <h1 className=" text-4xl mb-4">Privacy Policy</h1>
          <p>
            Exquisite Wood Floors operates the website &quot;Exquisite Wood
            Floors&quot; at exquisitewoodfloors.com. We take your privacy
            seriously. To better protect your privacy, we provide this privacy
            policy notice explaining the way your personal information is
            collected and used.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Collection of Routine Information</h2>

          <p>
            This website track basic information about its visitors. This
            information includes, but is not limited to, IP addresses, browser
            details, timestamps and referring pages. None of this information
            can personally identify specific visitors to this website. The
            information is tracked for routine administration and maintenance
            purposes.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Cookies</h2>

          <p>
            Where necessary, this website uses cookies to store information
            about a visitor&apos;s preferences and history to better serve the
            visitor and/or present the visitor with customized content.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">
            Advertisement and Other Third Parties
          </h2>

          <p>
            Advertising partners and other third parties may use cookies,
            scripts and/or web beacons to track visitor activities on this
            website to display advertisements and other useful information. Such
            tracking is done directly by the third parties through their servers
            and is subject to their privacy policies. This website has no access
            or control over these cookies, scripts and/or web beacons that may
            be used by third parties.
          </p>

          <p>
            We have included links on this website for your use and reference.
            We are not responsible for the privacy policies on these websites.
            You should be aware that the privacy policies of these websites may
            differ from our own.
          </p>

          <p className="mt-4">
            Link to the privacy policy of third-party service providers used by
            the website
          </p>

          <ul className=" list-disc pl-4">
            <li>
              <a href="https://analytics.google.com/analytics/web/">
                Google Analytics
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Security</h2>

          <p>
            The security of your personal information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage, is 100% secure. While we strive to use
            commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Changes To This Privacy Policy</h2>

          <p>
            This Privacy Policy is effective as of 2022-11-18 and will remain in
            effect except concerning any changes in its provisions in the
            future, which will be in effect immediately after being posted on
            this page. We reserve the right to update or change our Privacy
            Policy at any time and you should check this Privacy Policy
            periodically. If we make any material changes to this Privacy
            Policy, we will notify you either through the email address you have
            provided us or by placing a prominent notice on our website.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Contact Information</h2>

          <p>
            For any questions or concerns regarding the privacy policy, please
            send us an email at info@ewfny.com.
          </p>

          <p>Our Address: 941 Mclean Ave, Suite 472, Yonkers, NY 10704</p>

          <p>
            This privacy policy page was created by Arthur Gareginyan and
            modified/generated by Free & Open Source Privacy Policy Generator.
          </p>
        </div>
      </MainWrapper>
      <Footer bgColor="bg-theme-500" />
    </>
  );
}
