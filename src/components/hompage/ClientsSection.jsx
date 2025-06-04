const clientLogos = [
  "https://images.seeklogo.com/logo-png/10/1/petron-logo-png_seeklogo-108079.png",
  "https://www.england.nhs.uk/nhsidentity/wp-content/uploads/sites/38/2016/04/nhs-logo-digital-space.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWFf1HA9pjjt8UX86nQxrFgOiIAXu5zchQA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhxT88xdW2L6aluuOTj3aNAajTFN4eBNs0A&s",
  "https://cdn.brandfetch.io/idRRbNH8sS/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://www.logo.wine/a/logo/Abengoa/Abengoa-Logo.wine.svg",
  "https://images.seeklogo.com/logo-png/36/1/yasref-logo-png_seeklogo-369851.png",
  "https://www.saudifal.com.sa/img/logo2-1.png",
  "https://logowik.com/content/uploads/images/samsung-engineering3687.logowik.com.webp",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Samsung_C%26T_logo.svg/2560px-Samsung_C%26T_logo.svg.png",
  "https://logowik.com/content/uploads/images/saipem5622.logowik.com.webp",
  "https://images.seeklogo.com/logo-png/6/1/hyundai-engineering-logo-png_seeklogo-69059.png",
  "https://images.seeklogo.com/logo-png/6/1/hyundai-heavy-industries-logo-png_seeklogo-69063.png",
  "https://hloljob.com//images/alhajricorporation.png",
  "https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-6/469178009_1109458897849211_5627968930924602101_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lnIE0orFYQUQ7kNvwF8jHMz&_nc_oc=Adl8KFqUEbyzkEG-qL562s90yH5FiCc_KqYZngLnDAumMfLSEIchb-tqXCfF6MRHX-s&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&_nc_gid=tgRGMf6KDLrUCv4fBEKi0A&oh=00_AfI4lkBuIvixAswhV5-lVJjRCrC8CteOnhp4fp_yQHVDkg&oe=683FDA03",
  "https://images.seeklogo.com/logo-png/12/1/snc-lavalin-logo-png_seeklogo-128474.png",
  "https://logowik.com/content/uploads/images/technip4442.logowik.com.webp",
  "https://www.sudelettra.com/wp-content/uploads/2017/02/logo-sudelettra.png",
  "https://images.seeklogo.com/logo-png/47/1/sraco-logo-png_seeklogo-472850.png",
  "https://companieslogo.com/img/orig/2310.SR_BIG-7ac54b87.png?t=1720244490",
  "https://images.seeklogo.com/logo-png/28/1/sinopec-logo-png_seeklogo-284996.png",
  "data:image/png;base64,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",
  "https://logowik.com/content/uploads/images/689_holidayinn.jpg",
  "https://images.seeklogo.com/logo-png/21/1/sadara-chemical-company-logo-png_seeklogo-213687.png",
  "https://images.seeklogo.com/logo-png/12/1/sabic-logo-png_seeklogo-121234.png",
  "https://images.seeklogo.com/logo-png/31/1/petrofac-logo-png_seeklogo-310770.png",
  "https://images.seeklogo.com/logo-png/12/1/saudi-electricity-company-logo-png_seeklogo-122931.png",
  "https://images.seeklogo.com/logo-png/30/1/saudi-aramco-logo-png_seeklogo-306746.png",
  "https://images.seeklogo.com/logo-png/2/1/carlo-gavazzi-logo-png_seeklogo-26353.png",
  "https://images.seeklogo.com/logo-png/34/1/chiyoda-corporation-logo-png_seeklogo-341759.png",
  "https://www.chinachamber.org.uk/wp-content/uploads/2025/01/BCEGI_Logo-01-2048x646.jpg",
  "https://images.seeklogo.com/logo-png/38/1/bonatti-logo-png_seeklogo-386691.png",
  "https://argaamplus.s3.amazonaws.com/911df464-fbb4-4909-8f1d-767f088a5302.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTix1fsoEi70g-RbCC8h41LXpBF6aVRjo75EHz0oRamAphHWbIZiKEicZb4cCPXBX4_NFY&usqp=CAU",
  "https://www.albiladarabia.com/wp-content/uploads/2023/09/logo.png",
  "https://images.seeklogo.com/logo-png/21/1/larsen-toubro-lt-logo-png_seeklogo-211460.png",
  "https://images.seeklogo.com/logo-png/31/1/maaden-logo-png_seeklogo-316199.png",
  "https://images.seeklogo.com/logo-png/54/1/satorp-logo-png_seeklogo-544812.png",
  "https://images.seeklogo.com/logo-png/4/1/esb-logo-png_seeklogo-48822.png",
];

export default function ClientsSection() {
  return (
    <section className="section clients-section" id="client-component">
      <div className="container">
        <div className="section-title">
          <h2>Our Clients</h2>
          <p className="section-description">
            Trusted by leading companies across industries
          </p>
        </div>

        <div className="client-slider">
          <div className="client-track">
            {clientLogos.map((clientLogo) => (
              <div key={clientLogo} className="client-item">
                <img src={clientLogo} className="client-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
